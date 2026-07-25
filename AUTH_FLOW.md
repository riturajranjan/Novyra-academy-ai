# Authentication Flow — Novyra Academy AI

Implemented in Phase 2. Auth.js v5, Credentials provider, JWT sessions, `@auth/prisma-adapter` for user persistence. See `ARCHITECTURE.md` for how this fits the wider system, and `API_SPEC.md` for the exact input/output contract of each Server Action referenced below.

## Core files

| File | Role |
|---|---|
| `src/lib/auth.ts` | Auth.js v5 config — Credentials provider, JWT session strategy, PrismaAdapter, `jwt`/`session` callbacks that carry `user.id` onto the session. |
| `src/app/api/auth/[...nextauth]/route.ts` | Required Auth.js Route Handler (`GET`/`POST`), re-exporting `handlers` from `src/lib/auth.ts`. |
| `src/lib/password.ts` | `hashPassword`/`verifyPassword` — bcryptjs, 10 salt rounds. |
| `src/lib/validation/auth.ts` | Zod schemas: `loginSchema`, `signupSchema`, `requestPasswordResetSchema`, `resetPasswordSchema`. |
| `src/app/actions/auth.ts` | Server Actions: `login`, `signup`, `requestPasswordReset`, `resetPassword`, `logout`. |
| `src/lib/dal.ts` | `getCurrentUser()` / `requireUser()` — the only place session identity is trusted from. |
| `proxy.ts` | Route-level gating (Next 16's `middleware.ts` replacement). |

## 1. Sign Up

1. User fills `SignupForm` (`src/components/auth/SignupForm.tsx`): name, email, password, confirm password, terms checkbox.
2. On submit, the form builds a `FormData` from local state and calls the `signup` Server Action (`src/app/actions/auth.ts`) inside a `useTransition`.
3. `signup`:
   - Validates input with `signupSchema` (name ≥ 2 chars; email format; password ≥ 8 chars with a letter and a number; `confirmPassword` must match; `termsAccepted` must be `true`). Any failure returns `{ error }`, rendered inline in the form.
   - Rejects if a `User` with that email already exists (`{ error: "An account with this email already exists" }`).
   - Hashes the password (`hashPassword`) and creates the `User` row.
   - Immediately signs the new user in via `signIn("credentials", { email, password, redirect: false })`.
   - On success, `redirect("/board")` — the user lands at the start of the onboarding flow.
4. `ContinueButton` reflects the in-flight state (`loading`) and only ever navigates via the action's own `redirect()` — never optimistically.

## 2. Log In

1. User fills `LoginForm`: email, password, "remember me" checkbox.
2. On submit, `login` Server Action:
   - Validates with `loginSchema`.
   - Calls `signIn("credentials", { email, password, redirect: false })`, which runs the provider's `authorize()` (looks up the user by email, verifies the password hash).
   - Any `AuthError` (wrong email/password, or no `passwordHash` on the account) returns `{ error: "Invalid email or password" }` — never reveals which field was wrong.
   - On success, `redirect("/dashboard")`.
3. **Known limitation:** "remember me" is captured in the form but does not yet vary session length dynamically — Auth.js's default JWT session lifetime is 30 days, which already matches the "Remember me for 30 days" copy in the UI, so this isn't a functional gap today, just not independently togglable per login.

## 3. Log Out

1. The only "Sign Out" trigger in the app today is in `src/components/settings/DangerZone.tsx` (mobile Settings view).
2. It calls the `logout` Server Action inside a `useTransition`.
3. `logout` reads the current session via `auth()`; if there is one, calls `signOut({ redirect: false })` then `redirect("/login")`.

## 4. Forgot Password

1. User submits `ForgotPasswordForm` (email only).
2. `requestPasswordReset` Server Action:
   - Validates the email.
   - Looks up the user. **Regardless of whether the account exists**, the action returns `{ success: true }` and the form shows the same "if an account exists, a reset link has been sent" message — this prevents the endpoint being used to enumerate registered emails.
   - If the account does exist: creates a `PasswordResetToken` (random UUID, 30-minute expiry) and logs the reset URL to the server console: `${NEXT_PUBLIC_APP_URL}/reset-password?token=...`.
3. **Known limitation (agreed scope for this phase):** the reset link is logged to the console, not emailed. Real email delivery (e.g. Resend/SMTP) is deferred to a later phase.

## 5. Reset Password

1. User opens the logged link, landing on `src/app/(auth)/reset-password/page.tsx?token=...` (new route added this phase).
2. `ResetPasswordForm` collects a new password + confirmation, and submits together with the `token` from the URL.
3. `resetPassword` Server Action:
   - Validates input with `resetPasswordSchema`.
   - Looks up the `PasswordResetToken`; rejects (`{ error: "This reset link is invalid or has expired" }`) if it doesn't exist, is already used, or is past `expiresAt`.
   - In a single `$transaction`: updates the `User.passwordHash` and marks the token `usedAt` (so it can't be replayed).
   - On success, `redirect("/login")`.

## 6. Session & Route Protection

- **Session strategy:** JWT (required by the Credentials provider — Auth.js does not persist credentials-based sign-ins to the database `Session` table). The `jwt` callback attaches `user.id` to the token on sign-in; the `session` callback copies it onto `session.user.id` so server code can always read the acting user's id.
- **`proxy.ts`** (runs on every route except `api`, static assets, and common image extensions):
  - Public routes: `/`, `/login`, `/signin`, `/forgot-password`, `/reset-password`.
  - Any other route: unauthenticated requests are redirected to `/login`.
  - Authenticated requests to `/login` or `/signin` are redirected to `/dashboard`.
  - **Scope note:** this is authentication-only gating. It does not yet check onboarding completion (no `OnboardingProfile` writes exist yet) — that's deferred to when onboarding persistence is built.
- **Authorization boundary (`src/lib/dal.ts`):** `getCurrentUser()` (cached per-request via React `cache()`) and `requireUser()` are the only sanctioned way any Server Action or Server Component reads "who is this." Every mutation re-derives identity from the session — never from client-submitted user/account IDs.

## Explicitly out of scope this phase

- Email verification (`User.emailVerified` exists in the schema but nothing sets it yet).
- Real email delivery for password reset.
- Role-based authorization / admin access (no `role` concept exists yet — deferred to the Admin-features phase).
- Onboarding-completion route gating.
- Account deletion (the "Delete Account" button in `DangerZone.tsx` remains unwired — not an authentication concern).
