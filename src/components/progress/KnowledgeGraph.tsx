import React from "react";

const KnowledgeGraph = () => {
  return (
    <div className="glass-card rounded-xl p-stack-lg relative min-h-[300px]">
      <h3 className="font-headline-md text-headline-md mb-8">
        Knowledge Graph
      </h3>
      <div className="relative h-48 flex items-center justify-around">
        <div className="flex flex-col items-center gap-2 z-10">
          <div className="w-20 h-20 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center text-center p-2 text-[10px] font-bold">
            NEWTON&apos;S LAWS
          </div>
        </div>
        <div className="h-0.5 w-12 node-line" />
        <div className="flex flex-col items-center gap-2 z-10">
          <div className="w-16 h-16 rounded-full bg-surface-container border-2 border-white/10 flex items-center justify-center text-center p-2 text-[10px] font-bold">
            FORCE
          </div>
        </div>
        <div className="h-0.5 w-12 node-line" />
        <div className="flex flex-col items-center gap-2 z-10">
          <div className="w-16 h-16 rounded-full bg-surface-container border-2 border-white/10 flex items-center justify-center text-center p-2 text-[10px] font-bold">
            MOTION
          </div>
        </div>
        <div className="h-0.5 w-12 node-line opacity-30" />
        <div className="flex flex-col items-center gap-2 z-10 opacity-50">
          <div className="w-16 h-16 rounded-full bg-surface-container border-2 border-white/10 flex items-center justify-center text-center p-2 text-[10px] font-bold">
            ENERGY
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 right-4">
        <button className="material-symbols-outlined p-2 rounded-full bg-surface-variant hover:text-primary transition-colors">
          zoom_in
        </button>
      </div>
      <p className="text-xs text-on-surface-variant font-mono-sm absolute top-4 right-4 uppercase">
        Unit: Mechanics
      </p>
    </div>
  );
};

export default KnowledgeGraph;
