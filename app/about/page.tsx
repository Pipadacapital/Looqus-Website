"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import CTABanner from "@/components/sections/CTABanner";
import { TEAM_MEMBERS, VALUES } from "@/lib/constants";
import { fadeUp, slideInLeft, slideInRight, staggerContainer, viewportOptions } from "@/lib/animations";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden relative">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.div variants={fadeUp} className="mb-6">
              <SectionLabel>About Us</SectionLabel>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-syne font-bold text-ink text-5xl md:text-7xl lg:text-[88px] leading-[1.05] tracking-tight mb-6"
            >
              We Are{" "}
              <span className="relative inline-block">
                Looqus.
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
              A team obsessed with making your brand win — through bold creativity,
              relentless data, and genuine partnership.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: editorial text */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
            >
              <motion.div variants={fadeUp} className="mb-5">
                <SectionLabel>Our Story</SectionLabel>
              </motion.div>
              <motion.div variants={slideInLeft} className="space-y-6">
                <p className="font-syne font-bold text-ink text-2xl md:text-3xl leading-snug tracking-tight">
                  Founded in 2016, Looqus started with one belief: great advertising is part art, part science.
                </p>
                <p className="font-dm-sans font-light text-slate-custom text-lg leading-relaxed">
                  We watched too many promising brands get lost in a sea of mediocre ads — safe creative, bloated agency retainers, and reports full of vanity metrics that meant nothing to the bottom line.
                </p>
                <p className="font-dm-sans font-light text-slate-custom text-lg leading-relaxed">
                  So we built the agency we always wished existed: one that leads with creative ambition, obsesses over performance data, and treats every client like a true partner. Eight years and 120+ brands later, we&apos;re still that agency.
                </p>
              </motion.div>
            </motion.div>

            {/* Right: pull quote */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
              className="lg:pt-12"
            >
              <div className="relative border-l-4 border-ember pl-8 py-4">
                <p className="font-syne font-bold text-ember text-2xl md:text-3xl leading-snug">
                  &ldquo;We don&apos;t just run ads. We build brands people can&apos;t ignore — and businesses that can&apos;t be stopped.&rdquo;
                </p>
                <div className="mt-8 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-ember flex items-center justify-center">
                    <span className="font-syne font-bold text-white text-sm">MR</span>
                  </div>
                  <div>
                    <p className="font-syne font-bold text-ink text-sm">Marcus Rivera</p>
                    <p className="font-dm-sans text-slate-custom text-xs">Founder & CEO, Looqus</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-surface py-24 md:py-32">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="mb-16"
          >
            <motion.div variants={fadeUp} className="mb-4">
              <SectionLabel>The Team</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-syne font-bold text-ink text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight"
            >
              People Behind the{" "}
              <span className="text-ember">Performance.</span>
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {TEAM_MEMBERS.map((member, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white border border-rule rounded-2xl p-8 group"
              >
                {/* Placeholder image */}
                <div className="w-full aspect-[4/3] bg-rule/40 rounded-xl mb-6 flex items-center justify-center group-hover:bg-ember-light transition-colors duration-300">
                  <span className="font-syne font-bold text-4xl text-rule group-hover:text-ember transition-colors duration-300">
                    {member.initials}
                  </span>
                </div>
                <h3 className="font-syne font-bold text-ink text-xl leading-tight mb-1">
                  {member.name}
                </h3>
                <p className="label-caps text-ember mb-3">{member.title}</p>
                <p className="font-dm-sans text-slate-custom text-sm leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-ink py-24 md:py-32 overflow-hidden">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="mb-16"
          >
            <motion.div variants={fadeUp} className="mb-4">
              <SectionLabel light>What We Believe</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-syne font-bold text-white text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight"
            >
              Our <span className="text-ember">Values</span>
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
          >
            {VALUES.map((value, i) => (
              <motion.div key={i} variants={fadeUp} className="relative">
                <div className="font-syne font-bold text-[100px] leading-none text-white/5 mb-4 select-none" aria-hidden="true">
                  {value.number}
                </div>
                <div className="border-t border-white/10 pt-6">
                  <span className="label-caps text-ember block mb-3">{value.number}</span>
                  <h3 className="font-syne font-bold text-white text-2xl md:text-3xl leading-tight mb-4">
                    {value.title}
                  </h3>
                  <p className="font-dm-sans font-light text-white/60 text-base leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
