/** Fixed orbital positions (percent of the canvas) matching the spec's
 * compact decision-map composition — keyed by need id so the arrangement
 * doesn't depend on content array order. Single source of truth, shared by
 * the HTML nodes and the SVG connector layer so they can never drift apart.
 * Chosen to keep at least ~56px of clearance between the hub (320–340px)
 * and every card at the canvas's reserved 1000px height / ~896px width. */
export const NODE_POSITIONS: Record<string, { top: number; left: number }> = {
  "business-website": { top: 14, left: 50 },
  "saas-product": { top: 22, left: 15 },
  ecommerce: { top: 22, left: 85 },
  crm: { top: 50, left: 11 },
  "hospital-software": { top: 50, left: 89 },
  branding: { top: 78, left: 15 },
  "school-erp": { top: 78, left: 85 },
  "digital-marketing": { top: 86, left: 50 },
};

export function getNeedPosition(needId: string): { top: number; left: number } {
  return NODE_POSITIONS[needId] ?? { top: 50, left: 50 };
}
