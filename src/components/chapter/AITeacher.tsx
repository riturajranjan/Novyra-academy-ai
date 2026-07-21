"use client";

export default function AITeacher() {
  return (
    <div
      className="flex flex-col rounded-2xl glass-panel inner-glow border border-primary/20 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]"
      style={
        {
          "--mouse-x": "55px",
          "--mouse-y": "47px",
        } as React.CSSProperties
      }>
      <div className="bg-primary/5 p-4 flex items-center justify-between border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-full border border-primary/40 p-0.5 overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center rounded-full"
                data-alt="A portrait of a sophisticated AI female avatar named Dr. Nova. She has a professional, calm expression, short silver hair, and wears a futuristic minimal dark navy lab coat. The lighting is soft indigo and teal, giving her an enlightened intelligence aesthetic. Hyper-realistic, digital human quality."
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCUfNhUSHr3dzeXyd4RoGRhjjkLdg0uqn1ePjmXC4-5WXmyHKMNKgroQBYIiIhsLpslrM1vVOoj7hk_qG60rOPZsyOJuO-1a5gXePGSMxwgAB84io83SSxa9xftxTuOYDefowst9QI9mSkz9aksTGc26a3IWv2WNE5dpliVLdzB8ArKhOf-xGXBshLrsYYFn0sFhGh7Yrc329UG58wnRc5kKV6afX5Gx7Q5leMLsMGIjCFwqrRPpD8be8h8shp6_1VTrrA80cxzkPI')",
                }}></div>
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></div>
          </div>
          <div>
            <h4 className="font-label-md text-white">Dr. Nova</h4>
            <p className="text-[10px] text-primary uppercase font-bold tracking-widest">
              Physics Mentor
            </p>
          </div>
        </div>
        <button className="p-2 text-on-surface-variant hover:text-white transition">
          <span className="material-symbols-outlined" data-icon="more_vert">
            more_vert
          </span>
        </button>
      </div>
      <div className="p-6 space-y-6">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="flex-1 p-4 bg-surface-container-high rounded-2xl rounded-tl-none border border-white/5 text-on-surface-variant text-body-md leading-relaxed">
              &quot;Excellent focus! Now, let&apos;s look at{" "}
              <span className="text-white font-medium">Inertia</span>. Think of
              it as the &apos;laziness&apos; of an object. If something is
              resting, it wants to stay resting. If it&apos;s moving, it wants
              to keep moving at the same speed...&quot;
              <span className="inline-block w-1 h-4 bg-primary ml-1 ai-pulse"></span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 py-4">
            <div className="flex items-center justify-center gap-1.5 h-8">
              <div
                className="w-1.5 bg-primary/40 rounded-full waveform-bar"
                style={{ animationDelay: "0.1s" }}></div>
              <div
                className="w-1.5 bg-primary/60 rounded-full waveform-bar"
                style={{ animationDelay: "0.2s" }}></div>
              <div
                className="w-1.5 bg-primary rounded-full waveform-bar"
                style={{ animationDelay: "0.3s" }}></div>
              <div
                className="w-1.5 bg-tertiary rounded-full waveform-bar"
                style={{ animationDelay: "0.4s" }}></div>
              <div
                className="w-1.5 bg-primary rounded-full waveform-bar"
                style={{ animationDelay: "0.5s" }}></div>
              <div
                className="w-1.5 bg-primary/60 rounded-full waveform-bar"
                style={{ animationDelay: "0.6s" }}></div>
              <div
                className="w-1.5 bg-primary/40 rounded-full waveform-bar"
                style={{ animationDelay: "0.7s" }}></div>
            </div>
            <p className="text-mono-sm text-on-surface-variant">
              Dr. Nova is speaking...
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="flex-1 py-2 rounded-xl bg-surface-container-highest border border-white/5 text-on-surface font-label-md hover:bg-white/10 transition-all flex items-center justify-center gap-2">
            <span
              className="material-symbols-outlined text-sm"
              data-icon="psychology">
              psychology
            </span>
            Explain Simpler
          </button>
          <button className="flex-1 py-2 rounded-xl bg-surface-container-highest border border-white/5 text-on-surface font-label-md hover:bg-white/10 transition-all flex items-center justify-center gap-2">
            <span
              className="material-symbols-outlined text-sm"
              data-icon="quiz">
              quiz
            </span>
            Test Me
          </button>
        </div>
      </div>
      <div className="p-4 bg-surface-container-high border-t border-white/5">
        <div className="relative">
          <input
            className="w-full bg-background border border-white/10 rounded-xl py-3 pl-4 pr-12 text-on-surface-variant text-body-md focus:border-primary/50 focus:ring-0 transition-all placeholder:text-outline-variant"
            placeholder="Type a doubt or 'Show Example'..."
            type="text"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-primary text-on-primary rounded-lg flex items-center justify-center">
            <span
              className="material-symbols-outlined text-lg"
              data-icon="send">
              send
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
