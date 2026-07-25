"use client";

import { useState } from "react";

export function useBoard(initialBoardId: string | null = null) {
  const [selectedBoard, setSelectedBoard] = useState<string | null>(initialBoardId);

  return {
    selectedBoard,
    setSelectedBoard,
  };
}
