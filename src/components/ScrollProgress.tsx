"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare, Phone, ArrowUp } from "lucide-react";

interface SectionStep {
  id: string;
  label: string;
  shortNumber: string;
}

const SECTIONS: SectionStep[] = [
  { id: "home", label: "Banner", shortNumber: "01" },
  { id: "about", label: "About", shortNumber: "02" },
  { id: "services", label: "Services", shortNumber: "03" },
  { id: "infrastructure", label: "Extended Infra", shortNumber: "04" },
  { id: "process", label: "Process", shortNumber: "05" },
  { id: "why-us", label: "Why SPORTICON", shortNumber: "06" },
  { id: "projects", label: "Projects", shortNumber: "07" },
  { id: "faqs", label: "FAQs", shortNumber: "09" },
  { id: "contact", label: "Contact Quote", shortNumber: "10" },
];

export default function ScrollProgress() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
  const [hoveredStep, setHoveredStep] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate overall scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
      setShowScrollTop(window.scrollY > 400);

      // Determine active section based on scroll position
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const whatsappMessage = encodeURIComponent(
    "Hi SPORTICON Infra, I am visiting your landing page and would like to speak with a project consultant."
  );
  const whatsappUrl = `https://wa.me/919400088990?text=${whatsappMessage}`;

  const activeIndex = SECTIONS.findIndex((s) => s.id === activeSection);

  return (
    <>
      {/* 1. Top Global Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-black/40 z-50 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200 transition-all duration-150 shadow-[0_0_10px_rgba(16,229,153,0.7)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* 2. Floating Continuous Step Tracker (Right Side Rail on Desktop) */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden 2xl:flex flex-col items-center select-none pointer-events-auto">
        <div className="relative py-4 px-2 rounded-full bg-[#06140f]/90 backdrop-blur-md border border-emerald-800/40 shadow-2xl flex flex-col items-center gap-3">
          {/* Vertical Connecting Rail Track */}
          <div className="absolute top-6 bottom-6 w-0.5 bg-emerald-950/80 -z-0">
            {/* Filled Track based on active section */}
            <div
              className="w-full bg-gradient-to-b from-emerald-400 to-teal-300 transition-all duration-300 shadow-[0_0_8px_rgba(16,229,153,0.6)]"
              style={{
                height: `${((Math.max(0, activeIndex) + 0.5) / SECTIONS.length) * 100}%`
              }}
            />
          </div>

          {SECTIONS.map((step, index) => {
            const isActive = activeSection === step.id;
            const isPassed = activeIndex > index;

            return (
              <div
                key={step.id}
                className="relative flex items-center justify-center group"
                onMouseEnter={() => setHoveredStep(step.id)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                {/* Tooltip Label on Hover / Active */}
                {(hoveredStep === step.id || isActive) && (
                  <div className="absolute right-9 bg-[#091f16] text-white text-[11px] font-bold px-3 py-1 rounded-lg border border-emerald-500/50 shadow-xl whitespace-nowrap transition-all pointer-events-none flex items-center gap-1.5 z-50">
                    <span className="text-emerald-400 font-mono text-[10px]">{step.shortNumber}</span>
                    <span>{step.label}</span>
                  </div>
                )}

                {/* Step Node */}
                <button
                  onClick={() => scrollTo(step.id)}
                  aria-label={`Jump to ${step.label}`}
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-mono font-bold transition-all duration-300 z-10 cursor-pointer ${
                    isActive
                      ? "bg-emerald-400 text-black scale-125 shadow-lg shadow-emerald-400/50 ring-2 ring-emerald-300/40"
                      : isPassed
                      ? "bg-emerald-700 text-white hover:bg-emerald-500"
                      : "bg-[#06110c] text-neutral-400 border border-emerald-900 hover:border-emerald-500 hover:text-white"
                  }`}
                >
                  {isPassed ? "•" : step.shortNumber}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Floating Bottom-Right Action Buttons */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-10 h-10 rounded-full bg-[#0a1e16]/90 backdrop-blur-md border border-emerald-700/50 text-emerald-300 hover:text-white hover:bg-emerald-900 transition-all shadow-lg flex items-center justify-center cursor-pointer hover:-translate-y-0.5"
            aria-label="Scroll back to top"
            title="Scroll to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* Quick Call Button */}
        <a
          href="tel:+919400088990"
          className="w-11 h-11 rounded-full bg-emerald-950/90 hover:bg-emerald-900 border border-emerald-600/50 text-emerald-400 hover:text-white transition-all shadow-lg flex items-center justify-center cursor-pointer hover:scale-105"
          aria-label="Call SPORTICON"
          title="Call +91 94000 88990"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* Floating WhatsApp CTA with pulsating aura */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 text-black font-bold text-xs shadow-2xl shadow-emerald-500/40 hover:shadow-emerald-500/60 transition-all hover:scale-105 cursor-pointer"
          title="Chat with SPORTICON Project Engineer"
        >
          <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-30 pointer-events-none" />
          <MessageSquare className="w-5 h-5 text-black shrink-0" />
          <span className="hidden sm:inline font-extrabold tracking-wide">
            Chat on WhatsApp
          </span>
        </a>
      </div>
    </>
  );
}

