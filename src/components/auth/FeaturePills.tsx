import { BrainCircuit, Mic, BarChart3 } from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "AI Teacher",
    description: "24/7 Personal AI Mentor",
  },
  {
    icon: Mic,
    title: "Voice Learning",
    description: "Talk Naturally with AI",
  },
  {
    icon: BarChart3,
    title: "Progress Analytics",
    description: "Track Your Performance",
  },
];

export default function FeaturePills() {
  return (
    <div className="flex  gap-4">
      <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
        <span
          className="material-symbols-outlined text-tertiary"
          style={{ fontVariationSettings: '"FILL" 1' }}>
          check_circle
        </span>
        <span className="  text-on-surface">AI Teacher</span>
      </div>
      <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
        <span
          className="material-symbols-outlined text-tertiary"
          style={{ fontVariationSettings: '"FILL" 1' }}>
          check_circle
        </span>
        <span className="  text-on-surface">Voice Learning</span>
      </div>
      <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
        <span
          className="material-symbols-outlined text-tertiary"
          style={{ fontVariationSettings: '"FILL" 1' }}>
          check_circle
        </span>
        <span className="  text-on-surface">Progress Analytics</span>
      </div>
    </div>
  );
}
