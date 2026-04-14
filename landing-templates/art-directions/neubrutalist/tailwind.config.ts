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
        // Neubrutalist palette
        "nb-yellow": "var(--nb-yellow)",
        "nb-pink": "var(--nb-pink)",
        "nb-blue": "var(--nb-blue)",
        "nb-green": "var(--nb-green)",
        "nb-orange": "var(--nb-orange)",
        "nb-purple": "var(--nb-purple)",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        "nb-sm": "4px 4px 0 0 #000",
        "nb-md": "6px 6px 0 0 #000",
        "nb-lg": "8px 8px 0 0 #000",
      },
      borderWidth: {
        "3": "3px",
      },
    },
  },
};

export default config;
