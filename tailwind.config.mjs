/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // E-ink color palette - pure black and white only
        "ink-black": "#000000",
        "ink-white": "#FFFFFF",
        "ink-gray": "#111111",
        "ink-light": "#F5F5F5",
        "ink-border": "#000000",
        "ink-text": "#000000",
        "ink-text-secondary": "#222222",
        // Keep accent for subtle interactions (optional)
        accent: "rgb(31 32 177)",
        "fluo-green": "#65ff00",
        "fluo-pink": "#ff3ed7",
        "fluo-yellow": "#ffff00",
        background: "#FFFFFF",
        foreground: "#000000",
        zinc: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
      },
      fontFamily: {
        sans: ['"iA Writer Quattro"', "monospace"],
        mono: ["monospace"],
        ink: ['"iA Writer Quattro"', "monospace"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
