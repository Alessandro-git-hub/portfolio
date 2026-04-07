/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#0e0e11',
        'surface-raised': '#16161a',
        'surface-overlay': '#1e1e24',
        accent: '#e8a838',
        'accent-light': '#f0c060',
        'accent-dim': '#b88428',
        text: '#e8e6e3',
        'text-muted': '#94918b',
        'text-faint': '#5a5752',
        border: '#2a2a30',
        'border-accent': '#3a3a42',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['Outfit', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      animation: {
        'grain': 'grain 8s steps(10) infinite',
        'fade-up': 'fadeUp 0.8s ease-out both',
        'fade-up-delay-1': 'fadeUp 0.8s ease-out 0.1s both',
        'fade-up-delay-2': 'fadeUp 0.8s ease-out 0.2s both',
        'fade-up-delay-3': 'fadeUp 0.8s ease-out 0.3s both',
        'fade-up-delay-4': 'fadeUp 0.8s ease-out 0.4s both',
        'fade-up-delay-5': 'fadeUp 0.8s ease-out 0.6s both',
      },
      keyframes: {
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '30%': { transform: 'translate(3%, -15%)' },
          '50%': { transform: 'translate(12%, 9%)' },
          '70%': { transform: 'translate(9%, 4%)' },
          '90%': { transform: 'translate(-1%, 7%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

