"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  CORE_SERVICES, 
  ServiceItem 
} from "@/data/sportsData";
import { 
  Sparkles, 
  ArrowUpRight, 
  Check, 
  Ruler, 
  Target, 
  Info, 
  X, 
  MessageSquare,
  ShieldAlert,
  ChevronRight
} from "lucide-react";
import JumpText, { JumpBadge } from "@/components/JumpText";

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const categories = [
    { id: "all", label: "All Sports (7)" },
    { id: "turf", label: "Turf Sports" },
    { id: "court", label: "Courts & Hard Surface" },
    { id: "racquet", label: "Racquet & Paddle" },
  ];

  const filteredServices = CORE_SERVICES.filter((service) => {
    if (selectedCategory === "all") return true;
    if (selectedCategory === "turf") return service.id === "football" || service.id === "cricket";
    if (selectedCategory === "court") return service.id === "basketball" || service.id === "volleyball" || service.id === "tennis";
    if (selectedCategory === "racquet") return service.id === "pickleball" || service.id === "badminton" || service.id === "tennis";
    return true;
  });

  const getWhatsappQuoteUrl = (serviceTitle: string) => {
    const text = encodeURIComponent(
      `Hi SPORTICON Infra, I would like to get specifications and pricing for: ${serviceTitle}.`
    );
    return `https://wa.me/919400088990?text=${text}`;
  };

  return (
    <section id="services" className="relative py-20 lg:py-28 bg-[#06110c] overflow-hidden">
      {/* Background Lighting Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald-700/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="mb-3">
            <JumpBadge icon={Sparkles} text="OUR CORE SERVICES" />
          </div>
          <p className="text-xs sm:text-sm font-bold tracking-widest text-emerald-400 uppercase mb-2">
            COMPLETE SPORTS INFRASTRUCTURE
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            <JumpText text="One Partner." className="mr-2" />
            <JumpText 
              text="Complete Sports Solutions."
              highlightWords={["Complete", "Sports", "Solutions."]}
              highlightClassName="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300"
            />
          </h2>
          <p className="text-sm sm:text-base text-neutral-300">
            From a single court to a complete multi-sport facility, SPORTICON delivers integrated sports infrastructure solutions tailored to your requirements.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-emerald-400 text-black shadow-lg shadow-emerald-400/20 scale-105"
                    : "bg-emerald-950/60 text-neutral-300 border border-emerald-800/40 hover:bg-emerald-900/50 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Animated Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service, idx) => (
            <div
              key={service.id}
              className="group relative rounded-2xl bg-[#091a13] border border-emerald-800/30 hover:border-emerald-500/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-900/30 flex flex-col overflow-hidden"
            >
              {/* Card Image Container with Hover Zoom */}
              <div className="relative h-52 w-full overflow-hidden bg-emerald-950">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 brightness-95 group-hover:brightness-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091a13] via-transparent to-black/30" />

                {/* Number Watermark Badge */}
                <div className="absolute top-3 left-3 bg-[#06110c]/80 backdrop-blur-md border border-emerald-600/40 text-emerald-300 font-mono text-xs font-bold px-2.5 py-1 rounded-md">
                  {service.number}
                </div>

                {/* Status Badge */}
                <div className="absolute top-3 right-3 bg-emerald-500/90 text-black text-[11px] font-extrabold px-2.5 py-1 rounded-full shadow-md">
                  {service.badge}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  {/* Bullet Specs */}
                  <div className="space-y-1.5 mb-6">
                    {service.specs.slice(0, 3).map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-[12px] text-neutral-400">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-emerald-900/50 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setActiveModalService(service)}
                    className="text-xs font-semibold text-emerald-300 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <span>View Specifications</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={getWhatsappQuoteUrl(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-emerald-950 hover:bg-emerald-400 text-emerald-400 hover:text-black border border-emerald-700/50 hover:border-emerald-400 transition-all"
                    title={`Get Quote for ${service.title}`}
                    aria-label={`Get Quote for ${service.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Brochure Reference Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-950/70 via-[#0a2319] to-emerald-950/70 border border-emerald-700/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base sm:text-lg font-bold text-white">
              Looking for a custom multi-sport combination court?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300">
              We engineer hybrid spaces pairing Football + Box Cricket, or Basketball + Pickleball within a single enclosed perimeter.
            </p>
          </div>
          <a
            href="#estimator"
            className="px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-black bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/20 shrink-0 flex items-center gap-2"
          >
            <span>Try Court Size Estimator</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Service Detailed Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl rounded-2xl bg-[#091a13] border-2 border-emerald-500/60 p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-emerald-950 text-neutral-300 hover:text-white hover:bg-emerald-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="flex items-center gap-2 mb-2 text-xs font-mono text-emerald-400 font-bold">
              <span>{activeModalService.number}</span>
              <span>•</span>
              <span>{activeModalService.badge}</span>
            </div>

            <h3 className="text-2xl font-extrabold text-white mb-3">
              {activeModalService.title}
            </h3>

            <p className="text-sm text-neutral-300 leading-relaxed mb-6">
              {activeModalService.fullDesc}
            </p>

            {/* Specifications Box */}
            <div className="space-y-4 mb-6">
              <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-800/40">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-300 mb-2">
                  <Ruler className="w-4 h-4 text-emerald-400" />
                  <span>Standard Dimensions & Footprint</span>
                </div>
                <div className="text-sm text-white font-medium">
                  {activeModalService.dimensions}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-800/40">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-300 mb-2">
                  <Target className="w-4 h-4 text-emerald-400" />
                  <span>Ideal For</span>
                </div>
                <div className="text-sm text-white font-medium">
                  {activeModalService.idealFor}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                  Technical Specifications & Inclusions
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeModalService.specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-2 p-2.5 rounded-lg bg-[#06110c] border border-emerald-900/50 text-xs text-neutral-200">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-emerald-900/60 flex flex-col sm:flex-row gap-3">
              <a
                href={getWhatsappQuoteUrl(activeModalService.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl text-center text-xs sm:text-sm font-bold text-black bg-emerald-400 hover:bg-emerald-300 transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Get Detailed Quote on WhatsApp</span>
              </a>

              <button
                onClick={() => setActiveModalService(null)}
                className="py-3 px-5 rounded-xl text-xs sm:text-sm font-semibold text-neutral-300 bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-800/60"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

