import HeroBadge from "./HeroBadge";
import HeroHeading from "./HeroHeading";
import HeroButtons from "./HeroButtons";
import HeroUsers from "./HeroUsers";
import AIChatCard from "../AIChat/AIChatCard";

export default function Hero() {
  return (
    <section className="relative pt-40 pb-20 px-margin-mobile md:px-[48px] max-w-[1280px] mx-auto min-h-screen flex items-center transition-all duration-1000 ease-out opacity-100 translate-y-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left */}

        <div className="space-y-10">
          <HeroBadge />

          <HeroHeading />

          <HeroButtons />

          <HeroUsers />
        </div>

        {/* Right */}

        <div className="hidden lg:block relative perspective-1000">
          <AIChatCard />
          <div className="absolute -z-10 -bottom-20 -right-20 w-[140%] h-[140%] bg-[#c0c1ff1a] blur-[120px] rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
