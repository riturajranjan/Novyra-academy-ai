import CTA from "@/components/landing/CTA";
import Curriculum from "@/components/landing/Curriculum";
import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import LearningJourney from "@/components/landing/LearningJourney";
import LearningModes from "@/components/landing/LearningModes";
import Navbar from "@/components/landing/Navbar";
import ParentsTrust from "@/components/landing/ParentsTrust";
import Stats from "@/components/landing/Stats";
import WhyNovyra from "@/components/landing/WhyNovyra";




export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Stats />
        <WhyNovyra />
        <LearningJourney />
        <LearningModes />
        <ParentsTrust />
        <Curriculum />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
