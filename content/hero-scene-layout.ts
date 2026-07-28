/** Shared anchor points so the 5 product preview cards and their connection
 * lines to the browser line up. Positioned in left/right bands so nothing
 * collides with the centered headline copy above. Visibility tiers (sm/md/lg)
 * give a progressive reveal as viewport width grows. */
export const panelAnchors = {
  "hospital-erp": { style: { top: "6%", left: "2%" }, point: { x: 14, y: 18 } },
  analytics: { style: { top: "4%", right: "2%" }, point: { x: 86, y: 16 } },
  "ai-assistant": { style: { bottom: "28%", left: "-3%" }, point: { x: 6, y: 66 } },
  crm: { style: { bottom: "24%", right: "-3%" }, point: { x: 94, y: 70 } },
  "school-erp": { style: { bottom: "6%", left: "0%" }, point: { x: 10, y: 86 } },
} as const;

export const sceneCenter = { x: 50, y: 50 };
