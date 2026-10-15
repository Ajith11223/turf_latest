"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Menu, 
  X, 
  Phone, 
  MessageSquare, 
  ChevronRight, 
  Sparkles,
  ArrowRight
} from "lucide-react";

interface NavProps {
  activeSection?: string;
}

export default function Navbar({ activeSection = "home" }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Infrastructure", href: "#infrastructure", id: "infrastructure" },
    { name: "Process", href: "#process", id: "process" },
    { name: "Why SPORTICON", href: "#why-us", id: "why-us" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Estimator", href: "#estimator", id: "estimator" },
    { name: "FAQs", href: "#faqs", id: "faqs" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const whatsappMessage = encodeURIComponent(
    "Hi SPORTICON Infra, I would like to get a free quote for sports court / turf construction."
  );
  const whatsappUrl = `https://wa.me/919400088990?text=${whatsappMessage}`;

  return (
    <>
      {/* Top Banner Bar */}
      <div className="bg-emerald-950/80 border-b border-emerald-800/40 text-emerald-200 text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              Pan-India Sports Infrastructure Builders
            </span>
            <span className="text-emerald-400/60">•</span>
            <span>250+ Successful Handover Projects</span>
            <span className="text-emerald-400/60">•</span>
            <span>FIFA & FIBA Standard Compliance</span>
          </div>
          <div className="flex items-center space-x-4">
            <a 
              href="tel:+919400088990" 
              className="flex items-center gap-1.5 text-emerald-300 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>+91 94000 88990</span>
            </a>
            <span className="text-emerald-400/60">|</span>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp Us 24/7</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#06110c]/90 backdrop-blur-md border-b border-emerald-900/40 shadow-xl py-3"
            : "bg-[#06110c]/60 backdrop-blur-sm border-b border-white/5 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-3 group">
            <div className="relative h-11 w-36 sm:w-44 flex items-center">
              <Image
                src="/images/sporticon-logo.png"
                alt="SPORTICON Infra Private Limited"
                fill
                priority
                className="object-contain filter drop-shadow brightness-110"
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 relative ${
                    isActive
                      ? "text-emerald-300 bg-emerald-950/80 border border-emerald-500/30 shadow-sm shadow-emerald-900/50"
                      : "text-neutral-300 hover:text-emerald-300 hover:bg-emerald-950/40"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="#estimator"
              className="px-3.5 py-2 text-xs font-semibold rounded-lg text-emerald-300 bg-emerald-950/70 border border-emerald-700/50 hover:bg-emerald-900/60 transition-all flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Cost Estimator</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden px-4 py-2 text-xs font-bold rounded-lg text-black bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 bg-[length:200%_auto] hover:bg-right transition-all duration-500 shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/40 flex items-center gap-1.5"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center space-x-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1.5 text-xs font-bold rounded-md text-black bg-emerald-400 hover:bg-emerald-300 flex items-center gap-1"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Quote</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-emerald-950/80 border border-emerald-800/60 text-emerald-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 z-40 bg-black/80 backdrop-blur-md pt-20 px-6 pb-8 flex flex-col justify-between animate-fadeIn">
          <div className="space-y-2 max-h-[70vh] overflow-y-auto">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-lg text-neutral-200 hover:text-emerald-300 hover:bg-emerald-950/60 border border-transparent hover:border-emerald-800/40 text-sm font-medium transition-all"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-emerald-500" />
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-emerald-900/60 space-y-3">
            <a
              href="#estimator"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 text-center text-xs font-semibold rounded-lg text-emerald-300 bg-emerald-950/80 border border-emerald-700/60 block"
            >
              Interactive Turf Cost Estimator
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 text-center text-sm font-bold rounded-lg text-black bg-emerald-400 hover:bg-emerald-300 shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2"
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

