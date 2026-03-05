/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: '#2E5BFF', // Cobalt Blue - High Contrast
        background: '#ffffff',
        foreground: '#000000',
        zinc: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
        }
      },
      fontFamily: {
        sans: ['"Geist Sans"', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', 'monospace'],
      },
      backgroundImage: {
        'soft-glow': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
      },
      letterSpacing: {
        tightest: '-.06em',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
