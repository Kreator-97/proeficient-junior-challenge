/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '720px',
      lg: '960px',
      xl: '1200px'
    },
    extend: {
      colors: {
        primary: '#FD9255',
        primaryAlt: '#e77431',
        light: '#EEE',
        dark: '#06170B',
      }
    },
    fontFamily: {
      'sans': ['poppins'],
      'serif': ['poppins'],
    }
  },
  plugins: [],
}
