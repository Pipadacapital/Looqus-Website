"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Loader2, CheckCircle2 } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { fadeUp, staggerContainer, scaleIn } from "@/lib/animations";

interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  message: string;
}

const SERVICES_OPTIONS = [
  "Meta & Instagram Ads",
  "Google & YouTube Ads",
  "Shopify Growth & CRO",
  "Creative Strategy",
  "Analytics & Reporting",
  "Brand Development",
  "Multiple Services",
];

const BUDGET_OPTIONS = [
  "Under $5,000/mo",
  "$5,000 – $15,000/mo",
  "$15,000 – $50,000/mo",
  "$50,000+/mo",
  "Not sure yet",
];

const CONTACT_INFO = [
  { icon: Mail, label: "Email", value: "accounts@looqus.com", href: "mailto:accounts@looqus.com" },
  { icon: Phone, label: "Phone", value: "+91 99878 99897", href: "tel:+919987899897" },
  { icon: MapPin, label: "Address", value: "Padbramha Savitri, Flat No 301, Plot No 49\nSector No 31A, Vashi, Navi Mumbai\nThane, Maharashtra 400706", href: "#" },
];

function FloatingField({
  label,
  id,
  type = "text",
  value,
  onChange,
  required,
  error,
  multiline = false,
}: {
  label: string;
  id: string;
  type?: string;
  value: string;
  onChange: (val: string) => void;
  required?: boolean;
  error?: boolean;
  multiline?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;

  const inputClass = `w-full bg-transparent border-b-2 pt-6 pb-2 font-dm-sans text-ink text-base outline-none transition-colors duration-200 resize-none ${
    error ? "border-ember" : active ? "border-ember" : "border-rule"
  }`;

  return (
    <div className="relative">
      <motion.label
        htmlFor={id}
        animate={{ y: active ? -16 : 0, scale: active ? 0.8 : 1, color: active ? "#D84B1E" : "#4A4A4A" }}
        transition={{ duration: 0.2 }}
        style={{ transformOrigin: "left center", position: "absolute", top: "24px", left: 0, pointerEvents: "none", fontSize: "15px", fontFamily: "var(--font-dm-sans)" }}
        className="font-dm-sans"
      >
        {label} {required && <span className="text-ember">*</span>}
      </motion.label>
      {multiline ? (
        <textarea
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          rows={4}
          className={inputClass}
          aria-invalid={error}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={inputClass}
          aria-invalid={error}
        />
      )}
      {error && (
        <p className="text-ember font-dm-sans text-xs mt-1">This field is required</p>
      )}
    </div>
  );
}

function FloatingSelect({
  label,
  id,
  value,
  onChange,
  options,
  required,
  error,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (val: string) => void;
  options: string[];
  required?: boolean;
  error?: boolean;
}) {
  const active = value.length > 0;

  return (
    <div className="relative">
      <motion.label
        htmlFor={id}
        animate={{ y: active ? -16 : 0, scale: active ? 0.8 : 1, color: active ? "#D84B1E" : "#4A4A4A" }}
        transition={{ duration: 0.2 }}
        style={{ transformOrigin: "left center", position: "absolute", top: "24px", left: 0, pointerEvents: "none", fontSize: "15px", fontFamily: "var(--font-dm-sans)" }}
      >
        {label} {required && <span className="text-ember">*</span>}
      </motion.label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full bg-transparent border-b-2 pt-6 pb-2 font-dm-sans text-ink text-base outline-none appearance-none cursor-pointer transition-colors duration-200 ${
          error ? "border-ember" : active ? "border-ember" : "border-rule"
        }`}
        aria-invalid={error}
      >
        <option value="" disabled />
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-ember font-dm-sans text-xs mt-1">Please select an option</p>
      )}
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, boolean>>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const set = (key: keyof FormData) => (val: string) => {
    setForm((f) => ({ ...f, [key]: val }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: false }));
  };

  const validate = () => {
    const newErrors: Partial<Record<keyof FormData, boolean>> = {};
    if (!form.name.trim()) newErrors.name = true;
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = true;
    if (!form.service) newErrors.service = true;
    if (!form.message.trim()) newErrors.message = true;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSuccess(true);
      }
    } catch {
      // Handle error silently
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-ink pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
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
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp} className="mb-6">
              <SectionLabel light>Contact</SectionLabel>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-syne font-bold text-white text-5xl md:text-7xl leading-tight tracking-tight mb-6"
            >
              Let&apos;s Build Something{" "}
              <span className="text-ember">Great.</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="font-dm-sans font-light text-white/60 text-xl leading-relaxed"
            >
              Tell us about your brand and goals. We&apos;ll be in touch within one business day.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main contact section */}
      <section className="bg-surface py-20 md:py-28">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-16 items-start">
            {/* Left: contact info */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeUp} className="mb-8">
                <SectionLabel>Get in Touch</SectionLabel>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="font-syne font-bold text-ink text-3xl md:text-4xl leading-tight tracking-tight mb-8"
              >
                We&apos;d love to hear about your brand.
              </motion.h2>

              <motion.div variants={staggerContainer} className="flex flex-col gap-6 mb-12">
                {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                  <motion.a
                    key={label}
                    variants={fadeUp}
                    href={href}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-ember-light flex items-center justify-center flex-shrink-0 group-hover:bg-ember transition-colors duration-200">
                      <Icon size={16} className="text-ember group-hover:text-white transition-colors duration-200" />
                    </div>
                    <div>
                      <p className="label-caps text-slate-custom mb-1">{label}</p>
                      <p className="font-dm-sans text-ink text-sm leading-relaxed whitespace-pre-line">
                        {value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </motion.div>

              {/* Map placeholder */}
              <motion.div
                variants={fadeUp}
                className="w-full aspect-[4/3] bg-rule/40 rounded-2xl flex items-center justify-center overflow-hidden"
              >
                <div className="text-center">
                  <MapPin size={32} className="text-rule mx-auto mb-2" />
                  <p className="font-dm-sans text-slate-custom/60 text-sm">Vashi, Navi Mumbai</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: form */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white border border-rule rounded-3xl p-8 md:p-12"
            >
              <AnimatePresence mode="wait">
                {success ? (
                  <motion.div
                    key="success"
                    variants={scaleIn}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-ember-light flex items-center justify-center mb-6">
                      <CheckCircle2 size={32} className="text-ember" />
                    </div>
                    <h3 className="font-syne font-bold text-ink text-2xl mb-3">
                      Message Received!
                    </h3>
                    <p className="font-dm-sans text-slate-custom text-base max-w-sm">
                      Thanks for reaching out. Our team will review your message and get back to you within one business day.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-8"
                    noValidate
                  >
                    <motion.div variants={fadeUp}>
                      <h3 className="font-syne font-bold text-ink text-2xl mb-2">
                        Start the Conversation
                      </h3>
                      <p className="font-dm-sans text-slate-custom text-sm">
                        Fields marked <span className="text-ember">*</span> are required.
                      </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <motion.div variants={fadeUp}>
                        <FloatingField
                          label="Full Name"
                          id="name"
                          value={form.name}
                          onChange={set("name")}
                          required
                          error={errors.name}
                        />
                      </motion.div>
                      <motion.div variants={fadeUp}>
                        <FloatingField
                          label="Email Address"
                          id="email"
                          type="email"
                          value={form.email}
                          onChange={set("email")}
                          required
                          error={errors.email}
                        />
                      </motion.div>
                    </div>

                    <motion.div variants={fadeUp}>
                      <FloatingField
                        label="Company / Brand Name"
                        id="company"
                        value={form.company}
                        onChange={set("company")}
                      />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <motion.div variants={fadeUp}>
                        <FloatingSelect
                          label="Service Interested In"
                          id="service"
                          value={form.service}
                          onChange={set("service")}
                          options={SERVICES_OPTIONS}
                          required
                          error={errors.service}
                        />
                      </motion.div>
                      <motion.div variants={fadeUp}>
                        <FloatingSelect
                          label="Monthly Budget"
                          id="budget"
                          value={form.budget}
                          onChange={set("budget")}
                          options={BUDGET_OPTIONS}
                        />
                      </motion.div>
                    </div>

                    <motion.div variants={fadeUp}>
                      <FloatingField
                        label="Tell us about your goals"
                        id="message"
                        value={form.message}
                        onChange={set("message")}
                        required
                        error={errors.message}
                        multiline
                      />
                    </motion.div>

                    <motion.div variants={fadeUp}>
                      <button
                        type="submit"
                        disabled={loading}
                        className="inline-flex items-center justify-center gap-2 w-full md:w-auto px-10 py-4 bg-ember text-white rounded-full font-dm-sans font-medium text-xs uppercase tracking-widest transition-all duration-200 hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {loading ? (
                          <>
                            <Loader2 size={14} className="animate-spin" />
                            Sending…
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </button>
                    </motion.div>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
