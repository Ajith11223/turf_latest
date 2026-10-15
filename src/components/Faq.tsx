"use client";

import React, { useState } from "react";
import { 
  FAQS, 
  FaqItem 
} from "@/data/sportsData";
import { 
  Sparkles, 
  ChevronDown, 
  HelpCircle, 
  MessageSquare, 
  Phone
} from "lucide-react";
import JumpText, { JumpBadge } from "@/components/JumpText";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const whatsappMessage = encodeURIComponent(
    "Hi SPORTICON Infra, I have a specific question regarding sports court construction on my plot."
  );
  const whatsappUrl = `https://wa.me/919400088990?text=${whatsappMessage}`;

  return (
    <section id="faqs" className="relative py-20 lg:py-28 bg-[#06110c] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-emerald-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="mb-3">
            <JumpBadge icon={HelpCircle} text="COMMONLY ASKED QUESTIONS" />
          </div>
          <p className="text-xs sm:text-sm font-bold tracking-widest text-emerald-400 uppercase mb-2">
            FREQUENTLY ASKED QUESTIONS
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            <JumpText text="Everything You Need to" className="mr-2" />
            <JumpText 
              text="Know Before Building."
              highlightWords={["Know", "Before", "Building."]}
              highlightClassName="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300"
            />
          </h2>
          <p className="text-sm sm:text-base text-neutral-300">
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
                    ? "bg-[#0a2017] border-emerald-500/50 shadow-xl shadow-emerald-950/40"
                    : "bg-[#091a13]/70 border-emerald-800/30 hover:border-emerald-700/50"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start sm:items-center gap-3">
                    <span className="font-mono text-xs font-bold text-emerald-400 bg-emerald-950 px-2.5 py-1 rounded-md border border-emerald-800/50 shrink-0">
                      0{idx + 1}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`p-1.5 rounded-full bg-emerald-950 text-emerald-400 transition-transform duration-300 shrink-0 ${
                    isOpen ? "rotate-180 bg-emerald-400 text-black" : ""
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-emerald-900/40">
                    <p className="mt-3">{faq.answer}</p>
                    <div className="mt-3 flex items-center gap-2 text-[11px] text-emerald-400/90">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      <span>Topic: {faq.category}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions prompt */}
        <div className="mt-12 p-6 rounded-2xl bg-emerald-950/50 border border-emerald-700/40 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm sm:text-base font-bold text-white">
              Still have questions about your specific plot or layout?
            </h4>
            <p className="text-xs text-neutral-300">
              Speak directly with our chief civil & sports infrastructure engineers today.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+919400088990"
              className="px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-950 hover:bg-emerald-900 border border-emerald-700/50 flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>Call Us</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl text-xs font-bold text-black bg-emerald-400 hover:bg-emerald-300 flex items-center gap-2"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

