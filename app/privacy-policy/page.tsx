"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { PRIVACY_SECTIONS } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";

const PLATFORM_BADGES = [
  { name: "Meta Ads", color: "bg-blue-50 text-blue-700 border-blue-100" },
  { name: "Shopify", color: "bg-green-50 text-green-700 border-green-100" },
  { name: "Google API", color: "bg-red-50 text-red-700 border-red-100" },
  { name: "GDPR Compliant", color: "bg-purple-50 text-purple-700 border-purple-100" },
  { name: "CCPA Compliant", color: "bg-amber-50 text-amber-700 border-amber-100" },
];

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState<string>(PRIVACY_SECTIONS[0].id);
  const [tocOpen, setTocOpen] = useState(false);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    PRIVACY_SECTIONS.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
      setTocOpen(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-surface pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-6">
              <ShieldCheck size={18} className="text-ember" />
              <span className="label-caps text-ember">Privacy & Compliance</span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-syne font-bold text-ink text-4xl md:text-6xl leading-tight tracking-tight mb-4"
            >
              Privacy Policy
            </motion.h1>
            <motion.p variants={fadeUp} className="font-dm-sans text-slate-custom text-base">
              Last updated: January 1, 2025
            </motion.p>

            {/* Platform badges */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mt-6">
              {PLATFORM_BADGES.map((badge) => (
                <span
                  key={badge.name}
                  className={`px-3 py-1.5 rounded-full border text-xs font-dm-sans font-medium ${badge.color}`}
                >
                  {badge.name}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mobile TOC toggle */}
      <div className="md:hidden bg-white border-b border-rule sticky top-16 z-30">
        <button
          onClick={() => setTocOpen(!tocOpen)}
          className="w-full flex items-center justify-between px-6 py-4"
        >
          <span className="font-dm-sans font-medium text-sm text-ink">Table of Contents</span>
          <span className="text-slate-custom text-xl leading-none">{tocOpen ? "−" : "+"}</span>
        </button>
        {tocOpen && (
          <div className="px-6 pb-4 flex flex-col gap-1">
            {PRIVACY_SECTIONS.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollTo(section.id)}
                className={`text-left py-2 font-dm-sans text-sm border-b border-rule/50 last:border-0 ${
                  activeSection === section.id ? "text-ember font-medium" : "text-slate-custom"
                }`}
              >
                <span className="text-ember mr-2">{section.number}</span>
                {section.title}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Main content */}
      <section className="bg-surface py-12 md:py-16">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12 md:gap-16 items-start">
            {/* Sticky sidebar TOC — desktop only */}
            <aside className="hidden md:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto">
              <p className="label-caps text-slate-custom mb-6">Contents</p>
              <nav className="flex flex-col gap-1">
                {PRIVACY_SECTIONS.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollTo(section.id)}
                    className={`group flex items-start gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200 ${
                      activeSection === section.id
                        ? "bg-ember-light text-ember"
                        : "text-slate-custom hover:text-ink hover:bg-white"
                    }`}
                  >
                    <motion.span
                      className="font-syne font-bold text-xs flex-shrink-0 mt-0.5"
                      layout
                    >
                      {section.number}
                    </motion.span>
                    <span className="font-dm-sans text-sm leading-snug">{section.title}</span>
                  </button>
                ))}
              </nav>
            </aside>

            {/* Sections */}
            <div className="flex flex-col gap-16">
              {/* Intro paragraph */}
              <div className="bg-ember-light border border-ember/20 rounded-2xl p-6 md:p-8">
                <p className="font-dm-sans text-slate-custom text-base leading-relaxed">
                  This Privacy Policy describes how Looqus (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects,
                  uses, and shares information about you when you use our website and services.
                  By using our services, you agree to the collection and use of information in
                  accordance with this policy.
                </p>
              </div>

              {PRIVACY_SECTIONS.map((section) => (
                <article
                  key={section.id}
                  id={section.id}
                  ref={(el) => { sectionRefs.current[section.id] = el; }}
                  className="scroll-mt-28"
                >
                  <div className="flex items-start gap-4 mb-5">
                    <span className="font-syne font-bold text-ember text-sm flex-shrink-0 mt-1.5">
                      {section.number}
                    </span>
                    <h2 className="font-syne font-bold text-ink text-2xl md:text-3xl leading-tight tracking-tight">
                      {section.title}
                    </h2>
                  </div>
                  <div className="pl-0 md:pl-9">
                    {section.content.split("\n\n").map((paragraph, i) => (
                      <p
                        key={i}
                        className="font-dm-sans font-light text-slate-custom text-base leading-relaxed mb-4 last:mb-0"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Callout block for GDPR and CCPA */}
                  {(section.id === "gdpr" || section.id === "ccpa") && (
                    <div className="mt-6 pl-0 md:pl-9">
                      <div className="bg-ember/5 border border-ember/20 rounded-xl p-5">
                        <p className="font-dm-sans font-medium text-ember text-sm mb-1">
                          {section.id === "gdpr" ? "GDPR Contact" : "CCPA Contact"}
                        </p>
                        <p className="font-dm-sans text-slate-custom text-sm">
                          For privacy requests:{" "}
                          <a href="mailto:accounts@looqus.com" className="text-ember underline underline-offset-2">
                            accounts@looqus.com
                          </a>
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="h-px bg-rule mt-12" />
                </article>
              ))}

              {/* Contact footer */}
              <div className="bg-ink rounded-2xl p-8">
                <h3 className="font-syne font-bold text-white text-xl mb-3">
                  Questions About This Policy?
                </h3>
                <p className="font-dm-sans text-white/60 text-sm leading-relaxed mb-5">
                  If you have any questions about this Privacy Policy or our data practices,
                  please contact us.
                </p>
                <div className="flex flex-col gap-2 text-sm">
                  <p className="font-dm-sans text-white/60">
                    Email:{" "}
                    <a href="mailto:accounts@looqus.com" className="text-ember">
                      accounts@looqus.com
                    </a>
                  </p>
                  <p className="font-dm-sans text-white/60">
                    Address: Padbramha Savitri, Flat No 301, Plot No 49, Sector No 31A, Vashi, Navi Mumbai, Thane, Maharashtra 400706
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
