/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        navBg:"#E9F6F8",
        footerBg:"#1797AD",
        mainText:"#402109",
        activeText:"#AD5A17",
        test:"#041851",
        testBg:"#C4C4C4"

      },
      backgroundImage: {
        'hero': "url('./src/assets/background.JPG')",
  
      }
    },
  },
  plugins: [],
}