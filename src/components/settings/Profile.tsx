import React from "react";

const Profile = () => {
  return (
    <>
      {" "}
      <section className="md:hidden flex flex-col items-center py-stack-lg mb-stack-lg animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-tertiary rounded-full blur opacity-25 group-hover:opacity-40 transition-opacity" />
          <img
            className="relative w-28 h-28 rounded-full border-2 border-white/10 p-1 bg-surface-container-low object-cover"
            alt="A centered, circular profile avatar showing a close-up of a student. The image captures a sense of intellectual focus and modern elegance, styled with deep navy and cyan light leaks that match the premium AI learning theme. High-end photography style with sharp focus and professional bokeh."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOEsYV40BBmX68Yq_mLbQAd2je8WmmH4ESXwOLYwaeHaWnK_pFzmzJU1IFzODQoby3X9Z8EhmMQ1jJzBJT2R9g09NRYrVIUrwAO4YFLZASttQcCZut6m7g_5pz7kSUji3kqDV0x0VQna2WFniooMO64tyAKEL0V7BQeTvocqmn7QATCVsIf5XS0s2ZXBMKgEBPsspZm3zjw9kVV6Y8jJHQRiEEeGPXxe29PJGHP2wXWnxd6eiXUXAumKSJJzMzwhD31bLutkuTieY"
          />
          <button className="absolute bottom-0 right-0 bg-primary text-on-primary w-8 h-8 rounded-full flex items-center justify-center border-2 border-background active:scale-90 transition-transform">
            <span className="material-symbols-outlined text-[18px]">edit</span>
          </button>
        </div>
        <h2 className="mt-stack-md font-headline-md text-headline-md text-white">
          Alexander Thorne
        </h2>
        <p className="font-label-md text-label-md text-on-surface-variant mb-stack-md">
          Cambridge Board • Class of 2025
        </p>
        {/* Quick Stats Bento Row */}
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="glass-card rounded-2xl p-4 flex flex-col items-center justify-center text-center">
            <span className="material-symbols-outlined text-primary mb-1 fill-icon">
              bolt
            </span>
            <span className="font-headline-md text-headline-md text-primary">
              12,450
            </span>
            <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider text-[10px]">
              Total XP
            </span>
          </div>
          <div className="glass-card rounded-2xl p-4 flex flex-col items-center justify-center text-center">
            <span className="material-symbols-outlined text-tertiary mb-1 fill-icon">
              local_fire_department
            </span>
            <span className="font-headline-md text-headline-md text-tertiary">
              42 Days
            </span>
            <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider text-[10px]">
              Active Streak
            </span>
          </div>
        </div>
      </section>
      <section className="relative hidden md:block">
        {/* Background Glow Decoration */}
        <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/10 blur-[100px] -z-10" />
        <div className="glass-card rounded-2xl p-8 flex flex-col md:flex-row items-center md:items-end gap-8">
          <div className="relative group">
            <div className="w-32 h-32 rounded-full border-4 border-primary/30 p-1">
              <img
                className="w-full h-full object-cover rounded-full"
                data-alt="A high-resolution, professional portrait of Arjun Singh, an Indian male student in his late teens, looking confident and focused. He has short black hair and a slight smile. The background is a sophisticated dark obsidian with a subtle glowing light-leak gradient. The visual style is minimal and premium, suitable for an elite AI academy."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0uCbgdJItwDn74bB7cq_FEWNLJ-vA5V6xTI7JHylJ7WI9owc2IITq2qawKbWx11qZd7DGElTZKCbGw4NzqgoMt9GPxQP0psoddpXmki2Z3P0a60mxrt-__FnRldg4anOHoUR-4BWqeHqz1TRioQkRSM3uiCVmbADUFrWU1BdL6bITB1HoHiMsnCBpCCb0y-CMHc6Yi7-RBJyXpIYgEQX87MER3QBnYq0jOZ679iiKy_DIf2rq46RhEUk9FI9Sn5Xl60DPicqi7OI"
              />
            </div>
            <button className="absolute bottom-0 right-0 bg-primary text-on-primary p-2 rounded-full shadow-lg hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-[20px]">
                edit
              </span>
            </button>
          </div>
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
              <h3 className="font-headline-lg text-headline-lg text-on-surface">
                Arjun Singh
              </h3>
              <span className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full font-mono-sm text-mono-sm inline-flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[14px]">
                  stars
                </span>
                Gold Tier Student
              </span>
            </div>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-on-surface-variant font-body-md text-body-md">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px]">
                  school
                </span>{" "}
                CBSE • Class 10
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px] text-tertiary">
                  bolt
                </span>{" "}
                1,240 XP
              </span>
              <span className="flex items-center gap-1.5 font-bold text-primary">
                <span
                  className="material-symbols-outlined text-[18px]"
                  style={{ fontVariationSettings: '"FILL" 1' }}>
                  local_fire_department
                </span>{" "}
                12-day streak
              </span>
            </div>
          </div>
          <button className="px-6 py-2.5 bg-surface-container-high text-on-surface rounded-xl border border-white/10 hover:bg-white/10 transition-all font-label-md">
            Edit Profile
          </button>
        </div>
      </section>
    </>
  );
};

export default Profile;
