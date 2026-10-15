"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import About from "@/components/About";
import Services from "@/components/Services";
import BeyondCourts from "@/components/BeyondCourts";
import ProcessStepper from "@/components/ProcessStepper";
import WhyUs from "@/components/WhyUs";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import TurfEstimator from "@/components/TurfEstimator";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import SectionRevealObserver from "@/components/SectionRevealObserver";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "services",
        "infrastructure",
        "process",
        "why-us",
        "projects",
        "estimator",
        "faqs",
        "contact",
      ];
      const scrollPos = window.scrollY + window.innerHeight * 0.35;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="site-dark-theme relative min-h-screen selection:bg-emerald-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main>
        {/* Section 1: Hero Banner */}
        <Hero />

        {/* Section 2: Project metrics */}
        <StatsSection />

        {/* Section 3: About SPORTICON & Before/After Transformation Slider */}
        <About />

        {/* Section 3: Core Services 7 Sports */}
        <Services />

        {/* Section 4: Beyond Sports Courts - Extended Infrastructure */}
        <BeyondCourts />

        {/* Section 5: Project Process 8-Step Continuous Stepper */}
        <ProcessStepper />

        {/* Section 6: Why SPORTICON 6 Pillars & Comparison */}
        <WhyUs />

        {/* Section 7: Major Projects Animated Carousel */}
        <ProjectsCarousel />

        {/* Interactive Turf Sizing & Cost Estimator */}
        <TurfEstimator />

        {/* Section 8: Frequently Asked Questions */}
        <Faq />

        {/* Section 9: Contact Consultation & Quote Request */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Continuous Scroll Step Indicator Rail & Floating Widgets */}
      <ScrollProgress />
      <SectionRevealObserver />
    </div>
  );
}
