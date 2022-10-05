/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontFamily: {
      mono: ['"Courier New"', 'Courier', 'monospace'],
    },
    extend: {
      colors: {
        primary: '#6e6e6e',
        secondary: '#bcfd4c',
      },

      animation: {
        wiggle: 'wiggle 0.8s ease-in-out 4.5s infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-15deg)' },
          '50%': { transform: 'rotate(20deg)' },
        },
      },
    },
  },
  plugins: [],
}
