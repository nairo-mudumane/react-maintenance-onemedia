/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        heading: ["Montserrat", "sans-serif"],
      },
      colors: {
        orange1: "#f2871c",
        black1: "#373737",
        gray1: "#26264b",
        gray2: "#404041",
      },
    },
  },
  plugins: [],
};
