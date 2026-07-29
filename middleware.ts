import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";

/** Resolves the locale for every request (URL prefix > NEXT_LOCALE cookie
 * > Accept-Language header, in that order), redirects bare paths to the
 * right `/en` or `/hi` prefix, and — critically for "persist after
 * refresh / while navigating" — writes the resolved locale back to the
 * `NEXT_LOCALE` cookie so the next request already knows the preference
 * without needing the URL to carry it across a fresh tab or a typed-in
 * URL. */
export default createMiddleware(routing);

export const config = {
  // Run on every path except static assets, image optimization, favicon,
  // and API routes — none of the latter exist yet, but excluding /api is
  // the standard next-intl matcher so future routes there aren't
  // accidentally locale-prefixed.
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
