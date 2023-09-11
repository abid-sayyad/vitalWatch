/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        mainBg : '#1B212C',
        secBg:'#2C3749',
        mainHighlight: '#4FD1C5',
        mainText: '#A1AEBE'

      }
    },
  },
  plugins: [],
};
