/** @type {import('tailwindcss').Config} */

// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        appear: {
          from: {
            opacity: '0',
            transform: 'translateX(-100px)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
      animation: {
        appear: 'appear 1s linear',
      },
    },
  },
  plugins: [],
};

