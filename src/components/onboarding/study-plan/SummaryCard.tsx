"use client";

interface SummaryCardProps {
  studentName: string;
  boardTitle: string;
  classTitle: string;
  dailyGoalDuration: string;
  targetScore: string | null;
  subjectTitles: string[];
  examDate: Date | null;
}

function daysUntil(date: Date): number {
  const msPerDay = 24 * 60 * 60 * 1000;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const target = new Date(date);
  target.setHours(0, 0, 0, 0);
  return Math.round((target.getTime() - today.getTime()) / msPerDay);
}

export default function SummaryCard({
  studentName,
  boardTitle,
  classTitle,
  dailyGoalDuration,
  targetScore,
  subjectTitles,
  examDate,
}: SummaryCardProps) {
  const remaining = examDate ? daysUntil(examDate) : null;

  return (
    <>
      <div className=" glass-panel  rounded-xl  p-stack-md hidden  md:grid  grid-cols-2  lg:grid-cols-4  gap-gutter ">
        <div className="space-y-1">
          <span className=" text-mono-sm    uppercase  opacity-60  text-on-surface-variant ">
            Student
          </span>
          <p className="text-body-md font-bold">{studentName}</p>
        </div>
        <div className="space-y-1">
          <span className=" text-mono-sm  uppercase  opacity-60  text-on-surface-variant ">
            Board / Class
          </span>
          <p className="text-body-md font-bold">
            {boardTitle} • {classTitle}
          </p>
        </div>
        <div className="space-y-1">
          <span className=" text-mono-sm  uppercase  opacity-60  text-on-surface-variant ">
            Daily Goal
          </span>
          <p className="text-body-md font-bold">{dailyGoalDuration}</p>
        </div>
        <div className="space-y-1">
          <span className=" text-mono-sm  uppercase  opacity-60  text-on-surface-variant ">
            Target Score
          </span>
          <p className=" text-body-md  font-bold  text-tertiary ">
            {targetScore ?? "Not set"}
          </p>
        </div>
        <div className=" col-span-full  border-t  border-white/5  pt-4  flex  flex-wrap  gap-6 ">
          <div className=" flex  items-center  gap-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-book-open text-primary"
              aria-hidden="true">
              <path d="M12 7v14" />
              <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
            </svg>
            <span className="text-label-md text-on-surface-variant">
              {subjectTitles.join(", ")}
            </span>
          </div>
          {remaining !== null && (
            <div className=" flex  items-center  gap-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-calendar-days text-primary"
                aria-hidden="true">
                <path d="M8 2v4" />
                <path d="M16 2v4" />
                <rect width={18} height={18} x={3} y={4} rx={2} />
                <path d="M3 10h18" />
                <path d="M8 14h.01" />
                <path d="M12 14h.01" />
                <path d="M16 14h.01" />
                <path d="M8 18h.01" />
                <path d="M12 18h.01" />
                <path d="M16 18h.01" />
              </svg>
              <span className="text-label-md text-on-surface-variant">
                {remaining >= 0 ? `${remaining} Days to Exam` : "Exam date passed"}
              </span>
            </div>
          )}
        </div>
      </div>
      <section className="glass-card rounded-xl p-stack-md  md:hidden flex items-center gap-stack-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
        <div className="relative w-[70px] h-[70px] rounded-full border-2 border-primary overflow-hidden shrink-0">
          <img
            className="w-full h-full object-cover"
            alt="Dr. Nova"
            src="/drnovya.jpg"
          />
        </div>
        <div className="relative">
          <h2 className=" text-headline-md">Dr. Nova</h2>
          <p className=" text-body-md text-on-surface-variant">
            Your plan covers {subjectTitles.length} subject{subjectTitles.length === 1 ? "" : "s"} at {dailyGoalDuration}.
          </p>
          <div className="mt-stack-sm flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-tertiary" />
            <span className=" text-label-md text-tertiary uppercase tracking-widest">
              Active Analysis
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
