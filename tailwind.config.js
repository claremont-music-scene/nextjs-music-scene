const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // 'media' or 'class'
  theme: {
    boxShadow: {
      orange: '0 1px 3px 0 #fe6625, 0 1px 2px 0 #fb9334',
    },
    extend: {
      colors: {
        cream: '#f7f1d7',
        twilight: '#1b292d',
        midnight: '#0a051a',
        gray: {
          DEFAULT: '#414a4f'
        },
        red: {
          light: '#ea4441',
          DEFAULT: '#c1140e'
        },
        pink: {
          DEFAULT: '#db2777'
        },
        orange: {
          light: '#fb9334',
          DEFAULT: '#fe6625'
        },
        yellow: '#efb700',
        green: {
          DEFAULT: '#00805d'
        },
        teal: {
          light: '#44857d',
          DEFAULT: '#167070'
        },
        skyblue: '#36cae8',
        blue: {
          DEFAULT: '#003d59'
        },
      },
      fontFamily: {
        'h1': ['Trend Sans One']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({addUtilities}) {

      const extendUnderline = {

        'a': {
          textDecoration: 'underline'
      },
    }

      addUtilities(extendUnderline)
    }
  ]
}