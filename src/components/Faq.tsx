"use client";

import React, { useState } from "react";
import { 
  FAQS, 
  FaqItem 
} from "@/data/sportsData";
import { 
  ChevronDown, 
  HelpCircle
} from "lucide-react";
import JumpText, { JumpBadge } from "@/components/JumpText";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="relative py-20 lg:py-28 bg-[#f8fafc] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-emerald-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="mb-3">
            <JumpBadge icon={HelpCircle} text="FREQUENTLY ASKED QUESTIONS" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            <JumpText
              text="Everything You Need to Know Before Building."
              className="w-full justify-center"
              highlightWords={["Know", "Before", "Building."]}
              highlightClassName="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300"
            />
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Have questions about land preparation, costs, timelines, or maintenance? Here are answers to the most common queries from our clients.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? "bg-white border-emerald-400 shadow-lg shadow-slate-900/10"
                    : "bg-white/90 border-slate-200 hover:border-emerald-300"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start sm:items-center gap-3">
                    <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 shrink-0">
                      0{idx + 1}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-slate-900">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`p-1.5 rounded-full bg-emerald-50 text-emerald-700 transition-transform duration-300 shrink-0 ${
                    isOpen ? "rotate-180 bg-emerald-600 text-white" : ""
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200">
                    <p className="mt-3">{faq.answer}</p>
                    <div className="mt-3 flex items-center gap-2 text-[11px] text-emerald-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      <span>Topic: {faq.category}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

