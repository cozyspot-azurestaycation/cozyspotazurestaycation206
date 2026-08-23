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
        // "Night azure" — deep navy-teal ink. Primary dark surface & headings.
        ink: {
          DEFAULT: "#16283A",
          light: "#20374C",
        },
        // Mid azure — links, secondary accents, icon strokes.
        azure: {
          DEFAULT: "#2E5266",
          soft: "#7FA8B3",
          mist: "#DCE7E9",
        },
        // Linen — warm neutral backgrounds (not paper-white, not cream-cliché).
        linen: {
          DEFAULT: "#EFEAE0",
          dark: "#E3DCC9",
        },
        // Brass — warm lamplight accent for CTAs & the stamp signature.
        brass: {
          DEFAULT: "#B8863B",
          dark: "#8F6528",
          light: "#D9AE6C",
        },
        charcoal: "#23201B",
        cloud: "#FFFFFF",
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
        card: "0 1px 2px rgba(22,40,58,0.06), 0 12px 32px -12px rgba(22,40,58,0.18)",
        stamp: "0 2px 0 rgba(184,134,59,0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
