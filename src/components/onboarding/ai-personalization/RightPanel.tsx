"use client";

import BuildStatus from "./BuildStatus";
import DashboardPreview from "./DashboardPreview";
import DrNovaCard from "./DrNovaCard";
import InsightCards from "./InsightCards";
import PersonalizationEngine from "./PersonalizationEngine";
import Footer from "./Footer";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function RightPanel() {
  const route = useRouter();
  return (
    <section className="flex flex-1 items-center justify-center bg-[#0B1326] p-4 lg:p-10">
      <div
        className="
          w-full
          max-w-[980px]
          rounded-[32px]
          border
          border-white/10
          bg-[#11192D]
          p-6
          md:p-8
          shadow-[0_30px_80px_rgba(0,0,0,.45)]
        ">
        {/* Header */}

        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-[22px] md:text-[35px] font-semibold leading-tight text-white">
              Creating Your Personalized
              <br />
              Learning OS
            </h2>

            <div className="mt-3 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#8083FF] animate-pulse" />

              <p className="text-[15px] text-[#9CA3AF]">
                Active Sync: Analyzing 2.4M Neural Weights
              </p>
            </div>
          </div>

          {/* Student */}

          <div
            className="
              flex
              items-center
              gap-4
              rounded-2xl
              border
              border-white/10
              bg-[#1B2440]
              p-3
            ">
            <Image
              src="/boy.png"
              alt="Student"
              className="h-14 w-14 rounded-full border-1 border-[#8083FF] object-cover"
              height={100}
              width={100}
            />

            <div>
              <h3 className="font-semibold text-white">Arjun Singh</h3>

              <p className="text-sm text-[#9CA3AF]">CBSE • Class 10</p>
            </div>
          </div>
        </div>

        {/* Main Grid */}

        <div className="grid gap-6 lg:grid-cols-12">
          {/* Left */}

          <div className="space-y-6 lg:col-span-5">
            <BuildStatus progress={87} />

            <DashboardPreview />
          </div>

          {/* Right */}

          <div className="space-y-6 lg:col-span-7">
            <DrNovaCard />

            <InsightCards />

            <PersonalizationEngine />
          </div>
        </div>

        <Footer
          onBack={() => route.push("/goal-selection")}
          onContinue={() => route.push("/study-plan")}
        />
      </div>
    </section>
  );
}
