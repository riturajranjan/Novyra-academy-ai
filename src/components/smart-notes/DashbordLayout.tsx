import React from "react";
import NoteHero from "./NoteHero";
import AskAI from "./AskAI";
import SummaryCard from "./SummaryCard";
import InteractiveMind from "./InteractiveMind";
import RevisionPlus from "./RevisionPlus";
import FlashCard from "./FlashCard";
import AiStudyPlan from "./AiStudyPlan";

const DashbordLayout = () => {
  return (
    <main className="pt-14 pb-12 px-margin-desktop">
      <div className="grid grid-cols-12 gap-gutter">
        {/* Hero Section */}
        <section className="col-span-12 lg:col-span-8 flex flex-col gap-stack-lg">
          <NoteHero />
          {/* Smart Search Bar */}
          <AskAI />
          {/* AI Notes Bento Grid */}
          <SummaryCard />
          {/* Interactive Mind Map */}
          <InteractiveMind />
        </section>
        {/* Right Sidebar: Flashcards & Revision */}
        <aside className="col-span-12 lg:col-span-4 flex flex-col gap-stack-lg">
          {/* Revision Dashboard */}
          <RevisionPlus />
          {/* Flashcards Panel */}
          <FlashCard />
          {/* Quick Actions / AI Suggestions */}
          <AiStudyPlan />
        </aside>
      </div>
    </main>
  );
};

export default DashbordLayout;
