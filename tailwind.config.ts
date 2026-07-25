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
        "gap3-dark": "#0C1014",
        "gap3-card": "#151A20",
        "gap3-card-hover": "#1E2732",
        "gap3-gold-light": "#FFC900",
        "gap3-gold": "#F3A200",
        "gap3-gold-dark": "#DD8600",
        "gap3-gold-solid": "#FFC000",
        "gap3-text": "#FFFFFF",
        "gap3-text-secondary": "#E4E4E4",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
