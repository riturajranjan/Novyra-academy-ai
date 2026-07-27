"use client";

import SubjectCard from "@/components/subjects/SubjectCard";
import type { SubjectSummary } from "@/lib/contentDal";

const ACCENTS: Array<"tertiary" | "primary" | "secondary" | "orange"> = ["tertiary", "primary", "secondary", "orange"];

interface LearningJourneyProps {
  subjects: SubjectSummary[];
}

export default function LearningJourney({ subjects }: LearningJourneyProps) {
  return (
    <section>
      {/* Header */}

      <div className="flex items-center justify-between mb-4">
        <h3 className="text-on-surface-variant  text-xs uppercase tracking-[0.2em]">
          Learning Journey
        </h3>
      </div>

      {subjects.length === 0 ? (
        <p className="text-on-surface-variant text-sm">No subjects selected yet.</p>
      ) : (
        <div className="flex overflow-x-auto hide-scrollbar gap-4 -mx-margin-mobile px-margin-mobile pb-2">
          {subjects.map((subject, index) => (
            <SubjectCard
              key={subject.id}
              id={subject.id}
              name={subject.title}
              icon={subject.icon}
              chapterCount={subject.chapterCount}
              lessonCount={subject.lessonCount}
              completedLessonCount={subject.completedLessonCount}
              progressPercent={subject.progressPercent}
              href={subject.href}
              accent={ACCENTS[index % ACCENTS.length]}
            />
          ))}
        </div>
      )}
    </section>
  );
}
