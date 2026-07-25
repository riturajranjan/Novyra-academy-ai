"use client";

import { useState } from "react";

export default function useSubjects(initialSelectedSubjectIds: number[] = []) {
  const [selectedSubjects, setSelectedSubjects] = useState<number[]>(initialSelectedSubjectIds);

  const toggleSubject = (id: number) => {
    setSelectedSubjects((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return {
    selectedSubjects,
    toggleSubject,
  };
}
