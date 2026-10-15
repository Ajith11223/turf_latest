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
  X, 
  MessageSquare, 
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
    <section id="services" className="relative py-20 lg:py-28 bg-[#f8fafc] overflow-hidden">
      {/* Light background subtle aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald-100/50 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="mb-3">
            <JumpBadge icon={Sparkles} text="OUR CORE SERVICES" className="bg-emerald-50 text-emerald-800 border-emerald-200" />
          </div>
          <p className="text-xs sm:text-sm font-bold tracking-widest text-emerald-700 uppercase mb-2">
            COMPLETE SPORTS INFRASTRUCTURE
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            <JumpText text="One Partner." className="mr-2 text-slate-950" />
            <JumpText 
              text="Complete Sports Solutions."
              highlightWords={["Complete", "Sports", "Solutions."]}
              highlightClassName="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600"
            />
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            From a single court to a complete multi-sport facility, SPORTICON delivers integrated sports infrastructure solutions tailored to your requirements.
          </p>

          {/* Category Filter Pills (Light Theme) */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/30 scale-105"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Animated Cards Grid (Crisp White Cards on Light Background) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-500 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl flex flex-col overflow-hidden"
            >
              {/* Card Image Container with Hover Zoom */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Number Watermark Badge */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md border border-slate-200 text-slate-800 font-mono text-xs font-bold px-2.5 py-1 rounded-md shadow-xs">
                  {service.number}
                </div>

                {/* Status Badge */}
                <div className="absolute top-3 right-3 bg-emerald-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-md">
                  {service.badge}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  {/* Bullet Specs */}
                  <div className="space-y-1.5 mb-6">
                    {service.specs.slice(0, 3).map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-[12px] text-slate-600">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setActiveModalService(service)}
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>View Specifications</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={getWhatsappQuoteUrl(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white border border-emerald-200 hover:border-emerald-600 transition-all cursor-pointer"
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

        {/* Brochure Reference Banner (Light Theme) */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 border border-emerald-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base sm:text-lg font-bold text-slate-900">
              Looking for a custom multi-sport combination court?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              We engineer hybrid spaces pairing Football + Box Cricket, or Basketball + Pickleball within a single enclosed perimeter.
            </p>
          </div>
          <a
            href="#estimator"
            className="px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-md shadow-emerald-600/20 shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <span>Try Court Size Estimator</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Service Detailed Modal (Light Theme) */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl rounded-2xl bg-white border-2 border-emerald-400 p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="flex items-center gap-2 mb-2 text-xs font-mono text-emerald-700 font-bold">
              <span>{activeModalService.number}</span>
              <span>•</span>
              <span>{activeModalService.badge}</span>
            </div>

            <h3 className="text-2xl font-black text-slate-950 mb-3">
              {activeModalService.title}
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {activeModalService.fullDesc}
            </p>

            {/* Specifications Box */}
            <div className="space-y-4 mb-6">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 mb-1.5">
                  <Ruler className="w-4 h-4 text-emerald-600" />
                  <span>Standard Dimensions & Footprint</span>
                </div>
                <div className="text-sm text-slate-800 font-semibold">
                  {activeModalService.dimensions}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 mb-1.5">
                  <Target className="w-4 h-4 text-emerald-600" />
                  <span>Ideal For</span>
                </div>
                <div className="text-sm text-slate-800 font-semibold">
                  {activeModalService.idealFor}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
                  Technical Specifications & Inclusions
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeModalService.specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 font-medium">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row gap-3">
              <a
                href={getWhatsappQuoteUrl(activeModalService.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl text-center text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Get Detailed Quote on WhatsApp</span>
              </a>

              <button
                onClick={() => setActiveModalService(null)}
                className="py-3 px-5 rounded-xl text-xs sm:text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 cursor-pointer"
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
