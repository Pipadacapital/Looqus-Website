import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",
        surface: "#F5F3EF",
        ember: "#D84B1E",
        "ember-light": "#FCEEE9",
        "slate-custom": "#4A4A4A",
        rule: "#E4E0D9",
      },
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        "dm-sans": ["var(--font-dm-sans)", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
      backgroundImage: {
        "dot-pattern":
          "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
      },
      backgroundSize: {
        "dot-sm": "32px 32px",
      },
    },
  },
  plugins: [],
};

export default config;
