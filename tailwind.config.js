/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'float-heart': {
          '0%': {
            transform: 'translateY(0) scale(1)',
            opacity: '0.6'
          },
          '100%': {
            transform: 'translateY(-100vh) scale(0.8)',
            opacity: '0'
          }
        }
      },
      animation: {
        'float-heart': 'float-heart var(--animation-duration, 6s) linear forwards'
      }
    },
  },
  plugins: [],
} 