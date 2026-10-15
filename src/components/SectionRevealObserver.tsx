"use client";

import { useEffect } from "react";

export default function SectionRevealObserver() {
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("main > section, footer");

    if (!("IntersectionObserver" in window)) {
      sections.forEach((section) => section.classList.add("section-reveal-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("section-reveal-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    sections.forEach((section) => {
      section.classList.add("section-reveal");
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
