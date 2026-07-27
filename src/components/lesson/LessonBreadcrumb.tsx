"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

import type { LessonDetail } from "@/lib/dal";

interface LessonBreadcrumbProps {
  lesson: LessonDetail;
}

export default function LessonBreadcrumb({ lesson }: LessonBreadcrumbProps) {
  const subjectId = lesson.chapter.subject.id;

  return (
    <nav className="flex items-center gap-2 text-sm text-on-surface-variant flex-wrap">
      <Link href={`/subject/${subjectId}`} className="hover:text-primary transition-colors">
        {lesson.chapter.subject.title}
      </Link>
      <ChevronRight size={14} />
      <Link href={`/subject/${subjectId}/chapter/${lesson.chapter.id}`} className="hover:text-primary transition-colors">
        {lesson.chapter.title}
      </Link>
      <ChevronRight size={14} />
      <span className="text-on-surface font-medium">{lesson.title}</span>
    </nav>
  );
}
