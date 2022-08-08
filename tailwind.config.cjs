/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: {
          min: "320px",
          max: "475px",
        },
        ...defaultTheme.screens,
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        primary: "#252424",
        secondary: "#9F9F9F",
      },
    },
  },
  plugins: [],
};
