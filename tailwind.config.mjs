/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: '#6366f1', // Electric Indigo - High Contrast & Modern
        background: '#ffffff',
        foreground: '#000000',
        zinc: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#94a3b8', // Darkened for legibility (was #d4d4d8)
          400: '#71717a',
          500: '#52525b',
          600: '#3f3f46',
          700: '#27272a',
          800: '#18181b',
          900: '#09090b',
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
