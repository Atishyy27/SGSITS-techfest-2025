/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // CHANGE: Define a consistent color palette
        'primary': {
          'light': '#06b6d4', // cyan-500
          'dark': '#22d3ee'   // cyan-400
        },
        'dark-bg': '#0D1117', // A slightly bluish dark tone
        'light-bg': '#f8fafc', // slate-50
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'neon-flicker': 'neon-flicker 4s infinite alternate',
      },
      keyframes: {
        'marquee': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      }
    }
  },
  plugins: []
}