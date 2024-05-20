/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        libreSans: ["Libre Franklin", "sans-serif"],
        sourceSerif: ["Source Serif 4", "serif"],
      },
      colors: {
        "yellow-main": "#F7DA21",
      },
    },
  },
  plugins: [],
};
