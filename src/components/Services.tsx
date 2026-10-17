"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
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
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import JumpText, { JumpBadge } from "@/components/JumpText";

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

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

  const moveCarousel = useCallback((direction: 1 | -1) => {
    const carousel = carouselRef.current;
    const firstCard = carousel?.firstElementChild as HTMLElement | null;
    if (!carousel || !firstCard) return;

    const styles = window.getComputedStyle(carousel);
    const gap = Number.parseFloat(styles.columnGap || styles.gap) || 0;
    const distance = firstCard.getBoundingClientRect().width + gap;
    const maxScroll = Math.max(0, carousel.scrollWidth - carousel.clientWidth);
    if (maxScroll <= 4) return;

    if (direction > 0 && carousel.scrollLeft >= maxScroll - 4) {
      carousel.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }

    if (direction < 0 && carousel.scrollLeft <= 4) {
      carousel.scrollTo({ left: maxScroll, behavior: "smooth" });
      return;
    }

    const nextPosition = Math.min(maxScroll, Math.max(0, carousel.scrollLeft + distance * direction));
    carousel.scrollTo({ left: nextPosition, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    carousel.scrollTo({ left: 0, behavior: "smooth" });
  }, [selectedCategory]);

  useEffect(() => {
    if (isCarouselPaused || activeModalService) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const intervalId = window.setInterval(() => moveCarousel(1), 3000);
    return () => window.clearInterval(intervalId);
  }, [activeModalService, isCarouselPaused, moveCarousel]);

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

        {/* Animated horizontal service cards */}
        <div className="mb-4 flex justify-end gap-2">
          <button
            type="button"
            onClick={() => moveCarousel(-1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white transition hover:border-emerald-300 hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
            aria-label="Previous services"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => moveCarousel(1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white transition hover:border-emerald-300 hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
            aria-label="Next services"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div
          ref={carouselRef}
          className="-mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
          role="region"
          aria-label="Core services carousel"
          aria-roledescription="carousel"
          onMouseEnter={() => setIsCarouselPaused(true)}
          onMouseLeave={() => setIsCarouselPaused(false)}
          onFocusCapture={() => setIsCarouselPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
              setIsCarouselPaused(false);
            }
          }}
          onTouchStart={() => setIsCarouselPaused(true)}
          onTouchEnd={() => setIsCarouselPaused(false)}
        >
          {filteredServices.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, x: 44, scale: 0.96 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ type: "spring", stiffness: 120, damping: 18, delay: index * 0.06 }}
              whileHover={{ y: -8, scale: 1.015 }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex w-[88%] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white transition-colors duration-300 hover:border-emerald-500 hover:shadow-2xl sm:w-[calc(50%_-_0.75rem)] lg:w-[calc(33.333%_-_1rem)]"
              aria-roledescription="slide"
              aria-label={`${service.number} of ${filteredServices.length}: ${service.title}`}
            >
              {/* Card Image Container with Hover Zoom */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                <motion.div
                  className="absolute inset-0"
                  initial={{ scale: 1.12, opacity: 0.65, filter: "blur(8px)" }}
                  whileInView={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                  initial={{ x: "-160%" }}
                  whileInView={{ x: "520%" }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 1.2, delay: 0.2, ease: "easeInOut" }}
                />

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
            </motion.article>
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
