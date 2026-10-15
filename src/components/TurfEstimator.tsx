"use client";

import React, { useState } from "react";
import { 
  Calculator, 
  Sparkles, 
  Clock, 
  Ruler, 
  ShieldCheck, 
  Zap, 
  Layers, 
  ArrowRight,
  MessageSquare,
  CheckCircle2
} from "lucide-react";
import JumpText, { JumpBadge } from "@/components/JumpText";

interface SportOption {
  id: string;
  name: string;
  lengthFt: number;
  widthFt: number;
  areaSqFt: number;
  ratePerSqFt: number;
  typicalDurationDays: number;
  recommendedTurf: string;
}

const SPORT_PRESETS: SportOption[] = [
  {
    id: "football-5",
    name: "Football Turf (5-a-side)",
    lengthFt: 95,
    widthFt: 65,
    areaSqFt: 6175,
    ratePerSqFt: 220,
    typicalDurationDays: 30,
    recommendedTurf: "50mm Monofilament + Silica Sand & Rubber Infill"
  },
  {
    id: "football-7",
    name: "Football Turf (7-a-side)",
    lengthFt: 135,
    widthFt: 90,
    areaSqFt: 12150,
    ratePerSqFt: 215,
    typicalDurationDays: 45,
    recommendedTurf: "50mm Monofilament + Silica Sand & Rubber Infill"
  },
  {
    id: "cricket-box",
    name: "Box Cricket Arena",
    lengthFt: 100,
    widthFt: 50,
    areaSqFt: 5000,
    ratePerSqFt: 230,
    typicalDurationDays: 25,
    recommendedTurf: "12mm–15mm Curly Dense Turf + 30ft Full Box Netting"
  },
  {
    id: "pickleball",
    name: "Pickleball Court (Standard)",
    lengthFt: 60,
    widthFt: 30,
    areaSqFt: 1800,
    ratePerSqFt: 260,
    typicalDurationDays: 20,
    recommendedTurf: "8-Layer Cushioned Acrylic Sports Flooring"
  },
  {
    id: "basketball",
    name: "Basketball Court (FIBA)",
    lengthFt: 94,
    widthFt: 50,
    areaSqFt: 4700,
    ratePerSqFt: 250,
    typicalDurationDays: 28,
    recommendedTurf: "Modular PP Interlocking Tiles or Cushioned Acrylic"
  },
  {
    id: "badminton",
    name: "Badminton Court",
    lengthFt: 54,
    widthFt: 26,
    areaSqFt: 1404,
    ratePerSqFt: 270,
    typicalDurationDays: 18,
    recommendedTurf: "4.5mm BWF Approved Synthetic Vinyl Mat"
  }
];

