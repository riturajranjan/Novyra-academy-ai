"use client";

import Image from "next/image";
import { Search, Pencil, RotateCcw, Play, RotateCw } from "lucide-react";

export default function LearningCanvas() {
  return (
    <div
      className="relative rounded-2xl overflow-hidden glass-panel border border-white/5 aspect-video group"
      style={
        {
          "--mouse-x": "18px",
          "--mouse-y": "223.5px",
        } as React.CSSProperties
      }>
      <div className="absolute top-6 left-6 z-10 flex items-center gap-4">
        <h3 className="font-headline-md text-white">
          Dynamic Interactive Canvas
        </h3>
        <span className="px-2 py-0.5 bg-green-500/10 text-green-400 text-[10px] rounded border border-green-500/20 uppercase font-bold tracking-widest">
          Live Simulation
        </span>
      </div>
      <div className="absolute top-6 right-6 z-10 flex gap-2">
        <button className="p-2 bg-surface/50 backdrop-blur rounded-lg border border-white/10 text-on-surface hover:bg-white/10 transition">
          <span className="material-symbols-outlined" data-icon="zoom_in">
            zoom_in
          </span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-surface/50 backdrop-blur rounded-lg border border-white/10 text-on-surface hover:bg-white/10 transition">
          <span className="material-symbols-outlined" data-icon="draw">
            draw
          </span>
          <span className="font-label-md">Draw Mode</span>
        </button>
      </div>

      <div className="w-full h-full flex items-center justify-center bg-[#0d152a] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}></div>

        <div className="relative w-full h-full">
          <img
            className="w-full h-full object-contain"
            alt="A premium 3D schematic illustration of a physics experiment involving a block on a frictionless slope connected by a pulley to a hanging weight. The style is scientific yet aesthetic with glowing cyan force vectors, labeled mass nodes, and subtle obsidian textures on the mechanical parts. Lighting is cinematic dark-mode with soft indigo rim lighting on the objects."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrow4qAwvJmXogxcYd_BMzNWaBEmiELjTO66AHsAeNujsbzJm4Loor8xaoQF6f4LOa6tqa-sf0SUrccFajVmxAfFEtsNyJrAB-7T6ENLMBfOalDJqrNQEOrSjJkAie7PrAI5wGIW1TdXnxutDulVmJcOmDTH6OyhmXYRmCDmmcNMPsbP1ioKG5fAFt2X5du4bcxrNkyOn-Qo2wDbMTEAQKJJW3-r2R6OsRBIX6t6fSuSyrpW8k-hutYgUtMLpjjzc2OJbv-SL0qNQ"
          />

          <div className="absolute top-[40%] left-[35%] group/pin cursor-pointer">
            <div className="w-4 h-4 bg-tertiary rounded-full ai-pulse border-4 border-tertiary/30"></div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-surface-container-high border border-white/10 p-2 rounded-lg text-mono-sm whitespace-nowrap opacity-0 group-hover/pin:opacity-100 transition shadow-xl">
              Applied Force (F)
            </div>
          </div>
          <div className="absolute bottom-[30%] right-[42%] group/pin cursor-pointer">
            <div className="w-4 h-4 bg-primary rounded-full ai-pulse border-4 border-primary/30"></div>
            <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-surface-container-high border border-white/10 p-2 rounded-lg text-mono-sm whitespace-nowrap opacity-0 group-hover/pin:opacity-100 transition shadow-xl">
              Friction (f)
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-surface/50 backdrop-blur px-6 py-3 rounded-full border border-white/10">
        <button className="text-on-surface-variant hover:text-white transition">
          <span className="material-symbols-outlined" data-icon="replay_10">
            replay_10
          </span>
        </button>
        <button className="w-10 h-10 flex items-center justify-center bg-primary text-on-primary rounded-full hover:scale-105 transition active:scale-95">
          <span
            className="material-symbols-outlined"
            data-icon="play_arrow"
            style={{ fontVariationSettings: "'FILL' 1" }}>
            play_arrow
          </span>
        </button>
        <button className="text-on-surface-variant hover:text-white transition">
          <span className="material-symbols-outlined" data-icon="forward_10">
            forward_10
          </span>
        </button>
        <div className="w-px h-6 bg-white/10 mx-2"></div>
        <span className="text-mono-sm text-on-surface">01:42 / 04:30</span>
      </div>
    </div>
  );
}
