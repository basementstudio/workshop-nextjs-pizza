const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        cream: '#FFF5DC',
        pink: '#F765B8',
        teal: '#53E5D0'
      },
      fontFamily: {
        display: ['var(--font-nichrome)'],
        neon: ['var(--font-neon)']
      }
    }
  },
  plugins: []
}
