"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, CheckCircle2 } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import CTABanner from "@/components/sections/CTABanner";
import { SERVICES, PROCESS_STEPS, PLATFORMS } from "@/lib/constants";
import { fadeUp, staggerContainer, viewportOptions } from "@/lib/animations";

export default function ServicesPage() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => setOpenId(openId === id ? null : id);

  return (
    <>
      {/* Hero */}
      <section className="bg-ink pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-dot-pattern opacity-20"
          style={{ backgroundSize: "32px 32px" }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-content mx-auto px-6 md:px-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUp} className="mb-6">
              <SectionLabel light>Our Services</SectionLabel>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-syne font-bold text-white text-5xl md:text-7xl lg:text-[88px] leading-[1.05] tracking-tight mb-6"
            >
              What We{" "}
              <span className="relative inline-block">
                Do Best.
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
              className="font-dm-sans font-light text-white/60 text-xl leading-relaxed max-w-2xl"
            >
              Six integrated services designed to take your brand from invisible to unstoppable.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Accordion */}
      <section className="bg-surface py-24 md:py-32">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <div className="divide-y divide-rule">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <button
                  onClick={() => toggle(service.id)}
                  className={`w-full flex items-center justify-between py-8 text-left transition-colors duration-200 group ${
                    openId === service.id ? "text-ember" : "text-ink hover:text-ember"
                  }`}
                  aria-expanded={openId === service.id}
                >
                  <div className="flex items-center gap-6">
                    <span
                      className={`font-syne font-bold text-lg md:text-xl tabular-nums transition-colors duration-200 ${
                        openId === service.id ? "text-ember" : "text-rule"
                      }`}
                    >
                      0{service.id}
                    </span>
                    <span className="font-syne font-bold text-2xl md:text-4xl leading-tight tracking-tight">
                      {service.title}
                    </span>
                  </div>
                  <span className="flex-shrink-0 ml-4">
                    {openId === service.id ? (
                      <Minus size={22} className="text-ember" />
                    ) : (
                      <Plus size={22} className="text-rule group-hover:text-ember transition-colors" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {openId === service.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-10 pl-0 md:pl-16 grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div>
                          <p className="font-dm-sans font-light text-slate-custom text-lg leading-relaxed mb-8">
                            {service.description}
                          </p>
                          <div>
                            <p className="label-caps text-slate-custom mb-4">Platforms & Tools</p>
                            <div className="flex flex-wrap gap-2">
                              {service.platforms.map((platform) => (
                                <span
                                  key={platform}
                                  className="px-3 py-1.5 bg-ember-light text-ember rounded-full font-dm-sans text-xs font-medium"
                                >
                                  {platform}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div>
                          <p className="label-caps text-slate-custom mb-4">What You Get</p>
                          <ul className="flex flex-col gap-3">
                            {service.deliverables.map((item, j) => (
                              <li key={j} className="flex items-start gap-3">
                                <CheckCircle2 size={16} className="text-ember flex-shrink-0 mt-0.5" />
                                <span className="font-dm-sans text-slate-custom text-sm leading-relaxed">
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white py-24 md:py-32 overflow-hidden">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="mb-16"
          >
            <motion.div variants={fadeUp} className="mb-4">
              <SectionLabel>How We Work</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-syne font-bold text-ink text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight"
            >
              Our <span className="text-ember">Process</span>
            </motion.h2>
          </motion.div>

          {/* Steps grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="relative"
              >
                <div className="font-syne font-bold text-[72px] leading-none text-rule/50 mb-4 select-none" aria-hidden="true">
                  {step.number}
                </div>
                <div className="border-t-2 border-ember pt-6">
                  <h3 className="font-syne font-bold text-ink text-xl mb-3 leading-tight">
                    {step.title}
                  </h3>
                  <p className="font-dm-sans text-slate-custom text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Platform Expertise */}
      <section className="bg-surface py-24 md:py-32">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="text-center mb-16"
          >
            <motion.div variants={fadeUp} className="mb-4 flex justify-center">
              <SectionLabel>Platform Expertise</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-syne font-bold text-ink text-4xl md:text-5xl leading-tight tracking-tight"
            >
              Native to Every Major Platform
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {PLATFORMS.map((platform, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                className="bg-white border border-rule rounded-2xl p-6 flex flex-col items-center justify-center aspect-square cursor-default group hover:border-ember transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-rule/30 flex items-center justify-center mb-3 group-hover:bg-ember-light transition-colors duration-300">
                  <span className="font-syne font-bold text-xs text-slate-custom group-hover:text-ember transition-colors duration-300">
                    {platform.abbr}
                  </span>
                </div>
                <span className="font-dm-sans font-medium text-sm text-slate-custom group-hover:text-ink transition-colors duration-300 text-center">
                  {platform.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
