import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import About from "@/components/About";
import Services from "@/components/Services";
import BeyondCourts from "@/components/BeyondCourts";
import ProcessStepper from "@/components/ProcessStepper";
import WhyUs from "@/components/WhyUs";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import ScrollProgress from "@/components/ScrollProgress";
import SectionRevealObserver from "@/components/SectionRevealObserver";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <StatsSection />
        <About />
        <Services />
        <BeyondCourts />
        <ProcessStepper />
        <WhyUs />
        <ProjectsCarousel />
        <Faq />
        <Contact />
      </main>
      <ScrollProgress />
      <SectionRevealObserver />
    </>
  );
}
