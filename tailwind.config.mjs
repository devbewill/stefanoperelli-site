/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: '#00ffc3ff', // Acid Lime
        surface: {
          light: '#ffffff',
          dark: '#000000',
        },
      },
      fontFamily: {
        sans: ['"Geist Sans"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['"Geist Mono"', '"Space Mono"', '"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        tighter: '-.04em',
        tightest: '-.08em',
        extreme: '-.12em',
      },
      fontSize: {
        '10xl': '10rem',
        'vw': '10vw',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
