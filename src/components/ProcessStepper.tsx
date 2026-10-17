"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
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
    <section id="process" className="relative py-20 lg:py-32 bg-[#f8fafc] overflow-hidden">
      {/* Light background grid */}
      <div className="absolute inset-0 turf-grid-pattern-light opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-emerald-100/50 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="mb-3">
            <JumpBadge icon={Sparkles} text="OUR PROJECT PROCESS" className="bg-emerald-50 text-emerald-800 border-emerald-200" />
          </div>
          <p className="text-xs sm:text-sm font-bold tracking-widest text-emerald-700 uppercase mb-2">
            FROM CONCEPT TO COMPLETION
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            <JumpText text="A Structured Approach to" className="mr-2 text-slate-950" />
            <JumpText 
              text="Every Project."
              highlightWords={["Every", "Project."]}
              highlightClassName="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600"
            />
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            At SPORTICON, we believe successful sports infrastructure begins with careful planning and ends with precise execution. Our systematic process focuses on quality, efficiency, transparency and long-term performance at every stage.
          </p>
        </div>

        {/* Quick Stepper Bar (Light Theme) */}
        <div className="sticky top-20 z-30 mb-12 py-3 px-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg hidden md:flex items-center justify-between overflow-x-auto gap-2">
          {PROCESS_STEPS.map((step) => {
            const isPassed = activeStep > step.number;
            const isCurrent = activeStep === step.number;
            return (
              <button
                key={step.number}
                onClick={() => scrollToStep(step.number)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  isCurrent
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/30 scale-105"
                    : isPassed
                    ? "text-emerald-800 bg-emerald-50 border border-emerald-200"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                  isCurrent ? "bg-white text-emerald-700" : isPassed ? "bg-emerald-600 text-white" : "bg-slate-100 text-slate-600"
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
          <div className="absolute left-6 md:left-1/2 top-4 bottom-12 w-1 -translate-x-1/2 bg-slate-200 rounded-full">
            {/* Active filled line based on activeStep */}
            <div 
              className="w-full bg-gradient-to-b from-emerald-500 via-teal-500 to-emerald-600 transition-all duration-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"
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
                    <motion.div
                      initial={{ opacity: 0, rotateY: isEven ? 24 : -24, scale: 0.96 }}
                      whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: idx * 0.04 }}
                      style={{ transformPerspective: 1200, transformStyle: "preserve-3d", transformOrigin: isEven ? "left center" : "right center" }}
                      className={`p-6 sm:p-7 rounded-2xl transition-all duration-500 border ${
                        isCurrent
                          ? "bg-emerald-50/70 border-emerald-400 shadow-xl scale-[1.02]"
                          : isCompleted
                          ? "bg-white border-slate-200 shadow-sm"
                          : "bg-slate-50/70 border-slate-200 opacity-80 hover:opacity-100"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-white border border-slate-200 text-emerald-800 shadow-2xs">
                          Step 0{step.number} of 08
                        </span>
                        {isCurrent && (
                          <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-white px-2.5 py-0.5 rounded-full border border-emerald-300 shadow-2xs">
                            Active Step
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
                        {step.title}
                      </h3>

                      <p className="text-xs sm:text-sm font-semibold text-emerald-700 mb-3">
                        {step.shortDesc}
                      </p>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                        {step.fullDesc}
                      </p>

                      {/* Deliverables Checklist */}
                      <div className="space-y-2 pt-4 border-t border-slate-200">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-800 block">
                          Phase Deliverables:
                        </span>
                        {step.deliverables.map((del, dIdx) => (
                          <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-700">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>{del}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Center Node Indicator */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-6 flex items-center justify-center z-10">
                    <button
                      onClick={() => scrollToStep(step.number)}
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 cursor-pointer ${
                        isCurrent
                          ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/40 scale-125 ring-4 ring-emerald-200"
                          : isCompleted
                          ? "bg-emerald-600 text-white shadow-md ring-2 ring-emerald-300"
                          : "bg-white text-slate-600 border-2 border-slate-300 hover:border-emerald-500 hover:text-slate-900"
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

        {/* Handover Quality Guarantee Footer (Light Theme) */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 border border-emerald-200 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center font-black text-lg shrink-0">
              100%
            </div>
            <div className="text-center sm:text-left">
              <h4 className="text-sm sm:text-base font-bold text-slate-900">
                Guaranteed On-Time Project Handover with Zero Compromise
              </h4>
              <p className="text-xs text-slate-600">
                Weekly progress videos, live site milestones, and strict adherence to structural civil standards.
              </p>
            </div>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shrink-0 shadow-md shadow-emerald-600/20"
            >
              Start Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
