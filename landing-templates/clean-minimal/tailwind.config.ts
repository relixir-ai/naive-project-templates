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
        primary: "#0A0A0A",
        secondary: "#525252",
        accent: "#2563EB",
        background: "#FAFAFA",
        surface: "#FFFFFF",
        border: "#E5E5E5",
        "border-bright": "#D4D4D4",
        muted: "#A3A3A3",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
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
        "fade-in": "fade-in 1s ease forwards",
        shimmer: "shimmer 3s ease-in-out infinite",
        marquee: "marquee 25s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
