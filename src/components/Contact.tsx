"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { 
  Sparkles, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare, 
  CheckCircle2, 
  ShieldCheck,
  Building2,
  Globe
} from "lucide-react";
import JumpText, { JumpBadge } from "@/components/JumpText";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    sportType: "Football Turf",
    landSize: "",
    projectStage: "Planning & Feasibility",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#10e599", "#00a685", "#34d399", "#ffffff"]
      });
    } catch {
      // Fallback gracefully
    }

    setSubmitted(true);
  };

  const sendDirectWhatsapp = () => {
    const text = encodeURIComponent(
      `*New Project Inquiry for SPORTICON Infra:*` +
      `\n• Name: ${formData.name || "Client"}` +
      `\n• Phone: ${formData.phone || "Not specified"}` +
      `\n• Location: ${formData.location || "Pan-India"}` +
      `\n• Sport: ${formData.sportType}` +
      `\n• Land Size: ${formData.landSize || "TBD"}` +
      `\n• Stage: ${formData.projectStage}` +
      `\n• Notes: ${formData.notes || "None"}`
    );
    window.open(`https://wa.me/919400088990?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 bg-[#f8fafc] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute inset-0 turf-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-emerald-600/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="mb-3">
            <JumpBadge icon={Sparkles} text="START YOUR PROJECT" />
          </div>
          <p className="text-xs sm:text-sm font-bold tracking-widest text-emerald-400 uppercase mb-2">
            CONTACT SPORTICON
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            <JumpText text="Get a Free Technical Consultation &" className="mr-2" />
            <JumpText 
              text="Quotation."
              highlightWords={["Quotation."]}
              highlightClassName="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300"
            />
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Share your plot dimensions or project ideas. Our sports infrastructure engineers will analyze your site and prepare a customized plan.
          </p>
        </div>

        {/* Contact Layout: Info Column + Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Info Card Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  SPORTICON Infra Private Limited
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Headquartered in India with mobile civil and sports engineering teams executing projects across schools, stadiums, clubs, and commercial hubs nationwide.
                </p>
              </div>

              {/* Contact list */}
              <div className="space-y-4 pt-2">
                <a 
                  href="tel:+919400088990" 
                  className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-emerald-400 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500">Direct Phone Helpline:</div>
                    <div className="text-sm font-bold text-slate-900">+91 94000 88990 / +91 98460 12345</div>
                  </div>
                </a>

                <a 
                  href="https://wa.me/919400088990" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-emerald-400 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500">WhatsApp Instant Support:</div>
                    <div className="text-sm font-bold text-emerald-300">+91 94000 88990 (Available 24/7)</div>
                  </div>
                </a>

                <a 
                  href="mailto:info@sporticon.in" 
                  className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-emerald-400 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500">Official Email:</div>
                    <div className="text-sm font-bold text-slate-900">info@sporticon.in / projects@sporticon.in</div>
                  </div>
                </a>

                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700 shrink-0">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500">Website & Reach:</div>
                    <div className="text-sm font-bold text-slate-900">www.sporticon.in • Pan-India Coverage</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500">Emergency Maintenance Support:</div>
                    <div className="text-sm font-bold text-emerald-400">24/7 On-Call Technical Assistance</div>
                  </div>
                </div>
              </div>

              {/* Quality Seal */}
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-emerald-400 shrink-0" />
                <div className="text-xs text-slate-700">
                  <strong className="text-slate-900">Direct Engineering Support:</strong> Your project will be reviewed by qualified civil engineers and sports surface specialists.
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry Form Column */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-2xl relative">
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-400 text-black flex items-center justify-center mx-auto shadow-xl shadow-emerald-400/40">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Thank You for Reaching Out!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    We have received your project details for <strong className="text-emerald-400">{formData.sportType}</strong> in <strong className="text-emerald-400">{formData.location || "India"}</strong>. A SPORTICON project specialist will review your specifications and contact you shortly.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                    <button
                      onClick={sendDirectWhatsapp}
                      className="px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-black bg-emerald-400 hover:bg-emerald-300 flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Speed Up: Connect on WhatsApp Now</span>
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300"
                    >
                      Submit Another Query
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 mb-1.5 block">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 focus:border-emerald-500 focus:outline-none text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-700 mb-1.5 block">
                        Phone Number (WhatsApp) *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 focus:border-emerald-500 focus:outline-none text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 mb-1.5 block">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="yourname@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 focus:border-emerald-500 focus:outline-none text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-700 mb-1.5 block">
                        Project Location / City *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Kochi, Bengaluru, Coimbatore"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 focus:border-emerald-500 focus:outline-none text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 mb-1.5 block">
                        Sport Facility Required *
                      </label>
                      <select
                        value={formData.sportType}
                        onChange={(e) => setFormData({ ...formData, sportType: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 focus:border-emerald-500 focus:outline-none text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm"
                      >
                        <option value="Football Turf">Artificial Football Turf (5/7/11-a-side)</option>
                        <option value="Box Cricket">Box Cricket Arena</option>
                        <option value="Basketball Court">Basketball Court</option>
                        <option value="Pickleball Court">Pickleball Court</option>
                        <option value="Volleyball Court">Volleyball Court</option>
                        <option value="Badminton Court">Badminton Court</option>
                        <option value="Tennis Court">Tennis Court</option>
                        <option value="Multi-Sport Combo">Multi-Sport Hybrid Facility</option>
                        <option value="Ground Renovation">Ground Renovation & Maintenance</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 mb-1.5 block">
                        Approximate Land Size / Dimensions
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 10,000 sq ft or 100 x 60 ft"
                        value={formData.landSize}
                        onChange={(e) => setFormData({ ...formData, landSize: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 focus:border-emerald-500 focus:outline-none text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 mb-1.5 block">
                      Project Stage
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {["Planning / Budgeting", "Land Ready", "Urgent Execution"].map((stage) => (
                        <button
                          type="button"
                          key={stage}
                          onClick={() => setFormData({ ...formData, projectStage: stage })}
                          className={`py-2 px-2 rounded-lg text-xs font-semibold border transition-all text-center ${
                            formData.projectStage === stage
                              ? "bg-emerald-50 border-emerald-500 text-emerald-800"
                              : "bg-white border-slate-200 text-slate-600 hover:text-slate-900"
                          }`}
                        >
                          {stage}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 mb-1.5 block">
                      Additional Requirements / Notes
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about special requirements (floodlights, fencing height, spectator stands, civil gradient, etc.)..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 focus:border-emerald-500 focus:outline-none text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm resize-none"
                    />
                  </div>

                  {/* Submission Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 py-3.5 px-6 rounded-xl text-xs sm:text-sm font-bold text-black bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 transition-all shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Project Inquiry</span>
                    </button>

                    <button
                      type="button"
                      onClick={sendDirectWhatsapp}
                      className="py-3.5 px-6 rounded-xl text-xs sm:text-sm font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 flex items-center justify-center gap-2 transition-colors cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4 text-emerald-400" />
                      <span>Send to WhatsApp</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-500 text-center pt-2">
                    🔒 We respect your privacy. Your information is solely used for project feasibility and engineering estimation.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

