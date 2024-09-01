/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,vue,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        purista: ['Purista'],
        websymbols: ['webSymbols'],
      },
      colors: {
        'azul-arga': {
          '50': '#f0f8fe',
          '100': '#ddeefc',
          '200': '#c2e2fb',
          '300': '#98d1f8',
          '400': '#67b7f3',
          '500': '#4499ed',
          '600': '#317ee2',
          '700': '#2667cf',
          '800': '#2554a8',
          '900': '#234885',
          '950': '#1a2e51',
        },
        'amarillo-arga': {
          '50': '#fcf8ea',
          '100': '#f9efc8',
          '200': '#f4dd94',
          '300': '#edc457',
          '400': '#e7ad2e',
          '500': '#d7941b',
          '600': '#b97215',
          '700': '#945214',
          '800': '#7b4118',
          '900': '#69361a',
          '950': '#3d1b0b',
        },
      }
    },
  },
  plugins: [],
}

