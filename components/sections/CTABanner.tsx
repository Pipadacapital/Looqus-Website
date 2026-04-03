"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer, viewportOptions } from "@/lib/animations";

export default function CTABanner() {
  return (
    <section className="bg-ember py-20 md:py-28 overflow-hidden relative">
      {/* Background decoration */}
      <div
        className="absolute inset-0 bg-dot-pattern opacity-20"
        style={{ backgroundSize: "32px 32px" }}
        aria-hidden="true"
      />
      <div
        className="absolute -right-40 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-content mx-auto px-6 md:px-10 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <motion.p variants={fadeUp} className="label-caps text-white/70 mb-4">
            Ready to Scale?
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-syne font-bold text-white text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tight mb-6"
          >
            Ready to Ignite Your Brand?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="font-dm-sans font-light text-white/80 text-lg md:text-xl max-w-xl mx-auto mb-10"
          >
            Let&apos;s talk about your goals, your market, and your next campaign.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 bg-white text-ember rounded-full font-dm-sans font-medium text-xs uppercase tracking-widest transition-all duration-200 hover:scale-[1.03] hover:shadow-xl hover:shadow-black/20"
            >
              Start the Conversation
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
