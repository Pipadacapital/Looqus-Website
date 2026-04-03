"use client";

import { motion } from "framer-motion";
import { staggerContainerFast, wordReveal } from "@/lib/animations";

interface AnimatedTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
}

export default function AnimatedText({
  text,
  className = "",
  as: Tag = "h1",
  delay = 0,
}: AnimatedTextProps) {
  const words = text.split(" ");

  return (
    <Tag className={`${className} overflow-hidden`}>
      <motion.span
        className="inline-flex flex-wrap gap-x-[0.3em]"
        variants={staggerContainerFast}
        initial="hidden"
        animate="visible"
        style={{ transitionDelay: `${delay}s` }}
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            className="inline-block overflow-hidden"
          >
            <motion.span
              className="inline-block"
              variants={wordReveal}
              custom={i}
            >
              {word}
            </motion.span>
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}
