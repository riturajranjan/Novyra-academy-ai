"use client";

import Image from "next/image";

interface AIClassInfoProps {
  className: string;
  board: string;
  chapters: number;
  subjects: string[];
}

export default function AIClassInfo({
  className,
  board,
  chapters,
  subjects,
}: AIClassInfoProps) {
  return (
    <div className="mt-stack-md p-stack-md bg-primary-container/10 border border-primary/20 rounded-xl flex gap-stack-md items-start">
      <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border border-primary/30">
        <Image
          className="w-full h-full object-cover"
          alt="A close-up portrait avatar of Dr. Nova AI, featuring glowing blue eyes and a serene expression. The lighting is soft and high-key with subtle indigo glow effects. The background is a clean, dark slate grey with digital circuit patterns."
          src="/drnovya.jpg"
          height={100}
          width={100}
        />
      </div>
      <div className="flex-grow space-y-2">
        <p className="text-body-md font-medium text-primary">
          &quot;Great choice! I&apos;ll prepare your complete Class 10 learning
          journey.&quot;
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-label-md  text-on-surface-variant">
          <div className="flex items-center gap-2">
            <span
              className="material-symbols-outlined text-sm"
              data-icon="school">
              school
            </span>
            Board: {board}
          </div>
          <div className="flex items-center gap-2">
            <span
              className="material-symbols-outlined text-sm"
              data-icon="auto_stories">
              auto_stories
            </span>
            {chapters} Chapters
          </div>
          <div className="flex items-center gap-2">
            <span
              className="material-symbols-outlined text-sm"
              data-icon="schedule">
              schedule
            </span>
            120 Hours
          </div>
        </div>
        <div className="flex flex-wrap gap-1 mt-1">
          {subjects.map((subject) => (
            <span
              key={subject}
              className="px-2 py-0.5 bg-surface-container-high border border-outline-variant rounded-md text-[11px]">
              {subject}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
