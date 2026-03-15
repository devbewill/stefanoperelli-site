/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        accent: "rgb(31 32 177)",
        "fluo-green": "#65ff00",
        "fluo-pink": "#ff3ed7",
        "fluo-yellow": "#ffff00",
        background: "#FFFFFF",
        foreground: "#000000",  
      },
      fontFamily: {
        sans: ['"iA Writer Quattro"', "monospace"],
        mono: ["monospace"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
