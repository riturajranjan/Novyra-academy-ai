# Novyra Academy AI — Architecture

Status snapshot: frontend UI is complete; backend is being built in phases (see [Development Workflow](#development-workflow)). This document reflects what exists today plus the agreed design for what's being built next. Sections describing unimplemented work are marked **(Planned)**.

## Folder Structure

```
novyra-academy-ai/
├── prisma/
│   ├── schema.prisma        # Data model (Postgres via Neon)
│   └── seed.ts               # Upserts content-taxonomy rows (boards, classes, subjects, ...)
├── public/                   # Static images used by landing/onboarding UI
├── src/
│   ├── app/                  # Next.js App Router — route segments only, no logic
│   │   ├── (auth)/           # Route group: login, signin (signup), forgot-password
│   │   ├── (onboarding)/     # Route group: board, class, subjects, learning-style,
│   │   │                     #   goal-selection, study-plan, ai-personalization
│   │   ├── dashboard/
│   │   ├── quiz/
│   │   ├── ai-classroom/
│   │   ├── smart-notes/
│   │   ├── progress/
│   │   ├── chapter/
│   │   ├── settings/
│   │   ├── subject/
│   │   ├── layout.tsx        # Root layout
│   │   └── page.tsx          # Landing page
│   ├── components/           # All UI, grouped by feature (mirrors src/app/*)
│   │   ├── auth/ ai-classroom/ chapter/ dashboard/ landing/ layout/
│   │   ├── onboarding/ progress/ quiz/ settings/ shared/ smart-notes/ subjects/
│   │   └── ui/               # Design-system primitives (shadcn-based)
│   ├── constants/            # Static mock/content data (being migrated to DB-backed data per phase)
│   ├── hooks/                # Client hooks; currently local useState, several still empty stubs
│   ├── lib/
│   │   ├── prisma.ts         # Singleton PrismaClient
│   │   ├── dashboard.ts      # (currently empty — placeholder)
│   │   └── utils.ts          # cn() classname helper
│   └── types/                # Shared TypeScript interfaces, one file per feature
├── styles/                   # Design tokens (colors, spacing, typography, radius, shadows)
├── .env.example               # Template for DATABASE_URL / DIRECT_URL (Neon)
├── AGENTS.md / CLAUDE.md       # Agent operating instructions for this repo
└── ARCHITECTURE.md             # This file
```

**Known pre-existing issues, not yet fixed** (flagged during Phase 1 analysis, out of scope until explicitly requested since fixing them touches non-backend files):
- `./FeatureItem,` and `./index}.tsx` — empty stray files at repo root.
- `src/constants/quiz.ts` and `src/constants/ai-classroom.ts` import types from a nonexistent `./types` module.
- `src/constants/classes.ts` imports `SchoolClass` from `@/types/class`, but that file actually lives at `/types/class.ts` (repo root), not `src/types/class.ts` — the import doesn't resolve.
- Root-level `services/`, `store/`, `utils/`, `types/`, `features/`, `hooks/`, `lib/` directories exist alongside their `src/` equivalents and are effectively unused/empty; the active code lives under `src/`.

## Tech Stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | Next.js 16.2.10 (App Router) | **Not** Next 15 — breaking changes apply: `proxy.ts` replaces `middleware.ts`, `cookies()`/`headers()`/`params`/`searchParams` are strictly async, `revalidateTag` requires a cache-profile argument. Requires **Node.js 20.9+** (dev machine is currently on 18.20.8 — upgrade pending). |
| UI runtime | React 19.2 | App Router canary channel bundled with Next 16. |
| Language | TypeScript (strict mode) | `tsconfig.json` — `strict: true`, path alias `@/* → src/*`. |
| Styling | Tailwind CSS 3, `tailwindcss-animate`, `tw-animate-css` | Utility-first; `cn()` helper in `src/lib/utils.ts` composes `clsx` + `tailwind-merge`. |
| Components | shadcn/ui primitives (`src/components/ui`), `class-variance-authority`, `@base-ui/react` | |
| Animation | Framer Motion | |
| Forms | React Hook Form + `@hookform/resolvers` + Zod | Installed but not yet wired to real submission logic (forms currently `console.log`). |
| Client data/state | Zustand, TanStack Query | Installed but **currently unused** — no store, no `QueryClient`, no `useQuery` anywhere yet. |
| ORM / DB | Prisma 6 + PostgreSQL (Neon) | Added in Phase 1. `src/lib/prisma.ts` is the singleton client. |
| Auth | next-auth v4.24.14 installed today; **Auth.js v5 upgrade approved for Phase 2** | Schema (`Account`/`Session`/`VerificationToken`) is already shaped for the v5 `PrismaAdapter`. |
| Icons | lucide-react | |
| Notifications (toast) | sonner | |
| Theming | next-themes | |

## Authentication Flow (Planned — Phase 2)

Not yet implemented. Design, based on the schema already in place and Next.js's documented App Router auth guidance:

1. **Provider**: Auth.js v5 (`next-auth@5`), Credentials provider (email + bcrypt-hashed password) to start — matches the existing `LoginForm`/`SignupForm` fields (email, password, name, confirmPassword, rememberMe/termsAccepted).
2. **Session strategy**: JWT sessions — Auth.js's Credentials provider only supports JWT sessions (it doesn't persist credentials-based sign-ins to the database `Session` table). `@auth/prisma-adapter` is still used for `User`/`Account`/`VerificationToken` persistence, and the `Session` table stays in the schema for if/when an OAuth provider is added later.
3. **Sign-up**: Server Action validates input with Zod → hashes password (bcrypt) → creates `User` row → establishes session → redirects to onboarding.
4. **Login**: Server Action → Auth.js `signIn("credentials", ...)` → session cookie set (`HttpOnly`, `Secure`, `SameSite=lax`).
5. **Forgot password**: generates a `PasswordResetToken` row (already in schema) with an expiry; reset link is **logged to console** for now (real email delivery deferred to a later phase); a reset-password page consumes the token and updates `passwordHash`.
6. **Route protection**: `proxy.ts` at the project root (the Next 16 replacement for `middleware.ts`) does an **optimistic** cookie/session check — unauthenticated users get redirected to `/login`; authenticated users without a completed `OnboardingProfile` get redirected into the onboarding flow; everyone else passes through.
7. **Authorization boundary**: a Data Access Layer (`verifySession()`, cached per-request via React `cache()`) centralizes "is this user allowed to see/do this," per Next.js's own recommended pattern — every Server Action and Route Handler calls it rather than trusting client-supplied identity. Every mutation re-derives the acting user from the session, never from client-submitted IDs.
8. **Client session access**: Server Components call `auth()` directly; only Client Components that need reactive session state (rare in this UI) will use `SessionProvider`/`useSession`.

## Database Schema Overview

Defined in `prisma/schema.prisma`, provider `postgresql` (Neon), with both `DATABASE_URL` (pooled) and `DIRECT_URL` (direct, for migrations).

**Auth (Auth.js v5 `PrismaAdapter`-shaped, wired in Phase 2):**
- `User` — id, name, email (unique), emailVerified, passwordHash, image, timestamps.
- `Account`, `Session`, `VerificationToken` — standard Auth.js adapter tables.
- `PasswordResetToken` — token, userId, expiresAt, usedAt.

**Content taxonomy** (mirrors `src/constants/{boards,classes,subjects,learningStyles,targetScores,dailyGoals}.ts`, seeded by `prisma/seed.ts`):
- `Board` (id, title, subtitle, badge, icon, features[])
- `SchoolClass` (id, title, subtitle, chapterCount, subjectCount, streamCount, personalized)
- `Subject` (id, title, description, chapterCount, level, badge, icon)
- `LearningStyle` (id, title, description, icon, color)
- `TargetScore` (id, score, title, desc)
- `DailyGoal` (id, title, duration, icon)

**Per-user onboarding state:**
- `OnboardingProfile` — one-to-one with `User`; references one `Board`, one `SchoolClass`, one `TargetScore`, one `DailyGoal`, an `examDate`, and a `completedAt` marker.
- `UserSubject`, `UserLearningStyle` — join tables for the many-to-many selections (a user picks multiple subjects and multiple learning styles).

**Deliberately not modeled yet** (added incrementally in their own phase, per the "implement one phase at a time" rule, rather than speculatively now):
- Quiz engine: `Question`, `Option`, `QuestionNavigatorItem`, `QuizStats`, `Attempt` — Phase 4.
- Dashboard aggregates, Chapters-as-content, Notifications, Search indexes — Phase 3.
- Smart Notes, Flashcards, AI Classroom journey/module persistence, AI chat history — Phase 5.
- Payments, Subscription, Billing, Admin/role tables — Phase 6.

## API Architecture (Planned)

Next.js 16 App Router gives two request-handling primitives; this project uses both, chosen per case:

- **Server Actions** (`'use server'`) for all **mutations** initiated from a form or user interaction (login, signup, onboarding step submission, quiz answer submission). Per Next's own guidance, every Server Action is a public POST endpoint the moment it's referenced from a Client Component — each one independently re-authenticates via the DAL (`verifySession()`) and re-derives identity/ownership from the session, never from client-submitted payloads. Framework-level CSRF (Origin/Host check) and body-size limits (1MB default) apply automatically.
- **Route Handlers** (`app/**/route.ts`) for **reads consumed by client-side code** that needs a real endpoint (e.g., TanStack Query polling, or anything a Client Component fetches outside the render pass) and for the Auth.js catch-all (`app/api/auth/[...nextauth]/route.ts`). Not cached by default; caching is opted into per-route with `dynamic = 'force-static'` or `use cache` where appropriate.
- **Server Components with direct `await prisma...`/DAL calls** for everything that's just "render this page with this user's data" — no API layer needed since the fetch happens at render time on the server.
- **`proxy.ts`** (not `middleware.ts` — renamed in Next 16, Node runtime only, no Edge) handles route-level redirects for auth/onboarding gating, described above.

Route handlers/actions are colocated with the feature they serve (e.g., quiz submission logic near `src/app/quiz/`), following the same feature-based grouping already used by `src/components/*`.

## State Management

- **Server state** (anything from the DB): fetched in Server Components wherever possible — no client cache needed since the data is already server-rendered.
- **TanStack Query** (installed, unused today): reserved for genuinely client-driven interactions that need caching/refetch/optimistic updates — e.g., quiz timer-driven answer submission, live progress updates. Not used for data a Server Component can just fetch directly.
- **Zustand** (installed, unused today): reserved for ephemeral, cross-component **UI** state that isn't persisted server-side (e.g., quiz navigator panel open/closed, active learning-mode tab) — not a substitute for server state.
- **Local component state / existing hooks** (`useBoard`, `useClass`, `useGoalSelection`, `useLearningStyle`, etc.): currently hold onboarding selections in memory only. Phase 2/3 work wires these to Server Actions so selections persist to `OnboardingProfile` instead of being lost on refresh — the hooks' external shape stays the same so components don't need to change.

## Deployment Architecture

- **Hosting**: Vercel (implied by the Next.js/`next.config.ts` setup and `README.md`'s default deployment section) — not yet configured for this project explicitly.
- **Database**: Neon Postgres (serverless, pooled connections via PgBouncer for the app, a direct connection for Prisma migrations) — chosen in Phase 1.
- **Environment variables**: `.env.example` documents `DATABASE_URL`/`DIRECT_URL`; real values live in `.env.local` (gitignored) locally and in Vercel's project environment variables in deployed environments. Auth secrets (`AUTH_SECRET`, provider keys) will be added here in Phase 2.
- **Build requirement**: Node.js **20.9+** is mandatory for `next build`/`next dev` under Next 16 — CI and any deployment target must run that runtime.
- **Migrations**: `npx prisma migrate dev` locally against `DIRECT_URL`; production migrations run via `npx prisma migrate deploy` as a release step (not yet wired into a CI/CD pipeline).

## Coding Standards

- Strict TypeScript everywhere; no `any` without justification.
- **Never modify or redesign existing UI** — this is a hard rule for backend work in this repo. Reuse existing components; wire data into them rather than rebuilding them.
- Modular, feature-based organization: components/constants/types/hooks are grouped by feature (`quiz`, `dashboard`, `onboarding`, ...), not by technical layer.
- Prefer Server Components; use `'use client'` only where interactivity requires it.
- No speculative abstractions or schema/endpoints for future phases — build what the current phase needs, extend later (see the Prisma schema's "deliberately not modeled yet" list above).
- All mutations validated with Zod at the boundary; never trust client-supplied IDs for ownership — re-derive from session server-side.
- Follow Next.js 16 conventions exactly (`proxy.ts` not `middleware.ts`, async `params`/`searchParams`/`cookies()`/`headers()`, `revalidateTag(tag, profile)`), since this version has real breaking changes from the training-data-era Next.js.
- New backend code must be lint-clean and type-clean; pre-existing unrelated lint/TS issues in UI files are left untouched unless separately requested.

## Development Workflow

Work proceeds in the phase order the user defined:

1. **Phase 1** (done): project setup, Prisma, Neon, env vars, schema, seed data.
2. **Phase 2**: Auth.js, authentication, authorization, protected routes, session management, user profile.
3. **Phase 3**: Dashboard APIs, Subjects, Chapters, Search, Notifications.
4. **Phase 4**: Quiz engine, Attempts, Progress tracking, Analytics.
5. **Phase 5**: Smart Notes, Flashcards, AI Classroom, AI Chat, Voice AI.
6. **Phase 6**: Payments, Subscription, Billing, Admin features, hardening (rate limiting, logging, testing).

Per phase:
- Before any code changes, the exact list of files to be **created** vs **modified**, and why, is presented for review.
- One phase is implemented at a time — no work starts on a later phase until the current one is approved.
- After each phase: `npm run lint` runs (new/modified backend files must be clean; pre-existing UI lint issues are out of scope) and `npm run build` runs once Node is upgraded to 20.9+ (currently skipped per explicit agreement, since it fails today solely on the Node-version check, unrelated to any code change).
- Explicit approval is required before moving to the next phase.
