"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  ArrowUp, 
  ShieldCheck, 
  Award,
  Globe
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const services = [
    "Artificial Football Turf",
    "Box Cricket Arenas",
    "Basketball Courts",
    "Pickleball Courts",
    "Volleyball Courts",
    "Badminton Courts",
    "Tennis Courts",
  ];

  const extended = [
    "Multi-Sport Courts",
    "Athletic & Jogging Tracks",
    "Children's Play Areas",
    "Sports Lighting & Fencing",
    "Ground Maintenance & Rejuvenation",
  ];

  const majorLocations = [
    "Trivandrum",
    "Kannur",
    "Malappuram",
    "Coimbatore",
    "Ponani",
    "Nagaland",
    "Pan-India",
  ];

  return (
    <footer className="relative bg-[#f8fafc] border-t border-slate-200 text-slate-700 text-xs sm:text-sm overflow-hidden">
      {/* Top Footer Callout */}
      <div className="border-b border-slate-200 py-8 px-4 sm:px-6 lg:px-8 bg-white/70">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Award className="w-8 h-8 text-emerald-400 shrink-0" />
            <div>
              <div className="text-slate-900 font-bold text-sm sm:text-base">
                Engineering World-Class Sports Facilities Across India
              </div>
              <div className="text-slate-600 text-xs">
                FIFA Quality Synthetic Turf • FIBA Certified Flooring • 10+ Years Experience
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/919400088990?text=Hi%20SPORTICON,%20I%20would%20like%20to%20discuss%20a%20sports%20court%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-black bg-emerald-400 hover:bg-emerald-300 transition-colors flex items-center gap-2 shadow-lg shadow-emerald-500/20"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us Now</span>
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-white hover:bg-emerald-700 transition-colors"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="relative h-12 w-48">
              <Image
                src="/images/sporticon-logo.png"
                alt="SPORTICON Infra Private Limited"
                fill
                className="object-contain filter drop-shadow brightness-110"
              />
            </div>
            <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
              SPORTICON Infra Private Limited is a premier sports infrastructure development company creating high-quality sporting facilities combining performance, durability, player safety and innovation across India.
            </p>
            <div className="pt-2 text-xs text-emerald-400 font-semibold space-y-1">
              <div>• 250+ Projects Handed Over</div>
              <div>• 500+ Locations Built In</div>
              <div>• 10+ Years of Engineering Track Record</div>
            </div>
          </div>

          {/* Core Services Col */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Core Sports Services
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              {services.map((item, i) => (
                <li key={i}>
                  <a href="#services" className="hover:text-emerald-700 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Extended Infrastructure */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Extended Solutions
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              {extended.map((item, i) => (
                <li key={i}>
                  <a href="#infrastructure" className="hover:text-emerald-700 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a href="#estimator" className="text-emerald-400 font-bold hover:underline">
                  → Turf Cost Estimator
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Contact & Presence */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Pan-India Presence
            </h4>
            <div className="space-y-3 text-xs text-slate-600">
              <div className="flex items-center gap-2 text-slate-900 font-medium">
                <Globe className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>www.sporticon.in</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>+91 94000 88990</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>info@sporticon.in</span>
              </div>
              <div className="pt-2">
                <div className="text-[11px] text-slate-500 uppercase font-bold mb-1">Key Footprint:</div>
                <div className="flex flex-wrap gap-1.5">
                  {majorLocations.map((loc, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200 text-[10px] text-emerald-800">
                      {loc}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Copyright */}
        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 SPORTICON Infra Private Limited. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4 text-slate-600">
            <a href="#about" className="hover:text-emerald-300">About</a>
            <a href="#services" className="hover:text-emerald-300">Services</a>
            <a href="#faqs" className="hover:text-emerald-300">FAQs</a>
            <a href="#contact" className="hover:text-emerald-300">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
