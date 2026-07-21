import React from "react";
import ProgressHero from "./ProgressHero";
import Achivement from "./Achivement";
import ExamReadiness from "./ExamReadiness";
import StudyConsistancy from "./StudyConsistancy";
import KnowledgeGraph from "./KnowledgeGraph";
import SubjectMistry from "./SubjectMistry";
import ProgressCard from "./ProgressCard";

const Progress = () => {
  return (
    <main className="px-margin-desktop pb-20 mesh-bg min-h-screen">
      <div className="max-w-container-max mx-auto space-y-stack-lg">
        <ProgressHero />
        <ProgressCard />
        <section className="grid grid-cols-1 xl:grid-cols-3 gap-gutter">
          <ExamReadiness />
          <Achivement />
        </section>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
          <StudyConsistancy />
          <KnowledgeGraph />
        </section>
        <SubjectMistry />
      </div>
    </main>
  );
};

export default Progress;
