/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'fjord': ['Fjord One, serif'],
      'roboto': ['Roboto, sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}