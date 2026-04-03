"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { TESTIMONIALS } from "@/lib/constants";
import { fadeUp, staggerContainer, viewportOptions } from "@/lib/animations";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-ink py-24 md:py-32 overflow-hidden">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp} className="mb-4 flex justify-center">
            <SectionLabel light>Client Stories</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-syne font-bold text-white text-4xl md:text-5xl leading-tight tracking-tight"
          >
            Words From{" "}
            <span className="text-ember">Brands We&apos;ve Grown</span>
          </motion.h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 text-center"
            >
              <Quote size={32} className="text-ember mx-auto mb-8 opacity-80" />
              <blockquote className="font-syne font-bold text-white text-xl md:text-2xl leading-relaxed mb-8">
                &ldquo;{TESTIMONIALS[active].quote}&rdquo;
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-ember flex items-center justify-center">
                  <span className="font-syne font-bold text-white text-sm">
                    {TESTIMONIALS[active].initials}
                  </span>
                </div>
                <div className="text-left">
                  <p className="font-syne font-bold text-white text-base leading-tight">
                    {TESTIMONIALS[active].name}
                  </p>
                  <p className="font-dm-sans text-white/50 text-sm">
                    {TESTIMONIALS[active].role}, {TESTIMONIALS[active].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2.5 mt-8">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === active
                    ? "w-8 h-2 bg-ember"
                    : "w-2 h-2 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
