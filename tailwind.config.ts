import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Navy — primary surface family. Everything sits on one of these three.
        navy: {
          DEFAULT: "#0F2538", // primary background
          mid: "#16344A",     // secondary background (section alternation)
          light: "#1D4058",   // card / panel surface, lightest step
        },
        // Warm off-white — primary text on navy.
        ivory: "#F5F1E8",
        // Muted blue-gray — secondary/supporting text, eyebrow labels.
        mist: "#B8C3CC",
        // Gold — the sparing accent. Primary CTAs, links, highlights only.
        gold: {
          DEFAULT: "#C89B3C",
          dark: "#A67F2E",
          light: "#D9B463",
        },

        // --- Aliases -----------------------------------------------------
        // Some components use this second naming scheme (ink/linen/brass/
        // azure/cloud) for the same palette. Both names are kept so every
        // component renders correctly regardless of which set it uses.
        ink: {
          DEFAULT: "#0F2538",
          mid: "#16344A",
          light: "#1D4058",
        },
        linen: {
          DEFAULT: "#F5F1E8",
          dark: "#EAE1CC",
        },
        brass: {
          DEFAULT: "#C89B3C",
          dark: "#A67F2E",
          light: "#D9B463",
        },
        azure: {
          DEFAULT: "#3E7CA6",
          soft: "#9CC2DC",
        },
        cloud: "#FBF9F3",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "bob": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(6px)" },
        },
        "ken-burns": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
        "bob": "bob 2.2s ease-in-out infinite",
        "ken-burns": "ken-burns 14s ease-out both",
      },
      boxShadow: {
        // Dark-UI elevation: a faint top highlight + a deep, soft drop shadow.
        // Intended for cards sitting on the dark navy sections — the heavy
        // dark shadow reads as a duplicate/ghost box on light backgrounds.
        card: "0 1px 0 rgba(245,241,232,0.05), 0 20px 40px -20px rgba(0,0,0,0.55)",
        // Light-UI elevation: for cards sitting on the light linen/cloud
        // sections (booking form, experience picker, etc). Much lower
        // opacity so it reads as a soft lift, not a second box.
        "card-light": "0 16px 32px -20px rgba(15,37,56,0.18)",
        stamp: "0 2px 0 rgba(200,155,60,0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
