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
      colors: {
        White1: '#FAFAFA',
        Orange: '#F2994A',
        Gray1: '#333333',
        Gray2: '#4F4F4F',
        Gray3: '#828282',
        Gray4: '#BDBDBD',
        Gray5: '#C4C4C4'
      },
      fontFamily: {
        playfair: ['Playfair Display', 'sans-serif'],
        montserat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
