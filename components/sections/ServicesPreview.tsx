"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Megaphone,
  Search,
  ShoppingBag,
  Palette,
  BarChart3,
  Sparkles,
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { SERVICES } from "@/lib/constants";
import { fadeUp, staggerContainer, viewportOptions } from "@/lib/animations";

const ICON_MAP: Record<string, LucideIcon> = {
  Megaphone,
  Search,
  ShoppingBag,
  Palette,
  BarChart3,
  Sparkles,
};

export default function ServicesPreview() {
  return (
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
            <SectionLabel>What We Do</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-syne font-bold text-ink text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight max-w-3xl"
          >
            Full-Funnel Advertising,{" "}
            <span className="text-ember">Engineered for Growth.</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((service) => {
            const Icon = ICON_MAP[service.icon] ?? Sparkles;
            return (
              <motion.div
                key={service.id}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white border border-rule rounded-2xl p-8 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-ember-light flex items-center justify-center mb-6 group-hover:bg-ember transition-colors duration-300">
                  <Icon
                    size={22}
                    className="text-ember group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="font-syne font-bold text-ink text-xl mb-3 leading-tight">
                  {service.title}
                </h3>
                <p className="font-dm-sans text-slate-custom text-sm leading-relaxed mb-6">
                  {service.shortDesc}
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-ember font-dm-sans font-medium text-xs uppercase tracking-wider group-hover:gap-3 transition-all duration-200"
                >
                  Learn more <ArrowRight size={13} />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
