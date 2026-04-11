import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        fg: "var(--color-fg)",
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        border: "var(--color-border)",
        accent: "var(--color-accent)",
      },
      fontFamily: {
        heading: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
};

export default config;
