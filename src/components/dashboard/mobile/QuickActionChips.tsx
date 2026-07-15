"use client";

const chips = [
  {
    icon: "psychology",
    title: "Explain Simpler",
    active: true,
  },
  {
    icon: "history",
    title: "Revision Mode",
  },
  {
    icon: "translate",
    title: "Hindi / English",
  },
];

export default function QuickActionChips() {
  return (
    <section className="-mx-margin-mobile px-margin-mobile overflow-x-auto hide-scrollbar flex gap-2 pt-2">
      {chips.map((chip) => (
        <button
          key={chip.title}
          className={`
            flex-shrink-0
            px-4
            py-2
            rounded-full

            bg-surface-container

            border

            border-white/10

            text-xs

            font-bold

            flex

            items-center

            gap-2

            ${chip.active ? "text-primary" : "text-on-surface-variant"}
          `}>
          <span className="material-symbols-outlined text-sm">{chip.icon}</span>

          {chip.title}
        </button>
      ))}
    </section>
  );
}
