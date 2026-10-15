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
    <footer className="relative bg-[#040e09] border-t border-emerald-900/40 text-neutral-300 text-xs sm:text-sm overflow-hidden">
      {/* Top Footer Callout */}
      <div className="border-b border-emerald-900/30 py-8 px-4 sm:px-6 lg:px-8 bg-emerald-950/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Award className="w-8 h-8 text-emerald-400 shrink-0" />
            <div>
              <div className="text-white font-bold text-sm sm:text-base">
                Engineering World-Class Sports Facilities Across India
              </div>
              <div className="text-neutral-400 text-xs">
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
              className="p-2.5 rounded-xl bg-emerald-950 border border-emerald-800/50 text-emerald-300 hover:text-white hover:bg-emerald-900 transition-colors"
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
            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
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
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Core Sports Services
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              {services.map((item, i) => (
                <li key={i}>
                  <a href="#services" className="hover:text-emerald-300 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Extended Infrastructure */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Extended Solutions
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              {extended.map((item, i) => (
                <li key={i}>
                  <a href="#infrastructure" className="hover:text-emerald-300 transition-colors">
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
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Pan-India Presence
            </h4>
            <div className="space-y-3 text-xs text-neutral-400">
              <div className="flex items-center gap-2 text-white font-medium">
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
                <div className="text-[11px] text-neutral-500 uppercase font-bold mb-1">Key Footprint:</div>
                <div className="flex flex-wrap gap-1.5">
                  {majorLocations.map((loc, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-900/60 text-[10px] text-emerald-300">
                      {loc}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Copyright */}
        <div className="mt-12 pt-6 border-t border-emerald-900/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © 2026 SPORTICON Infra Private Limited. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4 text-neutral-400">
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
