"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import JumpText, { JumpBadge } from "@/components/JumpText";
import { 
  ArrowRight, 
  MessageSquare, 
  ShieldCheck, 
  Trophy, 
  Sparkles, 
  MapPin, 
  CheckCircle2,
  Zap,
  Sun
} from "lucide-react";

export default function Hero() {
  const whatsappMessage = encodeURIComponent(
    "Hi SPORTICON Infra, I saw your sports facility portfolio. I would like a free quotation for a new turf / court project."
  );
  const whatsappUrl = `https://wa.me/919400088990?text=${whatsappMessage}`;

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 select-none bg-[#f8fafc]"
    >
      {/* Hero image, rendered without color overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/images/hero.jpeg"
          alt=""
          fill
          priority
          aria-hidden="true"
          className="object-cover object-center"
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 w-full">
        <div className="mx-auto max-w-2xl sm:mx-0">
          {/* Top Pill Badge */}
          <div className="mb-4 flex justify-center sm:mb-7 sm:justify-start">
            <JumpBadge
              icon={Sparkles}
              text="Pan-India Sports Infrastructure"
              className="border-white/30 bg-emerald-950/50 text-white shadow-sm backdrop-blur-sm"
            />
          </div>

          {/* White heading with a turf and sunset accent */}
          <div className="mb-5 sm:mb-8">
            <h1 className="text-center text-2xl sm:text-left sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.08] drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)]">
              <JumpText
                text="Building the Future of"
                mode="words"
                delay={0.1}
                stagger={0.06}
                className="w-full justify-center text-white mb-1 sm:justify-start"
              />
              <JumpText
                text="Sports Infrastructure."
                mode="words"
                delay={0.35}
                stagger={0.07}
                className="w-full justify-center sm:justify-start"
                highlightWords={["Sports", "Infrastructure."]}
                highlightClassName="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-lime-200 to-amber-200 drop-shadow-sm"
              />
            </h1>
          </div>

          {/* Subtitle with warm accent highlights */}
          <div className="mb-6 mx-auto max-w-xl text-center text-sm sm:mb-10 sm:mx-0 sm:text-left sm:text-base lg:text-lg text-white font-semibold leading-relaxed drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
            <span className="sm:hidden">We build high-quality sports facilities.</span>
            <span className="hidden sm:inline">
              <JumpText
                text="We design, build and maintain world-class sports facilities that bring performance, durability and innovation together."
                mode="words"
                delay={0.5}
                stagger={0.03}
                highlightWords={["performance,", "durability", "innovation"]}
                highlightClassName="text-amber-200 font-bold"
              />
            </span>
          </div>

          {/* Assurance Highlights */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            className="hidden grid-cols-2 sm:grid sm:grid-cols-3 gap-x-6 gap-y-4 text-center text-xs text-white font-medium pt-5 border-t border-white/60 drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]"
          >
            <div className="flex items-center justify-center gap-2 sm:justify-start">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>French Drainage Tech</span>
            </div>
            <div className="flex items-center justify-center gap-2 sm:justify-start">
              <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
              <span>UV Monofilament Turf</span>
            </div>
            <div className="col-span-2 flex items-center justify-center gap-2 sm:col-span-1 sm:justify-start">
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
              <span>300+ Lux Stadium Lights</span>
            </div>
          </motion.div>

          {/* Actions stay at the bottom of the hero content on every screen size. */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, type: "spring", stiffness: 300, damping: 20 }}
            className="mt-10 flex flex-col items-center gap-3 sm:mt-12 sm:flex-row sm:items-center sm:gap-4"
          >
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="relative w-full max-w-xs px-7 py-3 sm:py-4 rounded-xl text-sm font-extrabold text-white bg-emerald-600 hover:bg-emerald-500 transition-all duration-300 shadow-xl shadow-emerald-600/30 flex items-center justify-center gap-2.5 group overflow-hidden sm:w-auto"
            >
              <MessageSquare className="w-5 h-5 text-white shrink-0" />
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full max-w-xs px-7 py-3 sm:py-4 rounded-xl text-sm font-bold text-slate-800 bg-white/95 hover:bg-slate-50 border-2 border-slate-300 hover:border-emerald-500 transition-all duration-300 flex items-center justify-center gap-2 group shadow-sm sm:w-auto"
            >
              <span>Explore Our Work</span>
              <span className="text-emerald-600 group-hover:translate-x-1 transition-transform">→</span>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Infinite Marquee Ticker (Light Theme) */}
      <div className="relative z-10 mt-8 hidden border-y border-emerald-100 bg-white/90 backdrop-blur-md py-3 overflow-hidden select-none shadow-xs sm:block">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8 text-xs sm:text-sm font-extrabold tracking-widest text-emerald-800 uppercase">
          {[1, 2, 3, 4].map((i) => (
            <React.Fragment key={i}>
              <span className="flex items-center gap-2.5 text-amber-700">
                <Sun className="w-3.5 h-3.5 text-amber-500" />
                QUALITY PRODUCTS
              </span>
              <span className="text-emerald-300">•</span>
              <span className="flex items-center gap-2.5 text-emerald-700">
                <Zap className="w-3.5 h-3.5 text-emerald-600" />
                ON-TIME DELIVERY
              </span>
              <span className="text-emerald-300">•</span>
              <span className="flex items-center gap-2.5 text-teal-700">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                CUSTOMER SATISFACTION
              </span>
              <span className="text-emerald-300">•</span>
              <span className="flex items-center gap-2.5 text-slate-800">
                <Trophy className="w-3.5 h-3.5 text-amber-500" />
                FIFA CERTIFIED TURF
              </span>
              <span className="text-emerald-300">•</span>
              <span className="flex items-center gap-2.5 text-emerald-700">
                <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                PAN-INDIA SPORTS INFRASTRUCTURE
              </span>
              <span className="text-emerald-300">•</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
