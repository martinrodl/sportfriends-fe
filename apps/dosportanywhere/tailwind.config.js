/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#54D2E0',
        secondary: '#FAB447',
        main3: '#282828',
        main4: '#9A9A9A',
        accent1: '#FFCE52',
        accent2: '#FE7970',
        accent3: '#1CC300',
        accent4: '#A6A6A6',
        accent5: '#9592A6',
        accent6: '#E0E0E0',
        error: '#E50128',
        white: '#FFFFFF',
        whitedarker: '#F5F5F5',
        black: '#000000',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, theme, addUtilities }) {
      addBase({
        h1: {
          fontSize: '20px',
          '@media (min-width: 768px)': {
            fontSize: '30px',
          },
        },
        h2: {
          fontSize: '17px',
          '@media (min-width: 768px)': {
            fontSize: '25px',
          },
        },
        h3: {
          fontSize: '17px',
          '@media (min-width: 768px)': {
            fontSize: '20px',
          },
        },
        h4: {
          fontSize: '14px',
          '@media (min-width: 768px)': {
            fontSize: '16px',
          },
        },
        p: {
          fontSize: '14px',
          '@media (min-width: 768px)': {
            fontSize: '14px',
          },
        },
      });
    }),
  ],
};
