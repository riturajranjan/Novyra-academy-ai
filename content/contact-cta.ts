import type { LucideIcon } from "lucide-react";
import { Calendar, Clock, Compass, Handshake, Layers, Mail, MapPin, MessageCircle, Phone, Users } from "lucide-react";
import type { AccentColor } from "@/content/hero-screens";

/** All text for the hero glass card (title/description) lives in
 * messages/{locale}/contact.json under `heroCard` — there's no per-locale
 * structural data to keep here, so this content module intentionally has
 * no export for it. */

export interface QuickContactCard {
  id: string;
  icon: LucideIcon;
  accent: AccentColor;
  href: string;
}

/** Real contact channels, not placeholder copy — matching the business
 * contact details Novyra actually publishes. Structural data only —
 * title/detail/note text lives in messages/{locale}/contact.json under
 * `quickContactCards.<id>`. */
export const quickContactCards: QuickContactCard[] = [
  { id: "schedule-call", icon: Calendar, accent: "blue", href: "/contact" },
  { id: "email", icon: Mail, accent: "purple", href: "mailto:hello@novyratech.in" },
  { id: "call", icon: Phone, accent: "cyan", href: "tel:+917903724407" },
  { id: "whatsapp", icon: MessageCircle, accent: "emerald", href: "https://wa.me/917903724407" },
];

export interface ContactValueCard {
  id: string;
  icon: LucideIcon;
  accent: AccentColor;
}

/** Structural data only — title/description text lives in
 * messages/{locale}/contact.json under `contactValueCards.<id>`. */
export const contactValueCards: ContactValueCard[] = [
  { id: "free-discovery-session", icon: Compass, accent: "blue" },
  { id: "expert-consultation", icon: Users, accent: "purple" },
  { id: "transparent-planning", icon: Layers, accent: "cyan" },
  { id: "long-term-partnership", icon: Handshake, accent: "amber" },
];

export interface TrustMetric {
  id: string;
}

/** Only verifiable, forward-looking facts — a real technology count and
 * real operating commitments (100% custom development, 24h response, full
 * code ownership) — plus a deliberately non-numeric "Growing Portfolio" for
 * project count, since Novyra doesn't have a project history to cite as a
 * number yet. Structural data only — label/value text lives in
 * messages/{locale}/contact.json under `trustMetrics.<id>`. */
export const trustMetrics: TrustMetric[] = [
  { id: "projects-planned" },
  { id: "modern-technologies" },
  { id: "custom-development" },
  { id: "average-response-time" },
  { id: "source-code-ownership" },
];

export interface ContactDetail {
  id: string;
  icon: LucideIcon;
}

/** Structural data only — label/value text lives in
 * messages/{locale}/contact.json under `contactDetails.<id>`. */
export const contactDetails: ContactDetail[] = [
  { id: "business-email", icon: Mail },
  { id: "phone", icon: Phone },
  { id: "location", icon: MapPin },
  { id: "working-hours", icon: Clock },
];
