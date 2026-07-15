"use client";

import { useState } from "react";

export function useAIPersonalization() {
  const [progress, setProgress] = useState(87);

  return {
    progress,
    setProgress,
  };
}
