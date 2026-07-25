"use client";

import type { SchoolClass } from "@prisma/client";
import ClassCard from "./ClassCard";
import ClassCardMobile from "./ClassCardMobile";

interface ClassGridProps {
  classes: SchoolClass[];
  selectedClass: number | null;
  onSelect: (id: number) => void;
}

export default function ClassGrid({ classes, selectedClass, onSelect }: ClassGridProps) {
  return (
    <>
      <div className="md:grid hidden grid-cols-2 sm:grid-cols-4 gap-stack-md">
        {classes.map((item) => (
          <ClassCard
            key={item.id}
            item={item}
            selected={selectedClass === item.id}
            onClick={() => onSelect(item.id)}
          />
        ))}
      </div>
      <div className="space-y-stack-md md:hidden" id="class-container">
        {/* Classes 5 to 12 Loop */}
        {classes.map((item) => (
          <ClassCardMobile
            key={item.id}
            item={item}
            selected={selectedClass === item.id}
            onClick={() => onSelect(item.id)}
          />
        ))}
      </div>
    </>
  );
}
