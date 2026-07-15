"use client";

import { classes } from "@/constants/classes";
import ClassCard from "./ClassCard";
import ClassCardMobile from "./ClassCardMobile";

interface ClassGridProps {
  selectedClass: number;
  onSelect: (id: number) => void;
}

export default function ClassGrid({ selectedClass, onSelect }: ClassGridProps) {
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
