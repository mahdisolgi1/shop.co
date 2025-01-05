import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#F0F0F0",
          DEFAULT: "#fff",
          dark: "#000",
        },
        secondary: "#F33;",
      },
      fontFamily: {
        Satoshi: ["Satoshi", "sans-serif"],
        CF: ["Integral CF", "sans-serif"],
      },
      spacing: {
        "72": "18rem",
        "84": "21rem",
        "96": "24rem",
      },
      fontSize: {
        xs: "1rem",
        sm: "1.2rem",
        base: "1.6rem",
        lg: "2rem",
        xl: "2.4rem",
        "2xl": "3.2rem",
        "3xl": "4rem",
        "4xl": "4.8rem",
        "5xl": "6rem",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
