"use client";

import { insightCards } from "@/constants/personalization";


const colors = [
  {
    value: "text-[#4CD7F6]",
    bg: "bg-[#4CD7F6]/10",
    border: "border-[#4CD7F6]/20",
  },
  {
    value: "text-[#C0C1FF]",
    bg: "bg-[#8083FF]/10",
    border: "border-[#8083FF]/20",
  },
  {
    value: "text-[#B8C4FF]",
    bg: "bg-[#334282]/20",
    border: "border-[#334282]/30",
  },
];

export default function InsightCards() {
  return (
    <section className="grid grid-cols-1 gap-4 grid-cols-2 sm:grid-cols-3">
      {insightCards.map((item, index) => (
        <div
          key={item.title}
          className={`
            rounded-3xl
            border
            p-4
            md:p-6
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-[0_20px_40px_rgba(0,0,0,.35)]
            ${colors[index].bg}
            ${colors[index].border}
          `}>
          <h3
            className={`
              text-[34px]
              font-bold
              ${colors[index].value}
            `}>
            {item.value}
          </h3>

          <p className="mt-2 text-sm leading-6 text-[#9CA3AF]">{item.title}</p>
        </div>
      ))}
    </section>
  );
}
