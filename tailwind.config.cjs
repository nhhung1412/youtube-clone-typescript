/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Boroto': ['Boroto', 'sans-serif']
      },
      colors: {
        'main': '#ff0000'
      }
    },
  },
  plugins: [],
}