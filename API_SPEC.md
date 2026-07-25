# API Spec — Authentication

Per App Router best practice (and `PROJECT_RULES.md` #7), authentication **mutations** are implemented as Server Actions, not REST routes — each is still a real network endpoint (any Server Action referenced from client code is POST-reachable), just invoked as a function rather than via `fetch`. The one traditional HTTP Route Handler is Auth.js's own required catch-all.

All Server Actions below live in `src/app/actions/auth.ts` and share this return shape:

```ts
type ActionState = { error?: string; success?: boolean } | undefined;
```

A `redirect()` call inside an action short-circuits and navigates instead of returning — noted per action below.

---

## `login`

```ts
function login(prevState: ActionState, formData: FormData): Promise<ActionState>
```

- **Input (`FormData`):** `email` (string), `password` (string)
- **Validation:** `loginSchema` — `email` must be a valid email; `password` non-empty.
- **Behavior:** calls Auth.js `signIn("credentials", { email, password, redirect: false })`.
- **Success:** `redirect("/dashboard")` (no return value observed by the caller).
- **Failure modes:**
  | Condition | Result |
  |---|---|
  | Zod validation fails | `{ error: <first Zod issue message> }` |
  | No user with that email, no password set, or wrong password | `{ error: "Invalid email or password" }` (deliberately generic) |

---

## `signup`

```ts
function signup(prevState: ActionState, formData: FormData): Promise<ActionState>
```

- **Input (`FormData`):** `name`, `email`, `password`, `confirmPassword`, `termsAccepted` (present as `"on"` when checked, absent otherwise — matches native checkbox `FormData` semantics)
- **Validation:** `signupSchema` — `name` ≥ 2 chars (trimmed); valid `email`; `password` ≥ 8 chars with at least one letter and one digit; `confirmPassword` must equal `password`; `termsAccepted` must be `true`.
- **Behavior:** rejects duplicate email → hashes password (bcryptjs, 10 rounds) → creates `User` → signs in immediately via `signIn("credentials", ...)`.
- **Success:** `redirect("/board")`.
- **Failure modes:**
  | Condition | Result |
  |---|---|
  | Zod validation fails | `{ error: <first Zod issue message> }` |
  | Email already registered | `{ error: "An account with this email already exists" }` |
  | User created but immediate sign-in fails | `{ error: "Account created, but automatic sign-in failed. Please log in." }` |

---

## `requestPasswordReset`

```ts
function requestPasswordReset(prevState: ActionState, formData: FormData): Promise<ActionState>
```

- **Input (`FormData`):** `email`
- **Validation:** `requestPasswordResetSchema` — valid email.
- **Behavior:** looks up the user; if found, creates a `PasswordResetToken` (UUID, 30-minute expiry) and logs `${NEXT_PUBLIC_APP_URL}/reset-password?token=...` to the server console (real email delivery is deferred).
- **Success:** always `{ success: true }` **whether or not the account exists** — intentional anti-enumeration behavior, not a bug.
- **Failure modes:**
  | Condition | Result |
  |---|---|
  | Zod validation fails | `{ error: <first Zod issue message> }` |

---

## `resetPassword`

```ts
function resetPassword(prevState: ActionState, formData: FormData): Promise<ActionState>
```

- **Input (`FormData`):** `token` (from the emailed/logged link's query string), `password`, `confirmPassword`
- **Validation:** `resetPasswordSchema` — `token` non-empty; `password` ≥ 8 chars with a letter and a digit; `confirmPassword` must match.
- **Behavior:** looks up the `PasswordResetToken`; if valid (exists, unused, not expired), atomically (`$transaction`) updates `User.passwordHash` and marks the token `usedAt`.
- **Success:** `redirect("/login")`.
- **Failure modes:**
  | Condition | Result |
  |---|---|
  | Zod validation fails | `{ error: <first Zod issue message> }` |
  | Token missing, already used, or expired | `{ error: "This reset link is invalid or has expired" }` |

---

## `logout`

```ts
function logout(): Promise<void>
```

- **Input:** none.
- **Behavior:** reads the current session via `auth()`; if present, calls `signOut({ redirect: false })`.
- **Success:** `redirect("/login")`.
- **No-op:** if there is no active session, returns without redirecting.

---

## Route Handler: `GET /api/auth/[...nextauth]`, `POST /api/auth/[...nextauth]`

- **File:** `src/app/api/auth/[...nextauth]/route.ts`
- **Purpose:** required Auth.js v5 infrastructure endpoint (re-exports `handlers.GET`/`handlers.POST` from `src/lib/auth.ts`). Backs things like CSRF token issuance and would back an OAuth provider's callback if one is added (the UI already has a stubbed "Continue with Google" button with no provider wired up yet).
- **Current usage:** not directly called by any client code today — `signIn`/`signOut`/`auth` are invoked in-process from Server Actions and `proxy.ts` rather than via `fetch` to this route. It exists because Auth.js requires it to be present regardless.
- **Auth:** none required to reach the route itself; behavior is entirely provider/session-dependent internally.

---

## Authorization primitive (not a Server Action, used by the above internally)

```ts
// src/lib/dal.ts
function getCurrentUser(): Promise<{ id, name, email, image, emailVerified, createdAt } | null>
function requireUser(): Promise<User>  // redirects to /login if unauthenticated
```

Every action above that needs "who is calling this" goes through `getCurrentUser()`/`auth()` — never through a client-supplied user ID.
