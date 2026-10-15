"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  PROCESS_STEPS, 
  ProcessStep 
} from "@/data/sportsData";
import { 
  Sparkles, 
  MessageSquare, 
  MapPin, 
  Compass, 
  CheckSquare, 
  Hammer, 
  CheckCircle2, 
  Trophy, 
  Headphones,
  Check,
  ChevronRight,
  ArrowDown
} from "lucide-react";
import JumpText, { JumpBadge } from "@/components/JumpText";

export default function ProcessStepper() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const iconMap: Record<string, React.ElementType> = {
    MessageSquare,
    MapPin,
    Compass,
    CheckSquare,
    Hammer,
    CheckCircle2,
    Trophy,
    Headphones,
  };

  // Scroll spy to highlight active step as the user scrolls through the process
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.45;

      stepRefs.current.forEach((ref, index) => {
        if (!ref) return;
        const top = ref.offsetTop;
        const height = ref.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveStep(index + 1);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToStep = (stepNumber: number) => {
    setActiveStep(stepNumber);
    const targetRef = stepRefs.current[stepNumber - 1];
    if (targetRef) {
      targetRef.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section id="process" className="relative py-20 lg:py-32 bg-[#06110c] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 turf-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-emerald-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="mb-3">
            <JumpBadge icon={Sparkles} text="OUR PROJECT PROCESS" />
          </div>
          <p className="text-xs sm:text-sm font-bold tracking-widest text-emerald-400 uppercase mb-2">
            FROM CONCEPT TO COMPLETION
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            <JumpText text="A Structured Approach to" className="mr-2" />
            <JumpText 
              text="Every Project."
              highlightWords={["Every", "Project."]}
              highlightClassName="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300"
            />
          </h2>
          <p className="text-sm sm:text-base text-neutral-300">
            At SPORTICON, we believe successful sports infrastructure begins with careful planning and ends with precise execution. Our systematic process focuses on quality, efficiency, transparency and long-term performance at every stage.
          </p>
        </div>

        {/* Quick Stepper Bar (Horizontal on tablet/desktop) */}
        <div className="sticky top-20 z-30 mb-12 py-3 px-4 rounded-2xl bg-[#091b14]/90 backdrop-blur-md border border-emerald-800/40 shadow-xl hidden md:flex items-center justify-between overflow-x-auto gap-2">
          {PROCESS_STEPS.map((step) => {
            const isPassed = activeStep > step.number;
            const isCurrent = activeStep === step.number;
            return (
              <button
                key={step.number}
                onClick={() => scrollToStep(step.number)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  isCurrent
                    ? "bg-emerald-400 text-black shadow-md shadow-emerald-400/30 scale-105"
                    : isPassed
                    ? "text-emerald-300 bg-emerald-950/70 border border-emerald-700/40"
                    : "text-neutral-400 hover:text-white hover:bg-emerald-950/40"
                }`}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                  isCurrent ? "bg-black text-emerald-400" : isPassed ? "bg-emerald-500 text-black" : "bg-emerald-950 text-neutral-400"
                }`}>
                  {isPassed ? "✓" : step.number}
                </span>
                <span>{step.title}</span>
              </button>
            );
          })}
        </div>

        {/* Main Vertical Continuous Steps Timeline */}
        <div className="relative">
          {/* Continuous vertical connecting line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-12 w-1 -translate-x-1/2 bg-emerald-950/80 rounded-full">
            {/* Active filled line based on activeStep */}
            <div 
              className="w-full bg-gradient-to-b from-emerald-400 via-teal-300 to-emerald-500 transition-all duration-500 shadow-[0_0_12px_rgba(16,229,153,0.5)]"
              style={{
                height: `${((activeStep - 0.5) / PROCESS_STEPS.length) * 100}%`
              }}
            />
          </div>

          <div className="space-y-12 sm:space-y-16">
            {PROCESS_STEPS.map((step, idx) => {
              const Icon = iconMap[step.icon] || CheckCircle2;
              const isEven = idx % 2 === 1;
              const isCurrent = activeStep === step.number;
              const isCompleted = activeStep > step.number;

              return (
                <div
                  key={step.number}
                  ref={(el) => {
                    stepRefs.current[idx] = el;
                  }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  } gap-6 md:gap-12 transition-all duration-300`}
                >
                  {/* Step Card Content */}
                  <div className={`w-full md:w-[calc(50%-40px)] pl-14 md:pl-0 ${isEven ? "md:text-left" : "md:text-left"}`}>
                    <div
                      className={`p-6 sm:p-7 rounded-2xl transition-all duration-500 border ${
                        isCurrent
                          ? "bg-[#0c241b] border-emerald-400 shadow-2xl shadow-emerald-500/20 scale-[1.02]"
                          : isCompleted
                          ? "bg-[#091a13] border-emerald-800/40"
                          : "bg-[#07150f]/80 border-emerald-900/30 opacity-75 hover:opacity-100"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-emerald-950 border border-emerald-700/50 text-emerald-400">
                          Step 0{step.number} of 08
                        </span>
                        {isCurrent && (
                          <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-950 px-2.5 py-0.5 rounded-full border border-emerald-500/30 animate-pulse">
                            Active Step
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
                        {step.title}
                      </h3>

                      <p className="text-xs sm:text-sm font-medium text-emerald-300 mb-3">
                        {step.shortDesc}
                      </p>

                      <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-5">
                        {step.fullDesc}
                      </p>

                      {/* Deliverables Checklist */}
                      <div className="space-y-2 pt-4 border-t border-emerald-900/60">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400/90 block">
                          Phase Deliverables:
                        </span>
                        {step.deliverables.map((del, dIdx) => (
                          <div key={dIdx} className="flex items-center gap-2 text-xs text-neutral-300">
                            <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span>{del}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center Node Indicator */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-6 flex items-center justify-center z-10">
                    <button
                      onClick={() => scrollToStep(step.number)}
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 cursor-pointer ${
                        isCurrent
                          ? "bg-emerald-400 text-black shadow-lg shadow-emerald-400/50 scale-125 ring-4 ring-emerald-500/30"
                          : isCompleted
                          ? "bg-emerald-600 text-white shadow-md shadow-emerald-900/50 ring-2 ring-emerald-400/40"
                          : "bg-[#06110c] text-neutral-400 border-2 border-emerald-900 hover:border-emerald-500 hover:text-white"
                      }`}
                      aria-label={`Step ${step.number}: ${step.title}`}
                    >
                      {isCompleted ? "✓" : <Icon className="w-5 h-5" />}
                    </button>
                  </div>

                  {/* Empty Spacer Column for symmetry on desktop */}
                  <div className="hidden md:block md:w-[calc(50%-40px)]" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Handover Quality Guarantee Footer */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-emerald-950/80 via-[#0a2319] to-emerald-950/80 border border-emerald-600/40">
            <div className="w-12 h-12 rounded-full bg-emerald-400 text-black flex items-center justify-center font-bold text-lg shrink-0">
              100%
            </div>
            <div className="text-center sm:text-left">
              <h4 className="text-sm sm:text-base font-bold text-white">
                Guaranteed On-Time Project Handover with Zero Compromise
              </h4>
              <p className="text-xs text-neutral-300">
                Weekly progress videos, live site milestones, and strict adherence to structural civil standards.
              </p>
            </div>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-black bg-emerald-400 hover:bg-emerald-300 transition-colors shrink-0"
            >
              Start Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