export default function TurfEstimator() {
  const [selectedSport, setSelectedSport] = useState<string>("football-5");
  const [includeLighting, setIncludeLighting] = useState<boolean>(true);
  const [includeFencing, setIncludeFencing] = useState<boolean>(true);
  const [includeDrainage, setIncludeDrainage] = useState<boolean>(true);
  const [includeShockpad, setIncludeShockpad] = useState<boolean>(false);

  const currentPreset = SPORT_PRESETS.find((p) => p.id === selectedSport) || SPORT_PRESETS[0];

  // Calculate base cost
  const baseCourtCost = currentPreset.areaSqFt * currentPreset.ratePerSqFt;
  const lightingCost = includeLighting ? 180000 : 0;
  const fencingCost = includeFencing ? Math.round(currentPreset.areaSqFt * 38) : 0;
  const drainageCost = includeDrainage ? Math.round(currentPreset.areaSqFt * 28) : 0;
  const shockpadCost = includeShockpad ? Math.round(currentPreset.areaSqFt * 55) : 0;

  const totalMin = Math.round((baseCourtCost + lightingCost + fencingCost + drainageCost + shockpadCost) * 0.95);
  const totalMax = Math.round((baseCourtCost + lightingCost + fencingCost + drainageCost + shockpadCost) * 1.08);

  const formatLakhs = (val: number) => {
    return (val / 100000).toFixed(2);
  };

  const whatsappMessage = encodeURIComponent(
    `Hi SPORTICON Infra, I calculated an estimate for ${currentPreset.name}:` +
    `\n• Area: ${currentPreset.areaSqFt.toLocaleString()} sq ft (${currentPreset.lengthFt} x ${currentPreset.widthFt} ft)` +
    `\n• Estimated Duration: ~${currentPreset.typicalDurationDays} days` +
    `\n• Lighting: ${includeLighting ? "Yes" : "No"}` +
    `\n• Fencing & Netting: ${includeFencing ? "Yes" : "No"}` +
    `\n• Drainage: ${includeDrainage ? "Yes" : "No"}` +
    `\n• Shockpad: ${includeShockpad ? "Yes" : "No"}` +
    `\nPlease share the official itemized project proposal.`
  );
  const whatsappUrl = `https://wa.me/919400088990?text=${whatsappMessage}`;

  return (
    <section id="estimator" className="relative py-20 lg:py-28 bg-[#f8fafc] overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 turf-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-emerald-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="mb-3">
            <JumpBadge icon={Calculator} text="INTERACTIVE ESTIMATION TOOL" />
          </div>
          <p className="text-xs sm:text-sm font-bold tracking-widest text-emerald-400 uppercase mb-2">
            PLANNING YOUR SPORTS COURT
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            <JumpText text="Turf Size & Investment" className="mr-2" />
            <JumpText 
              text="Estimator."
              highlightWords={["Estimator."]}
              highlightClassName="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600"
            />
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Select your preferred sport, dimensions, and infrastructure accessories to view realistic land requirements, timelines, and ballpark budgets.
          </p>
        </div>

        {/* Estimator Card Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
              {/* Step 1: Sport Selection */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-3 block">
                  1. Select Sport Facility Format
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {SPORT_PRESETS.map((preset) => (
                    <button
                      key={preset.id}
                      onClick={() => setSelectedSport(preset.id)}
                      className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                        selectedSport === preset.id
                          ? "bg-emerald-50 border-emerald-500 shadow-sm shadow-emerald-500/15"
                          : "bg-white border-slate-200 hover:border-emerald-400"
                      }`}
                    >
                      <div className="text-xs font-bold text-slate-900 mb-1">
                        {preset.name}
                      </div>
                      <div className="text-[11px] text-slate-500 flex items-center justify-between">
                        <span>{preset.lengthFt} × {preset.widthFt} ft</span>
                        <span className="text-emerald-700 font-medium">~{preset.areaSqFt.toLocaleString()} sq ft</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Infrastructure Inclusions */}
              <div className="pt-4 border-t border-slate-200">
                <label className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-3 block">
                  2. Infrastructure Inclusions & Options
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer hover:border-emerald-400 transition-colors">
                    <input
                      type="checkbox"
                      checked={includeLighting}
                      onChange={(e) => setIncludeLighting(e.target.checked)}
                      className="w-4 h-4 rounded text-emerald-500 focus:ring-emerald-400 accent-emerald-500"
                    />
                    <div className="text-xs">
                      <div className="font-bold text-slate-900">LED Stadium Lighting</div>
                      <div className="text-[11px] text-slate-500">High-mast floodlight array</div>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer hover:border-emerald-400 transition-colors">
                    <input
                      type="checkbox"
                      checked={includeFencing}
                      onChange={(e) => setIncludeFencing(e.target.checked)}
                      className="w-4 h-4 rounded text-emerald-500 focus:ring-emerald-400 accent-emerald-500"
                    />
                    <div className="text-xs">
                      <div className="font-bold text-slate-900">Perimeter Fencing & Nets</div>
                      <div className="text-[11px] text-slate-500">20ft–30ft UV HDPE netting</div>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer hover:border-emerald-400 transition-colors">
                    <input
                      type="checkbox"
                      checked={includeDrainage}
                      onChange={(e) => setIncludeDrainage(e.target.checked)}
                      className="w-4 h-4 rounded text-emerald-500 focus:ring-emerald-400 accent-emerald-500"
                    />
                    <div className="text-xs">
                      <div className="font-bold text-slate-900">Engineered Sub-Base Drainage</div>
                      <div className="text-[11px] text-slate-500">Zero monsoon waterlogging</div>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer hover:border-emerald-400 transition-colors">
                    <input
                      type="checkbox"
                      checked={includeShockpad}
                      onChange={(e) => setIncludeShockpad(e.target.checked)}
                      className="w-4 h-4 rounded text-emerald-500 focus:ring-emerald-400 accent-emerald-500"
                    />
                    <div className="text-xs">
                      <div className="font-bold text-slate-900">Shock Pad Cushion Layer</div>
                      <div className="text-[11px] text-slate-500">Anti-injury player protection</div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Results Summary Column */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-emerald-200 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-400/10 blur-2xl rounded-full" />

              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                  Calculated Estimate
                </span>
                <span className="text-[11px] text-emerald-700">
                  Ready for Site Assessment
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">
                {currentPreset.name}
              </h3>

              {/* Area & Dimensions */}
              <div className="grid grid-cols-2 gap-3 my-5 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div>
                  <div className="text-[11px] text-slate-500 mb-0.5">Playable Footprint:</div>
                  <div className="text-sm font-bold text-slate-900">
                    {currentPreset.lengthFt} ft × {currentPreset.widthFt} ft
                  </div>
                </div>
                <div>
                  <div className="text-[11px] text-slate-500 mb-0.5">Total Area:</div>
                  <div className="text-sm font-bold text-emerald-700">
                    {currentPreset.areaSqFt.toLocaleString()} Sq. Ft.
                  </div>
                </div>
              </div>

              {/* Timeline & Surface */}
              <div className="space-y-3 mb-6 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Estimated Completion: <strong className="text-slate-900">~{currentPreset.typicalDurationDays} Working Days</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Recommended Surface: <strong className="text-slate-900">{currentPreset.recommendedTurf}</strong></span>
                </div>
              </div>

              {/* Ballpark Investment Range */}
              <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 mb-6 text-center">
                <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 mb-1">
                  Ballpark Turnkey Investment
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-teal-600 to-amber-600">
                  ₹{formatLakhs(totalMin)} – ₹{formatLakhs(totalMax)} Lakhs*
                </div>
                <div className="text-[10px] text-slate-500 mt-1">
                  *Indicative cost subject to land grading, location, and soil testing.
                </div>
              </div>

              {/* WhatsApp Export CTA */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl text-center text-xs sm:text-sm font-bold text-black bg-emerald-400 hover:bg-emerald-300 transition-all shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-2 group"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send Estimate to WhatsApp for Detailed Proposal</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

