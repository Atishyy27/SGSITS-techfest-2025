/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Yeh line add karo
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      // Custom animations aur colors add kar sakte hain
      animation: {
        'gradient-text': 'gradient-text 5s ease infinite',
      },
      keyframes: {
        'gradient-text': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      }
    }
  },
  plugins: []
}