import Comparison from "@/components/landing/Comparison";
import Hero from "../components/landing/Hero";
import Navbar from "../components/landing/Navbar";
import Stats from "../components/landing/Stats";
import Journey from "@/components/landing/Journey";
import LearningJourney from "@/components/landing/LearningJourney";
import ParentsTrust from "@/components/landing/ParentsTrust";
import Curriculum from "@/components/landing/Curriculum";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Comparison />
      <Journey />
      <LearningJourney />
      <ParentsTrust />
      <Curriculum />
      <CTA />
      <Footer />
    </>
  );
}
