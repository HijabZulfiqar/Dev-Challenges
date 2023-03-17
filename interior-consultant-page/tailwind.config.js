/** @type {import('tailwindcss').Config} */
module.exports = {

  content: ["*.{html,js}"],
  theme: {
    screens: {
      sm:'320px',
      md:'860px',
      lg:'1220px',
      xl:'1221px'
    },
    extend: {
      fontFamily: {
        crimson: ['Crimson Pro', 'sans-serif'],
        montserrat:['Montserrat','sans-serif'],
        lora:['lora','sans-serif']
      },
    },
  },
  plugins: [],
}
