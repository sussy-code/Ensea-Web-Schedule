/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-orange': '#ff8f00',
        'main-orange-light': '#ffc046',
        'main-orange-dark': '#c56000',
        'main-purple': '#d500f9',
        'main-purple-light': '#ff5bff',
        'main-purple-dark': '#9e00c5',
        'second-purple': '#7c1ea3',
        'second-purple-light': '#af52d5',
        'second-purple-dark': '#4a0073',
        'third-purple': '#ffeeff',
        'third-purple-light': '#ede7f6',
        'white': '#ffffff',
      },
      gridTemplateRows: {
        '25': 'repeat(25, 4%)',
        '27': 'repeat(27, 3.7037%)',
      },
      backdropBlur: {
        'xs': '1px',
      },
      blur: {
        'xs': '1px',
      },
      spacing: {
        '0.25': '0.0625rem',
        '1/8': '12.5%',
        '-1/4': '-25%',
        '1/10': '10%',
        '1/20': '20%',
      },
      backgroundImage: theme => ({
        'Logo': "background-image: url('../public/logo.png');",
        'BackgroundENSEA': "background-image: url('https://www.ensea.fr/sites/default/files/beyond_engineering_ensea_0.png');",
      }),
      fontFamily: {
        academySTD: ["Academy Engraved STD", "sans-serif"],  // Imported in global.css
        academyLET: ["Academy Engraved LET", "sans-serif"],  // Imported in global.css
        bloggerSans: ["Blogger Sans", "sans-serif"],
        Cabin: ['Cabin Medium'],
        Chango: ['Chango, cursive'],
        marianne: ["Marianne", "sans-serif"],
        kefa: ['Kefa PressS', 'Marianne', 'sans-serif'],
        dinAlternate: ['DIN Alternate', 'Marianne'],
        dinCondensed: ['DIN Condensed', 'Marianne'],
        dinCondensedRegular: ['DIN Condensed Web', 'Marianne'],
        Charter: ['ITC Charter', 'Marianne'],
        poppins: ["Poppins", "sans-serif"],
        adelia: ["ADELIA", "cursive"],
      },
      // fontSize: {
        //   base: '1rem',
        //   sm: ['14px', '20px'],  // Font size and lineheihgt
        //   base: ['16px', '24px'],
        //   lg: ['20px', '28px'],
        //   xl: ['24px', '32px'],
        // },
      },
      gridRowStart: {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
        '18': '18',
        '19': '19',
        '20': '20',
        '21': '21',
        '22': '22',
        '23': '23',
        '24': '24',
        '25': '25',
        '26': '26',
        '27': '27',
      },
      gridRowEnd: {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
        '18': '18',
        '19': '19',
        '20': '20',
        '21': '21',
        '22': '22',
        '23': '23',
        '24': '24',
        '25': '25',
        '26': '26',
        '27': '27',
      },
    },
  plugins: [],
}