/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    screens: {
      sm:'320px',
      md:'860px',
      lg:'1020px',
      xl:'1240px'
    },
    extend: {
      fontFamily: {
        sans: ['PT Serif', 'sans-serif'],
        popins:['Poppins','sans-serif']
      },
    },
  },
  plugins: [],
}
