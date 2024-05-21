/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        'cinzabg': '#1f1f1f',
        'vermelho-button': '#C10007',

      }
    },
  },
  plugins: [require('tailwind-hamburgers')],
}

