"use client";

import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
  ArrowRight,
} from "lucide-react";
import JumpText, { JumpBadge } from "@/components/JumpText";

export default function BeyondCourts() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const pageSize = 3;
  const pageCount = Math.ceil(EXTENDED_INFRASTRUCTURE.length / pageSize);
  const visibleItems = EXTENDED_INFRASTRUCTURE.slice(
    currentPage * pageSize,
    currentPage * pageSize + pageSize,
  );

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

  const backgroundImages: Record<string, string> = {
    "multi-sport": "/images/cards/football.jpg",
    tracks: "/images/cards/tennis.jpg",
    "play-areas": "/images/hero-turf.jpg",
    "outdoor-fitness": "/images/cards/basketball.jpg",
    "flooring-systems": "/images/cards/badminton.jpg",
    "sports-lighting": "/images/site-after.jpg",
    "fencing-netting": "/images/cards/cricket.jpg",
    equipment: "/images/cards/volleyball.jpg",
    renovation: "/images/site-before.jpg",
  };

  const whatsappMessage = encodeURIComponent(
    "Hi SPORTICON Infra, I am interested in extended sports infrastructure (Lighting, Fencing, Play Areas, Tracks, Renovation)."
  );
  const whatsappUrl = `https://wa.me/919400088990?text=${whatsappMessage}`;

  const showNextPage = useCallback(() => {
    setDirection(1);
    setCurrentPage((page) => (page + 1) % pageCount);
  }, [pageCount]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const intervalId = window.setInterval(showNextPage, 4500);
    return () => window.clearInterval(intervalId);
  }, [pageCount, showNextPage]);

  const pageVariants = {
    enter: (slideDirection: number) => ({
      opacity: 0,
      x: slideDirection > 0 ? 64 : -64,
    }),
    center: { opacity: 1, x: 0 },
    exit: (slideDirection: number) => ({
      opacity: 0,
      x: slideDirection > 0 ? -64 : 64,
    }),
  };

  return (
    <section id="infrastructure" className="relative py-20 lg:py-28 bg-[#f8fafc] overflow-hidden">
      {/* Light background accents */}
      <div className="absolute inset-0 turf-grid-pattern-light opacity-40 pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-emerald-100/60 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="mb-3">
            <JumpBadge icon={Sparkles} text="EXTENDED CAPABILITIES" className="bg-emerald-100/70 text-emerald-800 border-emerald-200" />
          </div>
          <p className="text-xs sm:text-sm font-bold tracking-widest text-emerald-700 uppercase mb-2">
            BEYOND SPORTS COURTS
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            <JumpText
              text="One Partner. Complete Sports Infrastructure."
              className="w-full justify-center"
              highlightWords={["Complete", "Sports", "Infrastructure."]}
              highlightClassName="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600"
            />
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            We go beyond individual courts to develop complete environments where athletes, students and communities can play, train, compete and stay active.
          </p>
        </div>

        {/* Three extended solutions at a time */}
        <div>
          <div className="mb-5 flex justify-center">
            <span className="text-xs font-semibold tracking-wide text-white/75" aria-live="polite">
              {String(currentPage * pageSize + 1).padStart(2, "0")}–{String(Math.min((currentPage + 1) * pageSize, EXTENDED_INFRASTRUCTURE.length)).padStart(2, "0")} of {String(EXTENDED_INFRASTRUCTURE.length).padStart(2, "0")}
            </span>
          </div>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentPage}
              custom={direction}
              variants={pageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
              aria-live="polite"
              aria-atomic="true"
            >
              {visibleItems.map((item, index) => {
                const Icon = iconMap[item.icon] || Award;
                const itemNumber = currentPage * pageSize + index + 1;
                return (
                  <motion.article
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.09 }}
                    className="group relative isolate flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-900 p-6 text-white transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400 hover:shadow-xl"
                    style={{
                      backgroundImage: `url('${backgroundImages[item.id]}')`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950/85 via-slate-950/65 to-emerald-950/55 transition-colors group-hover:from-slate-950/75 group-hover:via-slate-950/60 group-hover:to-emerald-950/45" />
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 group-hover:scale-105 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                          {item.badge}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-white group-hover:text-emerald-200 transition-colors mb-2">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="relative z-10 mt-6 pt-4 border-t border-white/25 flex items-center justify-between">
                      <span className="text-[11px] font-mono text-emerald-200 font-bold">
                        Solution {String(itemNumber).padStart(2, "0")}
                      </span>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-white group-hover:text-emerald-200 flex items-center gap-1 transition-colors"
                      >
                        <span>Inquire</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Technical Guarantee Strip (Light Theme) */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-emerald-200 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center sm:text-left shadow-sm">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mx-auto sm:mx-0" />
            <div>
              <div className="text-xs sm:text-sm font-bold text-slate-900">Full Turnkey Civil Integration</div>
              <div className="text-[11px] text-slate-500">Earth excavation, retaining walls, floodlight electricals</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mx-auto sm:mx-0" />
            <div>
              <div className="text-xs sm:text-sm font-bold text-slate-900">Certified Material Standards</div>
              <div className="text-[11px] text-slate-500">FIFA Labosport & FIBA tested synthetic surfaces</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mx-auto sm:mx-0" />
            <div>
              <div className="text-xs sm:text-sm font-bold text-slate-900">24-Hour Maintenance Cell</div>
              <div className="text-[11px] text-slate-500">Rapid callout for storm damage, net tears, light faults</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
