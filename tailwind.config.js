const twcolors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {

          colors: {
              transparent: 'transparent',
              current: 'currentColor',
              black: twcolors.black,
              white: twcolors.white,
              gray: twcolors.trueGray,
              indigo: twcolors.indigo,
              red: twcolors.red,
              yellow: twcolors.amber
          }

  },
  variants: {
    extend: {}
  },
  plugins: []
}
