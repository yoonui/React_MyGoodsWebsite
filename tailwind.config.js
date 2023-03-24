/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-color": "#337EB8",
        footer: "#9A9A9A",
        "secondary-color": "#2AB8A9",
        "secondary-color-bold": "#23998D",
      },
      fontFamily: {
        Kim300: ["KimjungchulGothic-Light", "sans-serif"],
        Kim400: ["KimjungchulGothic-Regular", "sans-serif"],
        Kim700: ["KimjungchulGothic-Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
