import Waveform from "./Waveform";

export default function AIMessage() {
  return (
    <div className="flex gap-4 transform transition-all duration-1000 delay-1000 opacity-100 translate-y-0">
      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 shadow-inner">
        <span className="material-symbols-outlined text-[#c0c1ff] text-[20px]">
          psychology
        </span>
      </div>

      <div className="bg-[#c0c1ff1a] p-6 rounded-3xl rounded-tl-none border border-[#c0c1ff4d] shadow-xl relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent pointer-events-none"></div>
        <p
          className="text-body-md text-on-surface leading-relaxed streaming-text"
          id="demo-text">
          Newton&apos;s 2nd Law simple hai! Force (F) mass aur acceleration (a)
          ka product hota hai. Yani F = m × a. Isko aise samjho: Jitna bhari
          (mass) object hoga, use move karne ke liye utni zyada Force lagani
          hogi...
        </p>

        <div className="mt-6 flex items-center gap-6">
          <div className="flex gap-1.5 items-end h-6">
            <div
              className="waveform-bar w-1.5 bg-primary rounded-full"
              style={{ animationDelay: "0.1s" }}></div>
            <div
              className="waveform-bar w-1.5 bg-primary rounded-full"
              style={{ animationDelay: "0.3s" }}></div>
            <div
              className="waveform-bar w-1.5 bg-primary rounded-full"
              style={{ animationDelay: "0.2s" }}></div>
            <div
              className="waveform-bar w-1.5 bg-primary rounded-full"
              style={{ animationDelay: "0.5s" }}></div>
            <div
              className="waveform-bar w-1.5 bg-primary rounded-full"
              style={{ animationDelay: "0.4s" }}></div>
            <div
              className="waveform-bar w-1.5 bg-primary rounded-full"
              style={{ animationDelay: "0.6s" }}></div>
          </div>

          <span className="text-xs uppercase tracking-[0.2em] text-cyan-300">
            Voice Active
          </span>
        </div>
      </div>
    </div>
  );
}
