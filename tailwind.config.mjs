/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
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
        accent: "#000000",
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
        mono: ['"iA Writer Quattro"', "monospace"],
        ink: ['"iA Writer Quattro"', "monospace"],
      },
      borderWidth: {
        ink: "1px",
      },
      spacing: {
        "ink-xs": "0.25rem",
        "ink-sm": "0.5rem",
        "ink-md": "1rem",
        "ink-lg": "1.5rem",
        "ink-xl": "2rem",
        "ink-2xl": "3rem",
        "ink-3xl": "4rem",
        "ink-4xl": "6rem",
      },
      fontSize: {
        "ink-xs": ["0.75rem", { lineHeight: "1.5" }],
        "ink-sm": ["0.875rem", { lineHeight: "1.5" }],
        "ink-base": ["1rem", { lineHeight: "1.6" }],
        "ink-lg": ["1.125rem", { lineHeight: "1.6" }],
        "ink-xl": ["1.25rem", { lineHeight: "1.6" }],
        "ink-2xl": ["1.5rem", { lineHeight: "1.4" }],
        "ink-3xl": ["1.875rem", { lineHeight: "1.3" }],
        "ink-4xl": ["2.25rem", { lineHeight: "1.2" }],
        "ink-5xl": ["3rem", { lineHeight: "1.1" }],
        "ink-6xl": ["3.75rem", { lineHeight: "1.1" }],
      },
      letterSpacing: {
        "ink-tight": "-0.02em",
        "ink-normal": "0em",
        "ink-wide": "0.05em",
      },
      boxShadow: {
        none: "none",
        ink: "none",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
