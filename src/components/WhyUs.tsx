"use client";

import React, { useState } from "react";
import { 
  WHY_US_PILLARS 
} from "@/data/sportsData";
import { 
  Sparkles, 
  Check, 
  X, 
  ShieldCheck, 
  Clock, 
  Layers, 
  Award, 
  MapPin, 
  Headphones, 
  CheckCircle2, 
  TrendingUp, 
  FileCheck 
} from "lucide-react";
import JumpText, { JumpBadge } from "@/components/JumpText";

export default function WhyUs() {
  const [activeTab, setActiveTab] = useState<"pillars" | "comparison">("pillars");

  const iconMap: Record<string, React.ElementType> = {
    experience: Clock,
    projects: Award,
    "end-to-end": Layers,
    custom: TrendingUp,
    reach: MapPin,
    support: Headphones,
  };

  const comparisonFeatures = [
    {
      feature: "Sub-Base & Drainage System",
      sporticon: "Engineered perforated French drainage + multi-gradient gravel filtration preventing all waterlogging.",
      others: "Simple sand filling with flat slope leading to severe monsoon puddling and base sinkage.",
    },
    {
      feature: "Turf Yarn & UV Stabilization",
      sporticon: "10,000–12,000 Dtex FIFA-grade monofilament with heavy UV inhibitors rated for 8–10 years harsh sun.",
      others: "Low-density split-film yarn that shreds, mats flat, and deteriorates after 1–2 summers.",
    },
    {
      feature: "Civil Levelling & Planarity",
      sporticon: "Laser-guided compaction to 3mm tolerance ensuring true ball roll and injury prevention.",
      others: "Manual roller levelling causing uneven hollows, ankle sprains, and ball deviations.",
    },
    {
      feature: "Lighting & Electricals",
      sporticon: "Custom photometric lux design (300+ Lux), IP66 waterproof drivers, flicker-free night streaming.",
      others: "Generic unbranded floodlights with uneven dark spots, heavy glare, and high electricity bills.",
    },
    {
      feature: "Perimeter Safety Netting",
      sporticon: "UV-treated 100% virgin HDPE braided netting with GI structural poles anchored in concrete footings.",
      others: "Lightweight nylon nets that tear under heavy football kicks and sag in rain.",
    },
    {
      feature: "After-Handover Support",
      sporticon: "Dedicated 24/7 service desk, periodic mechanical grooming, infill replenishment and warranty.",
      others: "Subcontractor disappears after final payment with zero maintenance support.",
    },
  ];

  return (
    <section id="why-us" className="relative py-20 lg:py-28 bg-[#071710] overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 turf-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-emerald-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="mb-3">
            <JumpBadge icon={Sparkles} text="THE SPORTICON ADVANTAGE" />
          </div>
          <p className="text-xs sm:text-sm font-bold tracking-widest text-emerald-400 uppercase mb-2">
            BUILT ON EXPERIENCE. DRIVEN BY QUALITY.
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            <JumpText text="The Right Partner for Your" className="mr-2" />
            <JumpText 
              text="Sports Facility."
              highlightWords={["Sports", "Facility."]}
              highlightClassName="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300"
            />
          </h2>
          <p className="text-sm sm:text-base text-neutral-300">
            Choosing the right infrastructure partner is essential to the quality, functionality and longevity of your facility. SPORTICON combines industry experience, technical expertise, material selection and project coordination to deliver solutions tailored to each project.
          </p>

          {/* Toggle between Pillars & Comparison */}
          <div className="flex justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveTab("pillars")}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "pillars"
                  ? "bg-emerald-400 text-black shadow-lg shadow-emerald-400/20"
                  : "bg-emerald-950/60 text-neutral-300 border border-emerald-800/40 hover:text-white"
              }`}
            >
              6 Core Pillars
            </button>
            <button
              onClick={() => setActiveTab("comparison")}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "comparison"
                  ? "bg-emerald-400 text-black shadow-lg shadow-emerald-400/20"
                  : "bg-emerald-950/60 text-neutral-300 border border-emerald-800/40 hover:text-white"
              }`}
            >
              SPORTICON vs Standard Contractors
            </button>
          </div>
        </div>

        {/* Tab 1: 6 Core Pillars Grid */}
        {activeTab === "pillars" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 animate-fadeIn">
            {WHY_US_PILLARS.map((pillar) => {
              const Icon = iconMap[pillar.id] || ShieldCheck;
              return (
                <div
                  key={pillar.id}
                  className="p-7 rounded-2xl bg-[#0a1e16] border border-emerald-800/35 hover:border-emerald-500/60 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-emerald-950/60 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-emerald-950 border border-emerald-700/50 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-400 group-hover:text-black transition-all">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200 font-mono">
                        {pillar.stat}
                      </span>
                    </div>

                    <div className="text-xs font-bold uppercase tracking-wider text-emerald-400/90 mb-1">
                      {pillar.label}
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                      {pillar.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-emerald-900/40 flex items-center gap-1.5 text-xs text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Verified SPORTICON Standard</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2: Comparison Table */}
        {activeTab === "comparison" && (
          <div className="rounded-2xl bg-[#091a13] border border-emerald-800/40 overflow-hidden shadow-2xl animate-fadeIn">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-emerald-950/90 border-b border-emerald-800/60 text-white">
                    <th className="p-4 sm:p-5 font-bold">Engineering Dimension</th>
                    <th className="p-4 sm:p-5 font-bold text-emerald-300 bg-emerald-900/40 border-x border-emerald-700/40">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                        SPORTICON Infra Standard
                      </div>
                    </th>
                    <th className="p-4 sm:p-5 font-bold text-neutral-400">
                      Generic Local Contractors
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-emerald-900/30">
                  {comparisonFeatures.map((row, idx) => (
                    <tr key={idx} className="hover:bg-emerald-950/30 transition-colors">
                      <td className="p-4 sm:p-5 font-bold text-white align-top">
                        {row.feature}
                      </td>
                      <td className="p-4 sm:p-5 text-emerald-100 bg-emerald-950/20 border-x border-emerald-800/30 align-top">
                        <div className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{row.sporticon}</span>
                        </div>
                      </td>
                      <td className="p-4 sm:p-5 text-neutral-400 align-top">
                        <div className="flex items-start gap-2">
                          <X className="w-4 h-4 text-red-400/80 shrink-0 mt-0.5" />
                          <span>{row.others}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

