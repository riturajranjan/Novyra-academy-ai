"use client";

import { useState } from "react";

export default function useClass(initialClassId: number | null = null) {
  const [selectedClass, setSelectedClass] = useState<number | null>(initialClassId);

  return {
    selectedClass,
    setSelectedClass,
  };
}
