"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { 
  MAJOR_PROJECTS, 
  ProjectItem 
} from "@/data/sportsData";
import { 
  Sparkles, 
  MapPin, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  X, 
  Layers, 
  Calendar, 
  Play, 
  Pause,
  MessageSquare
} from "lucide-react";
import JumpText, { JumpBadge } from "@/components/JumpText";

export default function ProjectsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filters = [
    { id: "all", label: "All Projects (9)" },
    { id: "football", label: "Football Turfs" },
    { id: "academy", label: "Academies & Colleges" },
    { id: "stadium", label: "Stadiums & Arenas" },
  ];

  const filteredProjects = MAJOR_PROJECTS.filter((proj) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "football") return proj.category.toLowerCase().includes("football");
    if (activeFilter === "academy") return proj.category.toLowerCase().includes("college") || proj.category.toLowerCase().includes("school") || proj.category.toLowerCase().includes("academy");
    if (activeFilter === "stadium") return proj.category.toLowerCase().includes("stadium") || proj.category.toLowerCase().includes("arena") || proj.category.toLowerCase().includes("police");
    return true;
  });

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, filteredProjects.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredProjects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const currentProject = filteredProjects[currentIndex] || filteredProjects[0];

  const whatsappInquiryUrl = (projectTitle: string) => {
    const text = encodeURIComponent(
      `Hi SPORTICON Infra, I saw your project "${projectTitle}". I would like a similar sports court construction.`
    );
    return `https://wa.me/919400088990?text=${text}`;
  };

  return (
    <section id="projects" className="relative py-20 lg:py-28 bg-[#f8fafc] overflow-hidden">
      {/* Light subtle glow */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[400px] bg-emerald-100/40 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="mb-3">
            <JumpBadge icon={Sparkles} text="MAJOR PROJECTS PORTFOLIO" className="bg-emerald-50 text-emerald-800 border-emerald-200" />
          </div>
          <p className="text-xs sm:text-sm font-bold tracking-widest text-emerald-700 uppercase mb-2">
            OUR WORK
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            <JumpText
              text="Projects That Bring Sport to Life."
              className="w-full justify-center"
              highlightWords={["Sport", "Life."]}
              highlightClassName="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600"
            />
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            From educational institutions to sports academies and dedicated playing facilities, our project portfolio reflects our work across different sports infrastructure requirements.
          </p>

          {/* Filter Pills (Light Theme) */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => {
                  setActiveFilter(filter.id);
                  setCurrentIndex(0);
                }}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeFilter === filter.id
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/30"
                    : "bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Animated Carousel Display (Light Card) */}
        {filteredProjects.length > 0 && currentProject && (
          <div className="relative rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
              {/* Carousel Image Side */}
              <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto min-h-[300px] overflow-hidden bg-slate-100">
                <Image
                  src={currentProject.image}
                  alt={currentProject.title}
                  fill
                  priority
                  quality={95}
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover transition-all duration-700 brightness-100 hover:scale-105"
                />

                {/* Quick inspect button */}
                <button
                  onClick={() => setSelectedProject(currentProject)}
                  className="absolute bottom-4 right-4 p-2.5 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200 text-slate-800 hover:bg-emerald-600 hover:text-white transition-all flex items-center gap-1.5 text-xs font-bold shadow-md cursor-pointer"
                  aria-label="Inspect project details"
                >
                  <Maximize2 className="w-4 h-4" />
                  <span>Inspect Details</span>
                </button>

                {/* Handover Badge */}
                <div className="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-black px-3 py-1 rounded-full shadow-md">
                  Page 12 Official Showcase
                </div>
              </div>

              {/* Carousel Details Side */}
              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-white">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                      Project 0{currentIndex + 1} / 0{filteredProjects.length}
                    </span>
                    <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{currentProject.year}</span>
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">
                    {currentProject.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs sm:text-sm text-emerald-700 mb-4 font-bold">
                    <MapPin className="w-4 h-4 shrink-0" />
                    <span>{currentProject.location}</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 mb-5">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 mb-1">
                      Facility Scope:
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-slate-800">
                      {currentProject.category}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {currentProject.highlight}
                  </p>

                  <div className="flex items-center gap-2 text-xs text-slate-600 mb-6 font-medium">
                    <Layers className="w-4 h-4 text-emerald-600" />
                    <span>Total Area Developed: <strong className="text-slate-900">{currentProject.area}</strong></span>
                  </div>
                </div>

                {/* Carousel Controls & WhatsApp Button */}
                <div className="pt-6 border-t border-slate-100 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={prevSlide}
                        className="p-2.5 rounded-xl bg-slate-100 hover:bg-emerald-600 text-slate-700 hover:text-white border border-slate-200 transition-colors cursor-pointer"
                        aria-label="Previous project"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={nextSlide}
                        className="p-2.5 rounded-xl bg-slate-100 hover:bg-emerald-600 text-slate-700 hover:text-white border border-slate-200 transition-colors cursor-pointer"
                        aria-label="Next project"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                        className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 border border-slate-200 transition-colors cursor-pointer"
                        title={isAutoPlaying ? "Pause Autoplay" : "Resume Autoplay"}
                        aria-label="Toggle autoplay"
                      >
                        {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      </button>
                    </div>

                    {/* Progress Dots */}
                    <div className="flex items-center gap-1.5">
                      {filteredProjects.map((_, dotIdx) => (
                        <button
                          key={dotIdx}
                          onClick={() => setCurrentIndex(dotIdx)}
                          className={`h-2 rounded-full transition-all cursor-pointer ${
                            currentIndex === dotIdx
                              ? "w-6 bg-emerald-600"
                              : "w-2 bg-slate-300 hover:bg-slate-400"
                          }`}
                          aria-label={`Jump to slide ${dotIdx + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                  <a
                    href={whatsappInquiryUrl(currentProject.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl text-center text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-md shadow-emerald-600/25 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Inquire About Similar Facility</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Thumbnail Quick Picker Strip (Light Theme) */}
        <div className="mt-8 grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2">
          {filteredProjects.map((proj, idx) => (
            <button
              key={proj.id}
              onClick={() => setCurrentIndex(idx)}
              className={`p-2 rounded-xl text-left border transition-all cursor-pointer ${
                currentIndex === idx
                  ? "bg-emerald-50 border-emerald-500 shadow-sm"
                  : "bg-white border-slate-200 hover:border-slate-300 opacity-80 hover:opacity-100"
              }`}
            >
              <div className="text-[10px] font-mono text-emerald-700 font-bold truncate">
                0{idx + 1}
              </div>
              <div className="text-[11px] font-bold text-slate-800 truncate">
                {proj.title}
              </div>
              <div className="text-[9px] text-slate-500 truncate">
                {proj.location.split(",")[0]}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Project Detail Modal (Light Theme) */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl rounded-2xl bg-white border-2 border-emerald-400 p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-600 hover:text-slate-900 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-64 w-full rounded-xl overflow-hidden mb-6 bg-slate-100">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                quality={95}
                sizes="(max-width: 768px) calc(100vw - 32px), 672px"
                className="object-cover"
              />
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 font-bold mb-1">
              <MapPin className="w-4 h-4" />
              <span>{selectedProject.location}</span>
            </div>

            <h3 className="text-2xl font-black text-slate-950 mb-2">
              {selectedProject.title}
            </h3>

            <p className="text-sm font-bold text-emerald-700 mb-4">
              {selectedProject.category}
            </p>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {selectedProject.highlight}
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
              <div>
                <span className="text-slate-500 block">Developed Footprint:</span>
                <span className="text-slate-900 font-bold text-sm">{selectedProject.area}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Execution Status:</span>
                <span className="text-emerald-700 font-bold text-sm">Successfully Handed Over</span>
              </div>
            </div>

            <a
              href={whatsappInquiryUrl(selectedProject.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl text-center text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Connect with Our Project Engineer</span>
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
