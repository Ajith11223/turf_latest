"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Phone, 
  Mail, 
  ChevronDown
} from "lucide-react";

function ResponsiveFooterDetails({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const syncDefault = () => setIsOpen(desktopQuery.matches);

    syncDefault();
    desktopQuery.addEventListener("change", syncDefault);
    return () => desktopQuery.removeEventListener("change", syncDefault);
  }, []);

  return (
    <details
      className="group"
      open={isOpen}
      onToggle={(event) => {
        const nextOpen = event.currentTarget.open;
        if (nextOpen !== isOpen) setIsOpen(nextOpen);
      }}
    >
      <summary className="mb-4 flex cursor-pointer list-none items-center justify-between gap-3 text-xs font-bold uppercase tracking-wider text-slate-900 [&::-webkit-details-marker]:hidden">
        {title}
        <ChevronDown className="h-4 w-4 shrink-0 transition-transform group-open:rotate-180" />
      </summary>
      {children}
    </details>
  );
}

export default function Footer() {
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
      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="relative h-14 w-28 overflow-hidden rounded-xl">
              <Image
                src="/images/sporticon-logo.png"
                alt="SPORTICON Infra Private Limited"
                fill
                className="rounded-xl object-cover"
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
          <ResponsiveFooterDetails title="Core Sports Services">
            <ul className="space-y-2.5 text-xs text-slate-600">
              {services.map((item, i) => (
                <li key={i} className="rounded-lg border border-emerald-800 bg-gradient-to-r from-emerald-800 via-green-800 to-teal-800 shadow-sm shadow-emerald-950/20 transition-all hover:border-emerald-950 hover:from-emerald-900 hover:via-green-900 hover:to-teal-900 px-3 py-2">
                  <a href="/services#services" className="block font-semibold text-white hover:text-white/80 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </ResponsiveFooterDetails>

          {/* Extended Infrastructure */}
          <ResponsiveFooterDetails title="Extended Solutions">
            <ul className="space-y-2.5 text-xs text-slate-600">
              {extended.map((item, i) => (
                <li key={i} className="rounded-lg border border-emerald-800 bg-gradient-to-r from-emerald-800 via-green-800 to-teal-800 shadow-sm shadow-emerald-950/20 transition-all hover:border-emerald-950 hover:from-emerald-900 hover:via-green-900 hover:to-teal-900 px-3 py-2">
                  <a href="/services#infrastructure" className="block font-semibold text-white hover:text-white/80 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </ResponsiveFooterDetails>

          {/* Quick Contact & Presence */}
          <ResponsiveFooterDetails title="Pan-India Presence">
            <div className="space-y-3 text-xs text-slate-600">
              <div className="flex items-center gap-2 rounded-lg border border-emerald-800 bg-gradient-to-r from-emerald-800 via-green-800 to-teal-800 shadow-sm shadow-emerald-950/20 transition-all hover:border-emerald-950 hover:from-emerald-900 hover:via-green-900 hover:to-teal-900 px-3 py-2">
                <Phone className="w-4 h-4 text-white shrink-0" />
                <span>+91 94000 88990</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-emerald-800 bg-gradient-to-r from-emerald-800 via-green-800 to-teal-800 shadow-sm shadow-emerald-950/20 transition-all hover:border-emerald-950 hover:from-emerald-900 hover:via-green-900 hover:to-teal-900 px-3 py-2">
                <Mail className="w-4 h-4 text-white shrink-0" />
                <span>info@sporticon.in</span>
              </div>
              <div className="rounded-lg border border-emerald-800 bg-gradient-to-r from-emerald-800 via-green-800 to-teal-800 shadow-sm shadow-emerald-950/20 transition-all hover:border-emerald-950 hover:from-emerald-900 hover:via-green-900 hover:to-teal-900 p-3">
                <div className="text-xs text-white uppercase font-extrabold tracking-wide mb-1">Key Footprint:</div>
                <div className="flex flex-wrap gap-1.5">
                  {majorLocations.map((loc, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded bg-white/80 border border-emerald-300 text-[10px] text-emerald-900">
                      {loc}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ResponsiveFooterDetails>
        </div>

        {/* Bottom Legal Copyright */}
        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 SPORTICON Infra Private Limited. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4 text-slate-600">
            <Link href="/about" className="hover:text-emerald-300">About</Link>
            <Link href="/services" className="hover:text-emerald-300">Services</Link>
            <Link href="/#faqs" className="hover:text-emerald-300">FAQs</Link>
            <Link href="/contact" className="hover:text-emerald-300">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
