"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import AnimatedText from "@/components/ui/AnimatedText";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-ink overflow-hidden">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 bg-dot-pattern bg-dot-sm opacity-40"
        style={{ backgroundSize: "32px 32px" }}
      />

      {/* Ember glow blob */}
      <div
        className="absolute top-1/3 right-[-10%] w-[600px] h-[600px] rounded-full bg-ember opacity-[0.08] blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-[-5%] w-[400px] h-[400px] rounded-full bg-ember opacity-[0.05] blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-content mx-auto px-6 md:px-10 pt-32 pb-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-5xl"
        >
          {/* Pre-label */}
          <motion.div variants={fadeUp} className="mb-8">
            <span className="inline-flex items-center gap-2 label-caps text-ember">
              <span className="w-5 h-px bg-ember" />
              Digital Ad Agency
            </span>
          </motion.div>

          {/* Main headline — word by word animation */}
          <div className="mb-8 overflow-hidden">
            <AnimatedText
              text="We Make Brands Impossible to Ignore."
              className="font-syne font-bold text-white text-5xl md:text-7xl lg:text-[88px] leading-[1.05] tracking-tight"
              as="h1"
            />
          </div>

          {/* Sub-headline */}
          <motion.p
            variants={fadeUp}
            className="font-dm-sans font-light text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mb-12"
          >
            Looqus is a performance-first ad agency blending creative strategy with data
            to grow brands that dominate.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/work"
              className="inline-flex items-center justify-center px-8 py-4 bg-ember text-white rounded-full font-dm-sans font-medium text-xs uppercase tracking-widest transition-all duration-200 hover:brightness-110 hover:scale-[1.02]"
            >
              See Our Work
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white border border-white/30 rounded-full font-dm-sans font-medium text-xs uppercase tracking-widest transition-all duration-200 hover:border-ember hover:text-ember"
            >
              Meet the Team
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <span className="label-caps text-white/30 text-[10px]">Scroll</span>
        <ChevronDown size={16} className="text-white/30" />
      </motion.div>
    </section>
  );
}
