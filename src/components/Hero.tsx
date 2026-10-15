"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import JumpText, { JumpBadge } from "@/components/JumpText";
import { 
  ArrowRight, 
  MessageSquare, 
  ShieldCheck, 
  Trophy, 
  Sparkles, 
  Clock, 
  MapPin, 
  Layers, 
  CheckCircle2, 
  ChevronDown,
  Sun,
  Flame,
  Zap
} from "lucide-react";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    setMousePos({
      x: (clientX / innerWidth - 0.5) * 30,
      y: (clientY / innerHeight - 0.5) * 30,
    });
  };

  const whatsappMessage = encodeURIComponent(
    "Hi SPORTICON Infra, I saw your sports facility portfolio. I would like a free quotation for a new turf / court project."
  );
  const whatsappUrl = `https://wa.me/919400088990?text=${whatsappMessage}`;

  const stats = [
    {
      value: "250+",
      label: "Projects Handed Over",
      sublabel: "Schools, Academies & Commercial Hubs",
      icon: Trophy,
      glow: "from-amber-400 to-emerald-400",
    },
    {
      value: "500+",
      label: "Locations We Have Built In",
      sublabel: "Across Major Cities & States in India",
      icon: MapPin,
      glow: "from-emerald-400 to-teal-300",
    },
    {
      value: "10+",
      label: "Years of Experience",
      sublabel: "Specialized Sports Infrastructure Engineering",
      icon: Layers,
      glow: "from-teal-300 to-cyan-400",
    },
    {
      value: "24 hr",
      label: "Maintenance Support",
      sublabel: "Dedicated Ground Care & Emergency Response",
      icon: Clock,
      glow: "from-amber-300 to-emerald-400",
    },
  ];

  return (
    <section 
      id="home" 
      onMouseMove={handleMouseMove}
      className="relative min-h-[96vh] flex flex-col justify-between overflow-hidden pt-6 pb-12 select-none"
    >
      {/* 1. Base Stadium Turf Image Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{
            x: mousePos.x * 0.4,
            y: mousePos.y * 0.4,
            scale: 1.05,
          }}
          transition={{ type: "spring", stiffness: 120, damping: 25 }}
          className="relative w-full h-full"
        >
          <Image
            src="/images/hero-turf.jpg"
            alt="SPORTICON Artificial Football Turf Court at Sunset"
            fill
            priority
            className="object-cover object-center filter brightness-[0.92] contrast-[1.08]"
          />
        </motion.div>

        {/* 2. FIRST IMAGE EXACT COLOR COMBO OVERLAYS:
            - Radiant Golden Sunset Horizon Glow (Top-Right & Center-Right)
            - Dusk Twilight Cyan/Blue (Top-Left)
            - Vibrant Stadium Turf Emerald Field (Bottom & Center)
        */}
        {/* Golden Hour Sunset Radial Flare (Right Horizon like in image 1) */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[500px] bg-gradient-to-l from-amber-500/35 via-orange-500/20 to-transparent blur-[110px] pointer-events-none animate-pulse-glow" />
        <div className="absolute top-10 right-1/4 w-80 h-80 bg-gradient-to-br from-amber-300/25 to-yellow-500/15 blur-[90px] rounded-full pointer-events-none" />

        {/* Stadium Floodlight Beams (Conical light shafts pouring down from left & right) */}
        <div 
          className="absolute -top-10 left-[8%] w-64 h-[750px] bg-gradient-to-b from-white/30 via-emerald-300/15 to-transparent blur-[35px] pointer-events-none transform -rotate-[22deg] origin-top"
          style={{ mixBlendMode: "screen" }}
        />
        <div 
          className="absolute -top-10 right-[12%] w-72 h-[800px] bg-gradient-to-b from-amber-200/40 via-emerald-300/15 to-transparent blur-[40px] pointer-events-none transform rotate-[25deg] origin-top"
          style={{ mixBlendMode: "screen" }}
        />

        {/* Twilight Blue to Turf Emerald Gradient Contrast Map */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#04120a] via-[#05170e]/80 to-[#072418]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#031209]/95 via-[#041910]/75 to-[#082b1d]/40" />

        {/* Animated Turf Grid & Chalk Lines */}
        <div className="absolute inset-0 turf-grid-pattern opacity-25" />

        {/* Animated Corner Pitch Arc Light Sweep */}
        <svg 
          className="absolute -bottom-10 -left-10 w-[450px] h-[450px] pointer-events-none opacity-40"
          viewBox="0 0 100 100"
        >
          <circle
            cx="0"
            cy="100"
            r="80"
            fill="none"
            stroke="rgba(255, 255, 255, 0.4)"
            strokeWidth="1.5"
            strokeDasharray="4 2"
          />
          <circle
            cx="0"
            cy="100"
            r="80"
            fill="none"
            stroke="#10e599"
            strokeWidth="2.5"
            strokeDasharray="20 180"
            className="animate-spin"
            style={{ animationDuration: "14s" }}
          />
        </svg>

        {/* Rising Atmospheric Sports Energy Sparks */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-gradient-to-r from-amber-300 to-emerald-300 shadow-[0_0_8px_rgba(251,191,36,0.8)]"
              style={{
                left: `${10 + (i * 7.5)}%`,
                bottom: `${(i % 5) * 15}%`,
              }}
              animate={{
                y: [-20, -140],
                x: [(i % 2 === 0 ? 10 : -10), (i % 2 === 0 ? -15 : 15)],
                opacity: [0, 0.8, 0],
                scale: [0.5, 1.2, 0.5],
              }}
              transition={{
                duration: 4 + (i % 3) * 1.5,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 md:pt-12 my-auto w-full">
        <div className="max-w-3xl">
          {/* Top Pill Badge with Jump Effect */}
          <div className="mb-5">
            <JumpBadge
              icon={Sparkles}
              text="Pan-India Turnkey Sports Infrastructure • FIFA & FIBA Standards"
              className="border-emerald-400/50 bg-[#051c13]/90 text-emerald-200"
            />
          </div>

          {/* JUMPED TEXT HERO HEADING */}
          <div className="mb-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white tracking-tight leading-[1.08]">
              <JumpText
                text="Building the Future of"
                mode="words"
                delay={0.1}
                stagger={0.06}
                className="text-white block mb-1"
              />
              <span className="relative inline-block">
                <JumpText
                  text="Sports Infrastructure."
                  mode="words"
                  delay={0.35}
                  stagger={0.07}
                  highlightWords={["Sports", "Infrastructure."]}
                  highlightClassName="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 drop-shadow-[0_4px_25px_rgba(16,229,153,0.45)]"
                />
              </span>
            </h1>
          </div>

          {/* Subtitle with Jumped Words */}
          <div className="mb-8 max-w-2xl text-base sm:text-lg lg:text-xl text-neutral-200 font-normal leading-relaxed">
            <JumpText
              text="We design, build and maintain world-class sports facilities that bring performance, durability and innovation together."
              mode="words"
              delay={0.5}
              stagger={0.03}
              highlightWords={["performance,", "durability", "innovation"]}
              highlightClassName="text-emerald-300 font-semibold"
            />
          </div>

          {/* Action Buttons with Spring Hover */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, type: "spring", stiffness: 300, damping: 20 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8"
          >
            {/* Btn 1: Get a Free Quote (WhatsApp link) */}
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="relative px-7 py-4 rounded-xl text-sm font-extrabold text-black bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 hover:from-emerald-300 hover:to-amber-200 transition-all duration-300 shadow-xl shadow-emerald-500/30 flex items-center justify-center gap-2.5 group overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/25 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
              <MessageSquare className="w-5 h-5 text-emerald-950 shrink-0" />
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4 text-emerald-950 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            {/* Btn 2: Explore our work */}
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-7 py-4 rounded-xl text-sm font-bold text-white bg-emerald-950/80 hover:bg-emerald-900/90 border border-emerald-500/50 hover:border-emerald-400 transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2 group shadow-lg shadow-emerald-950/60"
            >
              <span>Explore Our Work</span>
              <span className="text-emerald-400 group-hover:translate-x-1 transition-transform">→</span>
            </motion.a>

            {/* Quick Estimator CTA */}
            <motion.a
              href="#estimator"
              whileHover={{ scale: 1.05 }}
              className="px-4 py-4 rounded-xl text-xs font-semibold text-emerald-300 hover:text-amber-300 flex items-center justify-center gap-2 transition-colors"
            >
              <Zap className="w-4 h-4 text-amber-400 animate-bounce" />
              <span>Turf Cost Calculator</span>
            </motion.a>
          </motion.div>

          {/* Sunset & Quality Assurance Highlights */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-neutral-300 pt-3 border-t border-emerald-800/40"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-white font-medium">French Drainage Tech</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="text-white font-medium">UV-Stabilized Monofilament</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-300 shrink-0" />
              <span className="text-white font-medium">300+ Lux Stadium Lighting</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Metrics Banner Section with Jump Entry */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 w-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.15 * idx,
                  type: "spring",
                  stiffness: 350,
                  damping: 18,
                }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="relative rounded-2xl p-4 sm:p-5 overflow-hidden group bg-[#061c13]/85 backdrop-blur-md border border-emerald-700/40 hover:border-emerald-400/80 shadow-xl shadow-emerald-950/60 transition-all"
              >
                {/* Glow accent */}
                <div className={`absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br ${stat.glow} opacity-15 group-hover:opacity-30 blur-2xl transition-opacity rounded-full`} />
                
                <div className="flex items-center justify-between mb-2">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-200 to-amber-200 font-mono tracking-tight">
                    {stat.value}
                  </div>
                  <div className="p-2 rounded-lg bg-emerald-950/80 text-emerald-400 group-hover:bg-emerald-400 group-hover:text-black transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="text-xs sm:text-sm font-bold text-white mb-0.5">
                  {stat.label}
                </div>
                <div className="text-[11px] text-neutral-300 leading-snug">
                  {stat.sublabel}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Infinite Marquee Ticker */}
      <div className="relative z-10 mt-8 border-y border-emerald-700/50 bg-gradient-to-r from-emerald-950/80 via-[#072418]/90 to-emerald-950/80 backdrop-blur-md py-3 overflow-hidden select-none">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8 text-xs sm:text-sm font-extrabold tracking-widest text-emerald-300 uppercase">
          {[1, 2, 3, 4].map((i) => (
            <React.Fragment key={i}>
              <span className="flex items-center gap-2.5 text-amber-300">
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                QUALITY PRODUCTS
              </span>
              <span className="text-emerald-500">•</span>
              <span className="flex items-center gap-2.5 text-emerald-200">
                <Zap className="w-3.5 h-3.5 text-emerald-400" />
                ON-TIME DELIVERY
              </span>
              <span className="text-emerald-500">•</span>
              <span className="flex items-center gap-2.5 text-teal-300">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                CUSTOMER SATISFACTION
              </span>
              <span className="text-emerald-500">•</span>
              <span className="flex items-center gap-2.5 text-white">
                <Trophy className="w-3.5 h-3.5 text-amber-300" />
                FIFA & FIBA CERTIFIED TURF
              </span>
              <span className="text-emerald-500">•</span>
              <span className="flex items-center gap-2.5 text-emerald-300">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                PAN-INDIA SPORTS INFRASTRUCTURE
              </span>
              <span className="text-emerald-500">•</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
