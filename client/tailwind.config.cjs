/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      body: ['Montserrat']
    },
    extend: {}
  },
  plugins: [require('@tailwindcss/line-clamp'), require('@tailwindcss/forms')]
}
