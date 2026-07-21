"use client";

import {
  Sigma,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
  PlayCircle,
} from "lucide-react";

const lessons = [
  {
    icon: Sigma,
    title: "The Second Law",
    description:
      "Newton's second law states that the acceleration of an object is directly proportional to the net force acting on it.",
    progress: "Completed",
    color: "primary",
  },
  {
    icon: Lightbulb,
    title: "Real-World Case",
    description:
      "Why do we lunge forward when a bus stops suddenly? This demonstrates the law of inertia in action.",
    progress: "Current",
    color: "tertiary",
  },
];

export default function LessonCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div
        className="p-6 rounded-2xl glass-panel inner-glow border border-white/5 space-y-4 hover:border-primary/30 transition-all cursor-pointer group"
        style={
          {
            "--mouse-x": "44px",
            "--mouse-y": "362.75px",
          } as React.CSSProperties
        }>
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10 text-primary">
            <span className="material-symbols-outlined" data-icon="functions">
              functions
            </span>
          </div>
          <h4 className="font-headline-md text-white text-lg">
            The Second Law
          </h4>
        </div>
        <p className="text-on-surface-variant font-body-md leading-relaxed">
          Newton&apos;s second law states that the acceleration of an object is
          directly proportional to the net force acting on it.
        </p>
        <div className="p-4 bg-surface-container-highest rounded-xl text-center">
          <span className="font-mono-sm text-tertiary text-2xl font-bold tracking-widest">
            F = ma
          </span>
        </div>
      </div>
      <div
        className="p-6 rounded-2xl glass-panel inner-glow border border-white/5 space-y-4 hover:border-tertiary/30 transition-all cursor-pointer"
        style={
          {
            "--mouse-x": "51px",
            "--mouse-y": "140.75px",
          } as React.CSSProperties
        }>
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-tertiary/10 text-tertiary">
            <span className="material-symbols-outlined" data-icon="lightbulb">
              lightbulb
            </span>
          </div>
          <h4 className="font-headline-md text-white text-lg">
            Real-World Case
          </h4>
        </div>
        <p className="text-on-surface-variant font-body-md leading-relaxed">
          Why do we lunge forward when a bus stops suddenly? This is the{" "}
          <span className="text-primary italic">Law of Inertia</span> in action.
        </p>
        <div className="aspect-video rounded-xl overflow-hidden mt-2 relative">
          <div
            className="w-full h-full bg-cover bg-center transition-transform hover:scale-105 duration-500"
            data-alt="A high-quality cinematic photograph of a futuristic high-speed train interior with passengers. One passenger is slightly leaning forward as the train decelerates, illustrating physics principles. The lighting is cold blue and sterile, consistent with high-tech minimalist design. Sharp focus, professional composition."
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBKREJ9-2oZrKfDGbk2YdYLk8QxqPaPZQqvCZLx-KeBU9iQKj5nAyu-t6ZB0AlxvmFc8YwwuQOUBBqPERDGikYCuaaW28B1InIXcaSHtEvK5iurvPXaKqZLpt8k5RwNHoJkxGZwWAtMdLGtJfn7Dvhje1DR2m2SEh5rH67anw3q_WyonCqvBGttmfu0lOHef7G1YQT0hX0PPlRX6NEXqGwDzLGFC4QN-EWQmpy6qcuTjPq4OBkTOAP_VuIj8AL49Y5dxTFH_TVD8Mk')",
            }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-3 left-4 flex items-center gap-2">
            <span
              className="material-symbols-outlined text-white text-sm"
              data-icon="video_library">
              video_library
            </span>
            <span className="text-white text-[10px] font-bold uppercase tracking-widest">
              Watch Example
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
