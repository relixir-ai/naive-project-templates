import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1A1A2E",
        secondary: "#4A4A6A",
        accent: "#FF6B35",
        "accent-secondary": "#7C3AED",
        background: "#FFFFFF",
        surface: "#F8F7FF",
        border: "#E8E5F0",
        "border-bright": "#D5D0E5",
        muted: "#9CA3AF",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "spring-up": {
          "0%": { opacity: "0", transform: "translateY(40px) scale(0.95)" },
          "60%": { transform: "translateY(-4px) scale(1.01)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-15px) rotate(2deg)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-8px) rotate(-1deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-up-d1": "fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards",
        "fade-up-d2": "fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards",
        "fade-up-d3": "fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards",
        "fade-up-d4": "fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards",
        "spring-up": "spring-up 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
        "spring-up-d1": "spring-up 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.08s forwards",
        "spring-up-d2": "spring-up 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.16s forwards",
        "spring-up-d3": "spring-up 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.24s forwards",
        "fade-in": "fade-in 0.8s ease forwards",
        "gradient-shift": "gradient-shift 6s ease infinite",
        float: "float 5s ease-in-out infinite",
        "float-slow": "float-slow 7s ease-in-out infinite",
        marquee: "marquee 20s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
