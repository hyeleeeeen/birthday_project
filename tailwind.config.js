/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.js', './public/index.html'],
  theme: {
    extend: { fontFamily: { sans: ['Nanum', 'Arial', 'sans-serif'] } },
  },
  plugins: [],
};
