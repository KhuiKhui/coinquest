import type { Config } from "tailwindcss";

const colors = {
  black: {
    50: "#2D2E2E",
    100: "#0F0F0F",
    200: "#000000",
    DEFAULT: "#000000",
  },
  white: "#FFFFFF",
  "dust-white": "#FBFBFB",
  beige: {
    50: "#BCABAE",
    100: "#716929",
    DEFAULT: "#BCABAE",
  },
};

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
  darkMode: ["class", '[data-mode="dark"]'],
} satisfies Config;
