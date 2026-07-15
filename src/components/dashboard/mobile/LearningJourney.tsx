"use client";

const journey = [
  {
    icon: "menu_book",
    title: "Study",
    subtitle: "Organic Chem Prep",
    progress: "33%",
    border: "border-l-tertiary",
    iconBg: "bg-tertiary/10",
    iconColor: "text-tertiary",
    progressColor: "bg-tertiary",
    width: "33%",
  },
  {
    icon: "fitness_center",
    title: "Practice",
    subtitle: "Physics Simulations",
    progress: "50%",
    border: "border-l-primary",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    progressColor: "bg-primary",
    width: "50%",
  },
  {
    icon: "history",
    title: "Revision",
    subtitle: "Quiz: Algebra II",
    progress: "80%",
    border: "border-l-secondary",
    iconBg: "bg-secondary/10",
    iconColor: "text-secondary",
    progressColor: "bg-secondary",
    width: "80%",
  },
];

export default function LearningJourney() {
  return (
    <section>
      {/* Header */}

      <div className="flex items-center justify-between mb-4">
        <h3 className="text-on-surface-variant  text-xs uppercase tracking-[0.2em]">
          Learning Journey
        </h3>
      </div>

      {/* Cards */}

      <div className="flex overflow-x-auto hide-scrollbar gap-4 -mx-margin-mobile px-margin-mobile pb-2">
        {journey.map((item) => (
          <div
            key={item.title}
            className={`
              flex-shrink-0
              w-44

              glass-card

              rounded-2xl

              p-4

              border-l-4

              ${item.border}
            `}>
            {/* Icon */}

            <div
              className={`
                w-10
                h-10

                rounded-lg

                flex

                items-center

                justify-center

                mb-3

                ${item.iconBg}
              `}>
              <span className={`material-symbols-outlined ${item.iconColor}`}>
                {item.icon}
              </span>
            </div>

            {/* Title */}

            <h4 className="font-bold text-sm mb-1">{item.title}</h4>

            <p className="text-[11px] text-on-surface-variant mb-3">
              {item.subtitle}
            </p>

            {/* Progress */}

            <div className="h-1 bg-white/5 rounded-full overflow-hidden">
              <div
                className={`h-full ${item.progressColor}`}
                style={{
                  width: item.width,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
