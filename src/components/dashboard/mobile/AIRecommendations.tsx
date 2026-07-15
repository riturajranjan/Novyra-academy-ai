"use client";

const recommendations = [
  {
    icon: "auto_awesome",
    title: "Quick Boost",
    description: "Review 5 weak Calculus topics",
    bg: "bg-primary/5",
    border: "border-primary/20",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    titleColor: "text-primary",
  },
  {
    icon: "lightbulb",
    title: "Deep Dive",
    description: "How Newton changed history",
    bg: "bg-tertiary/5",
    border: "border-tertiary/20",
    iconBg: "bg-tertiary/10",
    iconColor: "text-tertiary",
    titleColor: "text-tertiary",
  },
];

export default function AIRecommendations() {
  return (
    <section>
      {/* Heading */}

      <h3 className="text-on-surface-variant  text-xs uppercase tracking-[0.2em] mb-4">
        AI Recommendations
      </h3>

      {/* Horizontal Cards */}

      <div className="flex overflow-x-auto hide-scrollbar gap-3 -mx-margin-mobile px-margin-mobile pb-2">
        {recommendations.map((item) => (
          <div
            key={item.title}
            className={`
              flex-shrink-0
              w-64

              ${item.bg}

              border

              ${item.border}

              rounded-2xl

              p-4

              flex

              items-center

              gap-4
            `}>
            {/* Icon */}

            <div
              className={`
                w-12
                h-12

                rounded-xl

                flex

                items-center

                justify-center

                shrink-0

                ${item.iconBg}
              `}>
              <span
                className={`
                  material-symbols-outlined

                  ${item.iconColor}
                `}>
                {item.icon}
              </span>
            </div>

            {/* Content */}

            <div>
              <h5
                className={`
                  text-xs

                  font-bold

                  uppercase

                  ${item.titleColor}
                `}>
                {item.title}
              </h5>

              <p className="text-xs text-on-surface-variant mt-1 leading-5">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
