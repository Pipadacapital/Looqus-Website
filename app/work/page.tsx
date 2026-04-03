"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import CTABanner from "@/components/sections/CTABanner";
import { CASE_STUDIES, STATS } from "@/lib/constants";
import { fadeUp, staggerContainer, viewportOptions } from "@/lib/animations";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    const isDecimal = value % 1 !== 0;
    const duration = 1200;
    const steps = 50;
    const increment = value / steps;
    let current = 0;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      current = Math.min(current + increment, value);
      setDisplay(isDecimal ? parseFloat(current.toFixed(1)) : Math.round(current));
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  return <span ref={ref}>{display}{suffix}</span>;
}

export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.div variants={fadeUp} className="mb-6">
              <SectionLabel>Case Studies</SectionLabel>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-syne font-bold text-ink text-5xl md:text-7xl lg:text-[88px] leading-[1.05] tracking-tight mb-6"
            >
              Results That{" "}
              <span className="relative inline-block">
                Speak.
                <motion.span
                  className="absolute bottom-2 left-0 h-[3px] bg-ember rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                />
              </span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="font-dm-sans font-light text-slate-custom text-xl leading-relaxed max-w-2xl"
            >
              A selection of results from brands we&apos;ve helped scale. Client details available upon request.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="bg-surface pb-24 md:pb-32">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CASE_STUDIES.map((study, i) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: (i % 2) * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className={`relative rounded-3xl overflow-hidden group cursor-pointer ${
                  i % 3 === 0
                    ? "md:col-span-1"
                    : i % 3 === 1
                    ? "md:col-span-1"
                    : "md:col-span-2"
                }`}
              >
                {/* Card background */}
                <div
                  className={`${study.color} p-8 md:p-10 min-h-[320px] flex flex-col justify-between relative overflow-hidden`}
                >
                  {/* Background decoration */}
                  <div
                    className="absolute inset-0 bg-dot-pattern opacity-10"
                    style={{ backgroundSize: "28px 28px" }}
                    aria-hidden="true"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-ember/0 group-hover:bg-ember/90 transition-all duration-500 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 flex items-center gap-2 text-white font-dm-sans font-medium text-sm uppercase tracking-widest">
                      View Case Study <ArrowRight size={14} />
                    </span>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <span className="inline-block px-3 py-1 bg-white/20 rounded-full font-dm-sans text-white text-xs font-medium mb-2">
                      {study.industry}
                    </span>
                    <span className="inline-block px-3 py-1 bg-white/10 rounded-full font-dm-sans text-white/80 text-xs ml-2">
                      {study.clientType}
                    </span>
                  </div>

                  <div className="relative z-10">
                    <p className="font-syne font-bold text-white text-3xl md:text-4xl leading-tight mb-3 tracking-tight">
                      {study.headline}
                    </p>
                    <p className="font-dm-sans text-white/70 text-sm leading-relaxed mb-4 max-w-xs">
                      {study.subline}
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full">
                      <span className="font-dm-sans text-white font-medium text-xs">
                        {study.result}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Strip */}
      <section className="bg-ember py-16 md:py-20">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            className="label-caps text-white/70 text-center mb-12"
          >
            Across All Clients
          </motion.p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOptions}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`text-center ${
                  i < STATS.length - 1 ? "md:border-r md:border-white/20" : ""
                }`}
              >
                <div className="font-syne font-bold text-white text-4xl md:text-5xl leading-none mb-2">
                  <Counter value={stat.numericValue} suffix={stat.suffix} />
                </div>
                <div className="label-caps text-white/70 text-[11px]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
