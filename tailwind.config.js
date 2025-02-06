/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dancing: ['Dancing Script', 'cursive'],
      },
      animation: {
        'float': 'float linear infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-100px) rotate(180deg)' },
          '100%': { transform: 'translateY(-200px) rotate(360deg)' }
        }
      }
    },
  },
  plugins: [],
}