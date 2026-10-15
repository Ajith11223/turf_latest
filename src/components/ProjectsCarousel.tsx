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
  ExternalLink,
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

  // Autoplay effect
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
    <section id="projects" className="relative py-20 lg:py-28 bg-[#06110c] overflow-hidden">
      {/* Background Lighting Accents */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[400px] bg-emerald-600/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="mb-3">
            <JumpBadge icon={Sparkles} text="MAJOR PROJECTS PORTFOLIO" />
          </div>
          <p className="text-xs sm:text-sm font-bold tracking-widest text-emerald-400 uppercase mb-2">
            OUR WORK
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            <JumpText text="Projects That Bring" className="mr-2" />
            <JumpText 
              text="Sport to Life."
              highlightWords={["Sport", "Life."]}
              highlightClassName="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300"
            />
          </h2>
          <p className="text-sm sm:text-base text-neutral-300">
            From educational institutions to sports academies and dedicated playing facilities, our project portfolio reflects our work across different sports infrastructure requirements.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => {
                  setActiveFilter(filter.id);
                  setCurrentIndex(0);
                }}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeFilter === filter.id
                    ? "bg-emerald-400 text-black shadow-lg shadow-emerald-400/20"
                    : "bg-emerald-950/60 text-neutral-300 border border-emerald-800/40 hover:text-white"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Animated Carousel Display */}
        {filteredProjects.length > 0 && currentProject && (
          <div className="relative rounded-3xl bg-[#091a13] border border-emerald-800/40 overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
              {/* Carousel Image Side */}
              <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto min-h-[300px] overflow-hidden bg-black">
                <Image
                  src={currentProject.image}
                  alt={currentProject.title}
                  fill
                  priority
                  className="object-cover transition-all duration-700 brightness-95 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091a13] via-transparent to-black/30 lg:hidden" />

                {/* Quick inspect button */}
                <button
                  onClick={() => setSelectedProject(currentProject)}
                  className="absolute bottom-4 right-4 p-2.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/20 text-white hover:bg-emerald-400 hover:text-black transition-all flex items-center gap-1.5 text-xs font-semibold"
                  aria-label="Inspect project details"
                >
                  <Maximize2 className="w-4 h-4" />
                  <span>Inspect Details</span>
                </button>

                {/* Handover Badge */}
                <div className="absolute top-4 left-4 bg-emerald-500 text-black text-xs font-extrabold px-3 py-1 rounded-full shadow-lg">
                  Page 12 Official Showcase
                </div>
              </div>

              {/* Carousel Details Side */}
              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950 px-2.5 py-1 rounded-md border border-emerald-800/50">
                      Project 0{currentIndex + 1} / 0{filteredProjects.length}
                    </span>
                    <span className="text-xs text-neutral-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{currentProject.year}</span>
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                    {currentProject.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs sm:text-sm text-emerald-400 mb-4 font-semibold">
                    <MapPin className="w-4 h-4 shrink-0" />
                    <span>{currentProject.location}</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-emerald-950/50 border border-emerald-800/40 mb-5">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-300 mb-1">
                      Facility Scope:
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-white">
                      {currentProject.category}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                    {currentProject.highlight}
                  </p>

                  <div className="flex items-center gap-2 text-xs text-neutral-400 mb-6">
                    <Layers className="w-4 h-4 text-emerald-400" />
                    <span>Total Area Developed: <strong className="text-white">{currentProject.area}</strong></span>
                  </div>
                </div>

                {/* Carousel Controls & WhatsApp Button */}
                <div className="pt-6 border-t border-emerald-900/50 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={prevSlide}
                        className="p-2.5 rounded-xl bg-emerald-950 hover:bg-emerald-400 text-emerald-400 hover:text-black border border-emerald-700/50 transition-colors"
                        aria-label="Previous project"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={nextSlide}
                        className="p-2.5 rounded-xl bg-emerald-950 hover:bg-emerald-400 text-emerald-400 hover:text-black border border-emerald-700/50 transition-colors"
                        aria-label="Next project"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                        className="p-2.5 rounded-xl bg-emerald-950/60 hover:bg-emerald-900 text-neutral-400 hover:text-white border border-emerald-800/40 transition-colors"
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
                              ? "w-6 bg-emerald-400"
                              : "w-2 bg-emerald-900/70 hover:bg-emerald-600"
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
                    className="w-full py-3 rounded-xl text-center text-xs sm:text-sm font-bold text-black bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Inquire About Similar Facility</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Thumbnail Quick Picker Strip */}
        <div className="mt-8 grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2">
          {filteredProjects.map((proj, idx) => (
            <button
              key={proj.id}
              onClick={() => setCurrentIndex(idx)}
              className={`p-2 rounded-xl text-left border transition-all cursor-pointer ${
                currentIndex === idx
                  ? "bg-emerald-950 border-emerald-400 shadow-md shadow-emerald-500/20"
                  : "bg-[#091a13]/70 border-emerald-900/40 hover:border-emerald-700/60 opacity-60 hover:opacity-100"
              }`}
            >
              <div className="text-[10px] font-mono text-emerald-400 font-bold truncate">
                0{idx + 1}
              </div>
              <div className="text-[11px] font-bold text-white truncate">
                {proj.title}
              </div>
              <div className="text-[9px] text-neutral-400 truncate">
                {proj.location.split(",")[0]}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl rounded-2xl bg-[#091a13] border-2 border-emerald-500/60 p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-emerald-950 text-neutral-300 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-64 w-full rounded-xl overflow-hidden mb-6">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold mb-1">
              <MapPin className="w-4 h-4" />
              <span>{selectedProject.location}</span>
            </div>

            <h3 className="text-2xl font-extrabold text-white mb-2">
              {selectedProject.title}
            </h3>

            <p className="text-sm font-semibold text-emerald-300 mb-4">
              {selectedProject.category}
            </p>

            <p className="text-sm text-neutral-300 leading-relaxed mb-6">
              {selectedProject.highlight}
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6 p-4 rounded-xl bg-emerald-950/50 border border-emerald-800/40 text-xs">
              <div>
                <span className="text-neutral-400 block">Developed Footprint:</span>
                <span className="text-white font-bold text-sm">{selectedProject.area}</span>
              </div>
              <div>
                <span className="text-neutral-400 block">Execution Status:</span>
                <span className="text-emerald-400 font-bold text-sm">Successfully Handed Over</span>
              </div>
            </div>

            <a
              href={whatsappInquiryUrl(selectedProject.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl text-center text-sm font-bold text-black bg-emerald-400 hover:bg-emerald-300 transition-colors flex items-center justify-center gap-2"
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

