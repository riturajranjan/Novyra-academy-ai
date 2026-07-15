"use client";

import { useState } from "react";

export function useLearningStyle() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return {
    selected,
    toggle,
  };
}
