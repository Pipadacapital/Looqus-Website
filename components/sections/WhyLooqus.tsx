"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { fadeUp, slideInLeft, slideInRight, staggerContainer, viewportOptions } from "@/lib/animations";

const FEATURES = [
  { title: "Creative-led performance", desc: "Great creative is the biggest lever in paid media. We lead with bold ideas, backed by data." },
  { title: "Platform-native expertise", desc: "Deep specialization across Meta, Google, Shopify, and emerging channels." },
  { title: "Transparent reporting", desc: "No black boxes. You see exactly where your budget goes and what it generates." },
  { title: "Dedicated account team", desc: "A real team that knows your brand, your goals, and your customers intimately." },
];

export default function WhyLooqus() {
  return (
    <section className="relative bg-white py-24 md:py-32 overflow-hidden">
      {/* Large decorative number */}
      <span
        className="absolute right-8 top-1/2 -translate-y-1/2 font-syne font-bold text-[200px] md:text-[280px] text-rule/40 leading-none select-none pointer-events-none"
        aria-hidden="true"
      >
        01
      </span>

      <div className="relative z-10 max-w-content mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text block */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <motion.div variants={fadeUp} className="mb-4">
              <SectionLabel>Why Looqus</SectionLabel>
            </motion.div>
            <motion.h2
              variants={slideInLeft}
              className="font-syne font-bold text-ink text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight mb-8"
            >
              Built for Brands That Refuse to Be{" "}
              <span className="text-ember">Average.</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="font-dm-sans font-light text-slate-custom text-lg leading-relaxed"
            >
              We partner with ambitious brands who want more than just ad management.
              We bring strategy, creativity, and relentless optimization to every
              engagement — because your brand deserves more than a set-it-and-forget-it agency.
            </motion.p>
          </motion.div>

          {/* Right: feature list */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="flex flex-col gap-6"
          >
            {FEATURES.map((feature, i) => (
              <motion.div
                key={i}
                variants={slideInRight}
                className="flex gap-4 p-6 rounded-2xl bg-surface border border-rule group hover:border-ember transition-colors duration-300"
              >
                <div className="w-8 h-8 rounded-full bg-ember-light flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-ember transition-colors duration-300">
                  <Check size={14} className="text-ember group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-syne font-bold text-ink text-base mb-1.5 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="font-dm-sans text-slate-custom text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
