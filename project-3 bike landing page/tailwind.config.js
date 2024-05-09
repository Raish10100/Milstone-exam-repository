/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.html'],
  theme: {
    extend: {
      screens: {
        'vs' : "300px"
      }
    },
  },
  plugins: [],
}

