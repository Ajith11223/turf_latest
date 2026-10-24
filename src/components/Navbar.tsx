"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  MessageSquare, 
  ChevronRight, 
  ArrowRight
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (pathname !== "/") return;

      const sections = ["home", "about", "services", "infrastructure", "process", "why-us", "projects", "faqs", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/", id: "home" },
    { name: "About", href: "/about", id: "about" },
    { name: "Service", href: "/services", id: "services" },
    { name: "Contact", href: "/contact", id: "contact" },
    { name: "Projects", href: "/projects", id: "projects" },
  ];

  const whatsappMessage = encodeURIComponent(
    "Hi SPORTICON Infra, I would like to get a free quote for sports court / turf construction."
  );
  const whatsappUrl = `https://wa.me/919400088990?text=${whatsappMessage}`;

  return (
    <>
      {/* Floating translucent navigation */}
      <header
        className="sticky top-0 z-50 -mb-[84px] px-3 pt-3 transition-all duration-300 sm:px-6 sm:pt-5"
      >
        <div className={`max-w-7xl mx-auto min-h-[72px] px-4 sm:px-6 flex items-center justify-between gap-4 rounded-[1.4rem] border border-white/40 backdrop-blur-xl transition-all duration-300 ${scrolled ? "bg-white/55 shadow-[0_12px_36px_rgba(15,23,42,0.16)]" : "bg-white/30 shadow-[0_8px_28px_rgba(15,23,42,0.11)]"}`}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-14 w-28 overflow-hidden rounded-xl border border-white/70 bg-white/90 shadow-sm backdrop-blur-sm sm:w-32">
              <Image
                src="/images/sporticon-logo.png"
                alt="SPORTICON Infra Private Limited"
                fill
                priority
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === "/"
                ? activeSection === link.id
                : pathname === link.href || (link.id === "projects" && pathname.startsWith("/projects/"));
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  aria-current={isActive ? "location" : undefined}
                  className={`group/nav relative px-3.5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-200 ${
                    isActive
                      ? "text-emerald-900 bg-white shadow-[0_4px_14px_rgba(5,150,105,0.14)] ring-1 ring-emerald-100"
                      : "text-slate-700 hover:text-emerald-800 hover:bg-white/75"
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-emerald-500 transition-all duration-200 ${isActive ? "opacity-100" : "opacity-0 group-hover/nav:opacity-70"}`} />
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden px-5 py-3 text-sm font-bold rounded-xl text-white bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-500 hover:from-emerald-600 hover:via-emerald-500 hover:to-teal-400 shadow-[0_8px_20px_rgba(5,150,105,0.28)] hover:shadow-[0_10px_26px_rgba(5,150,105,0.38)] hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1.5 text-xs font-bold rounded-md text-white bg-emerald-600 hover:bg-emerald-500 flex items-center gap-1"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Quote</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              className="p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-3 top-[88px] z-40 rounded-2xl border border-white/70 bg-white/90 backdrop-blur-xl p-4 shadow-2xl animate-fadeIn">
          <div className="space-y-1.5">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-lg text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 border border-transparent hover:border-emerald-200 text-sm font-bold transition-all"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-emerald-600" />
              </Link>
            ))}
          </div>

          <div className="pt-4 mt-3 border-t border-slate-200">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 text-center text-sm font-bold rounded-lg text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Get Free Quote on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
