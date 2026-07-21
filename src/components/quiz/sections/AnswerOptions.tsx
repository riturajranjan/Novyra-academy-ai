"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

import OptionCard from "../components/OptionCard";
import { Question } from "@/types/quiz";

interface AnswerOptionsProps {
  question: Question;

  reviewMode?: boolean;

  onAnswerSelect?: (optionId: string) => void;

  className?: string;
}

export default function AnswerOptions({
  question,
  reviewMode = false,
  onAnswerSelect,
  className,
}: AnswerOptionsProps) {
  const [selected, setSelected] = useState(question.selectedAnswer ?? "");

  function handleSelect(optionId: string) {
    if (reviewMode) return;

    setSelected(optionId);

    onAnswerSelect?.(optionId);
  }

  return (
    <>
      {question.options.map((option) => {
        const isSelected = selected === option.id;

        const isCorrect = reviewMode && option.id === question.correctAnswer;

        const isIncorrect =
          reviewMode && isSelected && option.id !== question.correctAnswer;

        return (
          <OptionCard
            key={option.id}
            label={option.label}
            text={option.text}
            selected={!reviewMode && isSelected}
            correct={isCorrect}
            incorrect={isIncorrect}
            disabled={reviewMode}
            onClick={() => handleSelect(option.id)}
          />
        );
      })}
    </>
  );
}
