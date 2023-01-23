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
        'main': '#ff0000',
        'blue': '#1a73e8'
      },
      height: {
        'header': '60px'
      }
    },
  },
  plugins: [],
}
