/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: { "main-color": "#337EB8", footer: "#9A9A9A" },
      fontFamily: {
        Kim300: ["KimjungchulGothic-Light", "sans-serif"],
        Kim400: ["KimjungchulGothic-Regular", "sans-serif"],
        Kim700: ["KimjungchulGothic-Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
