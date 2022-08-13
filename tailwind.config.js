/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#54D2E0',
        error: '#CC2936',
      },
      fontFamily: {
        sans: ['Poppins'],
      },
    },
  },
  plugins: [],
};
