"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface JumpTextProps {
  children?: React.ReactNode;
  text?: string;
  className?: string;
  delay?: number;
  stagger?: number;
  mode?: "words" | "chars";
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  highlightWords?: string[];
  highlightClassName?: string;
  once?: boolean;
}

export default function JumpText({
  children,
  text,
  className = "",
  delay = 0.05,
  stagger = 0.04,
  mode = "words",
  as: Component = "span",
  highlightWords = [],
  highlightClassName = "text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300",
  once = false,
}: JumpTextProps) {
  // If text is provided, animate words/chars
  const content = text || (typeof children === "string" ? children : "");

  if (!content) {
    return <span className={className}>{children}</span>;
  }

  const items = mode === "words" ? content.split(" ") : content.split("");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 35,
      scale: 0.85,
      rotateX: -30,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 420,
        damping: 18,
        mass: 0.8,
      },
    },
  };

  return (
    <motion.span
      initial={false}
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      variants={containerVariants}
      className={`inline-flex flex-wrap items-baseline gap-x-[0.28em] ${className}`}
    >
      {items.map((item, idx) => {
        const cleanWord = item.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        const isHighlighted = highlightWords.some(
          (hw) => hw.toLowerCase() === cleanWord
        );

        return (
          <motion.span
            key={idx}
            variants={itemVariants}
            whileHover={{
              y: -8,
              scale: 1.08,
              transition: { type: "spring", stiffness: 500, damping: 10 },
            }}
            className={`inline-block origin-bottom transform-gpu cursor-default select-none ${
              isHighlighted ? highlightClassName : ""
            }`}
          >
            {item}
            {mode === "chars" && item === " " && "\u00A0"}
          </motion.span>
        );
      })}
    </motion.span>
  );
}

/**
 * Animated Section Badge with athletic jump-in effect
 */
export function JumpBadge({
  icon: Icon,
  text,
  className = "",
}: {
  icon?: React.ElementType;
  text: string;
  className?: string;
}) {
  return (
    <motion.div
      initial={false}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 15,
      }}
      whileHover={{ scale: 1.05, y: -2 }}
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-semibold shadow-lg shadow-emerald-950/50 ${className}`}
    >
      {Icon && <Icon className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />}
      <span>{text}</span>
    </motion.div>
  );
}

