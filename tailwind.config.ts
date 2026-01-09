import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary dark backgrounds
        'midnight': '#0D1117',
        'charcoal': '#161B22',
        'slate-dark': '#1C2128',
        // Warm accent - amber/gold
        'amber-glow': '#D4A853',
        'amber-bright': '#E8BD6A',
        'amber-deep': '#B8923F',
        // Cool accent - teal blue
        'teal-accent': '#4A90A4',
        'teal-light': '#5BA3B8',
        'teal-dark': '#3A7A8E',
        // Text colors
        'cream': '#F7F5F2',
        'cream-muted': '#E8E6E3',
        // Warm white representation
        'warm-white': '#FFF5E6',
      },
      fontFamily: {
        'display': ['var(--font-display)', 'serif'],
        'body': ['var(--font-body)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glow-amber': 'radial-gradient(ellipse at center, rgba(212, 168, 83, 0.15) 0%, transparent 70%)',
        'glow-teal': 'radial-gradient(ellipse at center, rgba(74, 144, 164, 0.1) 0%, transparent 70%)',
      },
      animation: {
        'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'slide-up': 'slide-up 0.6s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.6s ease-out forwards',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
