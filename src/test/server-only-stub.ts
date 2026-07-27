// Test-only stub for the "server-only" package. The real package throws when
// imported outside an actual Next.js server request, which breaks unit tests
// that import a Server-Component-only module (e.g. contentDal.ts) directly
// rather than mocking it wholesale. Aliased in vitest.config.ts, test-only.
export {};
