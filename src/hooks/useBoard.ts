"use client";

import { useState } from "react";

export function useBoard() {
  const [selectedBoard, setSelectedBoard] = useState("cbse");

  return {
    selectedBoard,
    setSelectedBoard,
  };
}
