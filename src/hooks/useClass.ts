"use client";

import { useState } from "react";

export default function useClass() {
  const [selectedClass, setSelectedClass] = useState<number>(10);

  return {
    selectedClass,
    setSelectedClass,
  };
}
