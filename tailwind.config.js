const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./**/*.{html, js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'intro-mobile': "url('../images/bg-intro-mobile.png')",
        'intro-desktop': "url('../images/bg-intro-desktop.png')",
      }
    },
  },
  plugins: [],
}
