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
        primary: "#1C1917",
        secondary: "#57534E",
        accent: "#B45309",
        "accent-light": "#D97706",
        background: "#FFFBF5",
        surface: "#FFF7ED",
        "surface-warm": "#FEF3E2",
        border: "#E7E0D6",
        "border-bright": "#D6CFC5",
        muted: "#A8A29E",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-up-d1": "fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards",
        "fade-up-d2": "fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards",
        "fade-up-d3": "fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards",
        "fade-up-d4": "fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards",
        "fade-in": "fade-in 0.5s ease forwards",
        "fade-in-d1": "fade-in 0.5s ease 0.12s forwards",
        "fade-in-d2": "fade-in 0.5s ease 0.24s forwards",
        "fade-in-d3": "fade-in 0.5s ease 0.36s forwards",
      },
    },
  },
  plugins: [],
};

export default config;
