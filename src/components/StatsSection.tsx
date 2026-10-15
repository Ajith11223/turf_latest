"use client";

import { motion, useInView } from "framer-motion";
import { Clock, Layers, MapPin, Trophy } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 250,
    suffix: "+",
    label: "Projects Handed Over",
    sublabel: "Schools, Academies & Commercial Hubs",
    icon: Trophy,
    glow: "from-amber-400 to-emerald-400",
  },
  {
    value: 500,
    suffix: "+",
    label: "Locations We Have Built In",
    sublabel: "Across Major Cities & States in India",
    icon: MapPin,
    glow: "from-emerald-400 to-teal-400",
  },
  {
    value: 10,
    suffix: "+",
    label: "Years of Experience",
    sublabel: "Specialized Sports Infrastructure Engineering",
    icon: Layers,
    glow: "from-teal-400 to-emerald-500",
  },
  {
    value: 24,
    suffix: " hr",
    label: "Maintenance Support",
    sublabel: "Dedicated Ground Care & Emergency Response",
    icon: Clock,
    glow: "from-amber-400 to-emerald-500",
  },
];

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.7 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 1400;
    const startTime = performance.now();
    let frameId = 0;

    const updateCount = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const easedProgress = 1 - (1 - progress) ** 3;
      setCount(Math.round(value * easedProgress));

      if (progress < 1) frameId = requestAnimationFrame(updateCount);
    };

    frameId = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function StatsSection() {
  return (
    <section aria-label="SPORTICON at a glance" className="relative z-10 bg-[#f8fafc] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx, type: "spring", stiffness: 300, damping: 22 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/90 bg-white/80 p-4 shadow-sm backdrop-blur-md transition-shadow hover:shadow-xl sm:p-5"
            >
              <div className={`absolute -right-10 -top-10 h-24 w-24 rounded-full bg-gradient-to-br ${stat.glow} opacity-10 blur-2xl transition-opacity group-hover:opacity-20`} />
              <div className="relative mb-2 flex items-center justify-between gap-2">
                <span className="font-mono text-2xl font-black tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="rounded-lg border border-emerald-100 bg-emerald-50 p-2 text-emerald-700 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </span>
              </div>
              <div className="relative mb-0.5 text-xs font-bold text-slate-900 sm:text-sm">{stat.label}</div>
              <div className="relative text-[11px] leading-snug text-slate-500">{stat.sublabel}</div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
