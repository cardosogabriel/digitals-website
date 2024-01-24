/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        main: '#37414b', //teal
        accent: '#FD328F', //pink
      },
      fontFamily: {
        roboto: ["Roboto Slab", "sans-serif"],
      },
    },
  },
  plugins: [],
};