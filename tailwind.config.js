/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '350px': '350px',  
      },
      fontFamily: {
        'league-spartan': ['"League Spartan"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}