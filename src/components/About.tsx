"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  CheckCircle, 
  ShieldCheck, 
  Sparkles, 
  Building2, 
  GraduationCap, 
  Users, 
  Award,
  ArrowRight,
  MoveHorizontal
} from "lucide-react";
import JumpText, { JumpBadge } from "@/components/JumpText";

export default function About() {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(10, Math.min(90, (x / rect.width) * 100));
    setSliderPosition(percent);
  };

  const clientTypes = [
    { title: "Educational Institutions", desc: "Schools, Colleges & Universities", icon: GraduationCap },
    { title: "Sports Academies & Clubs", desc: "Professional Football & Cricket Training", icon: Award },
    { title: "Government Bodies", desc: "Police Grounds, Municipal Stadiums", icon: Building2 },
    { title: "Private Investors & Hubs", desc: "Commercial Turfs & Rooftop Arenas", icon: Users },
  ];

  const valueProps = [
    {
      title: "Engineered Drainage",
      desc: "Sub-surface herringbone drainage system preventing waterlogging even during peak monsoon downpours."
    },
    {
      title: "Player Safety & Ergonomics",
      desc: "Calibrated shock absorption and non-abrasive turf filaments reducing ACL, ankle, and skin burn injuries."
    },
    {
      title: "Commercial Longevity",
      desc: "UV-stabilized 12,000 Dtex fibers maintaining vertical spine elasticity under 14+ hours of continuous daily play."
    },
    {
      title: "Turnkey Accountability",
      desc: "Complete civil foundation, lighting lux calculations, fence fabrication, and equipment under one roof."
    }
  ];

  return (
    <section id="about" className="relative py-20 lg:py-28 bg-[#f8fafc] overflow-hidden">
      {/* Subtle light grid pattern */}
      <div className="absolute inset-0 turf-grid-pattern-light opacity-50 pointer-events-none" />

      {/* Decorative emerald gradient glows for light theme */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-emerald-100/60 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-80 h-80 bg-teal-100/60 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="mb-3">
            <JumpBadge icon={Sparkles} text="ABOUT SPORTICON" className="bg-emerald-50 text-emerald-800 border-emerald-200" />
          </div>
          <p className="text-xs sm:text-sm font-bold tracking-widest text-emerald-700 uppercase mb-2">
            ENGINEERING BETTER SPACES FOR SPORTS
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            <JumpText
              text="From Empty Spaces to Game-Ready Facilities."
              className="w-full justify-center"
              highlightWords={["Game-Ready", "Facilities."]}
              highlightClassName="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600"
            />
          </h2>
        </div>

        {/* Two Column Layout: Story & Interactive Transformation Slider */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Narrative & Values */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
              <p className="text-slate-900 font-semibold text-base sm:text-lg">
                <strong className="text-emerald-700 font-bold">SPORTICON Infra Private Limited</strong> is a sports infrastructure development company dedicated to creating high-quality sporting facilities that combine performance, durability, safety and innovation.
              </p>
              <p>
                With over a decade of industry experience and more than 250 completed projects, we work with schools, educational institutions, sports academies, clubs, government organisations, residential communities and private investors across India.
              </p>
              <p>
                From the initial concept and planning to construction, installation and maintenance, we bring together technical expertise and project coordination to transform spaces into purpose-built sporting environments.
              </p>
            </div>

            {/* Value Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {valueProps.map((item, idx) => (
                <div 
                  key={idx} 
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">{item.title}</h3>
                  </div>
                  <p className="text-[12px] text-slate-600 leading-snug">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Client Footprint */}
            <div className="pt-2">
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-3">
                Trusted by Partners Across India:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {clientTypes.map((client, idx) => {
                  const Icon = client.icon;
                  return (
                    <div 
                      key={idx}
                      className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-center flex flex-col items-center justify-center hover:bg-emerald-50 hover:border-emerald-300 transition-colors shadow-2xs"
                    >
                      <Icon className="w-5 h-5 text-emerald-600 mb-1" />
                      <div className="text-[11px] font-bold text-slate-800 leading-tight">{client.title}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Before / After Transformation Visual */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="w-full">
              <div className="flex items-center justify-between mb-3 text-xs text-slate-600">
                <span className="flex items-center gap-1.5 text-emerald-700 font-bold">
                  <MoveHorizontal className="w-4 h-4" />
                  <span>Interactive Transformation Slider</span>
                </span>
                <span className="text-[11px] bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full text-emerald-800 font-bold">
                  Drag to compare
                </span>
              </div>

              {/* Before/After Interactive Comparison Box */}
              <div 
                className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden shadow-xl border-2 border-slate-200 select-none cursor-ew-resize touch-none"
                onMouseMove={handleSliderMove}
                onTouchMove={handleSliderMove}
              >
                {/* AFTER Image (Full Width underneath) */}
                <div className="absolute inset-0">
                  <Image
                    src="/images/site-after.jpg"
                    alt="Game-Ready Finished Football Turf Facility"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    Game-Ready Facility (After)
                  </div>
                </div>

                {/* BEFORE Image (Clipped overlay on left side) */}
                <div 
                  className="absolute inset-y-0 left-0 overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <div className="relative w-full h-full min-w-[320px] sm:min-w-[500px] lg:min-w-[550px]">
                    <Image
                      src="/images/site-before.jpg"
                      alt="Raw Empty Construction Land"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute top-4 left-4 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    Empty Space / Raw Land (Before)
                  </div>
                </div>

                {/* Divider Line & Handle */}
                <div 
                  className="absolute inset-y-0 w-1 bg-white shadow-lg z-20"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-emerald-800 flex items-center justify-center shadow-md border-2 border-emerald-600 font-bold text-xs">
                    ↔
                  </div>
                </div>
              </div>

              {/* Caption Underneath */}
              <div className="mt-3.5 p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                <span className="text-slate-600 font-medium">
                  Real project execution: Ground levelling to international standard turf installation.
                </span>
                <a 
                  href="#process" 
                  className="text-emerald-700 font-bold hover:text-emerald-800 flex items-center gap-1 shrink-0 ml-2"
                >
                  <span>See Process</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
