module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: ''
        },
        blue: {
          DEFAULT: '#003d59'
        },
        gray: {
          DEFAULT: '#414a4f'
        },
        orange: {
          light: '#fb9334',
          DEFAULT: '#fe6625'
        },
        teal: {
          light: '#44857d',
          DEFAULT: '#167070'
        },
        twilight: '#1b292d',
        midnight: '#0d0728',
        red: {
          light: '#ea4441',
          DEFAULT: '#c1140e'
        },
        cream: '#f7f1d7',
        green: {
          DEFAULT: '#00805d'
        },
        skyblue: '#36cae8',
        yellow: '#efb700'

      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}