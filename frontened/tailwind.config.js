/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#001E2B',   // Dark MongoDB header/nav
        secondary: '#00ED64', // MongoDB green
        accent: '#13AA52',
        background: '#F7FAF9',
        light: '#E8F5E9'
      },
    },
  },
  plugins: [],
}
