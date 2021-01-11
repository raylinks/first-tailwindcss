const colors = require('tailwindcss/colors')
module.exports = {
  purge: {
    mode:'layers',
    content:['./public/**/*.html','./src/**/*.vue'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        emerald:colors.orange,
        gray:colors.blue
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
