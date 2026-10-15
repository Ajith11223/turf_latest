"use client";

import React from "react";
import { 
  EXTENDED_INFRASTRUCTURE 
} from "@/data/sportsData";
import { 
  Sparkles, 
  LayoutGrid, 
  Flame, 
  Smile, 
  Dumbbell, 
  Layers, 
  Sun, 
  Shield, 
  Award, 
  Wrench,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import JumpText, { JumpBadge } from "@/components/JumpText";

export default function BeyondCourts() {
  const iconMap: Record<string, React.ElementType> = {
    LayoutGrid,
    Flame,
    Smile,
    Dumbbell,
    Layers,
    Sun,
    Shield,
    Award,
    Wrench,
  };

  const whatsappMessage = encodeURIComponent(
    "Hi SPORTICON Infra, I am interested in extended sports infrastructure (Lighting, Fencing, Play Areas, Tracks, Renovation)."
  );
  const whatsappUrl = `https://wa.me/919400088990?text=${whatsappMessage}`;

  return (
    <section id="infrastructure" className="relative py-20 lg:py-28 bg-[#071710] overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 turf-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-emerald-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="mb-3">
            <JumpBadge icon={Sparkles} text="EXTENDED CAPABILITIES" />
          </div>
          <p className="text-xs sm:text-sm font-bold tracking-widest text-emerald-400 uppercase mb-2">
            BEYOND SPORTS COURTS
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            <JumpText text="One Partner." className="mr-2" />
            <JumpText 
              text="Complete Sports Infrastructure."
              highlightWords={["Complete", "Sports", "Infrastructure."]}
              highlightClassName="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300"
            />
          </h2>
          <p className="text-sm sm:text-base text-neutral-300">
            We go beyond individual courts to develop complete environments where athletes, students and communities can play, train, compete and stay active.
          </p>
        </div>

        {/* 9 Extended Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXTENDED_INFRASTRUCTURE.map((item, idx) => {
            const Icon = iconMap[item.icon] || Award;
            return (
              <div
                key={item.id}
                className="group p-6 rounded-2xl bg-[#0a1e16] border border-emerald-800/40 hover:border-emerald-500/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-950/50 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-950/80 border border-emerald-700/50 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-400 group-hover:text-black transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/90 border border-emerald-700/40 px-2.5 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-emerald-900/50 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-emerald-500/80">
                    Solution 0{idx + 1}
                  </span>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-emerald-400 group-hover:text-emerald-300 flex items-center gap-1 transition-colors"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Guarantee Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-emerald-950/50 border border-emerald-700/30 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mx-auto sm:mx-0" />
            <div>
              <div className="text-xs sm:text-sm font-bold text-white">Full Turnkey Civil Integration</div>
              <div className="text-[11px] text-neutral-400">Earth excavation, retaining walls, floodlight electricals</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mx-auto sm:mx-0" />
            <div>
              <div className="text-xs sm:text-sm font-bold text-white">Certified Material Standards</div>
              <div className="text-[11px] text-neutral-400">FIFA Labosport & FIBA tested synthetic surfaces</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mx-auto sm:mx-0" />
            <div>
              <div className="text-xs sm:text-sm font-bold text-white">24-Hour Maintenance Cell</div>
              <div className="text-[11px] text-neutral-400">Rapid callout for storm damage, net tears, light faults</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

