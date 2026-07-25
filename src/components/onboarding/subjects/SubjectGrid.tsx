"use client";

import type { Subject } from "@prisma/client";
import SubjectCard from "./SubjectCard";

interface SubjectGridProps {
  subjects: Subject[];
  selectedSubjects: number[];
  toggleSubject: (id: number) => void;
}

export default function SubjectGrid({
  subjects,
  selectedSubjects,
  toggleSubject,
}: SubjectGridProps) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md mb-stack-lg">
        {subjects.map((subject) => (
          <SubjectCard
            key={subject.id}
            title={subject.title}
            description={subject.description}
            chapters={subject.chapterCount}
            level={subject.level}
            badge={subject.badge ?? undefined}
            icon={subject.icon}
            selected={selectedSubjects.includes(subject.id)}
            onClick={() => toggleSubject(subject.id)}
          />
        ))}
      </div>
    </>
  );
}
