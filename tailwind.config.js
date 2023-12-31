/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'brgreen':'#054a29',
        'dsgreen':'#137547',
        'fgreen': '#2a9134',
        'pgreen': '#3fa34d',
        'emerald': '#5bba64',
      }
    },
  },
  plugins: [],
}

