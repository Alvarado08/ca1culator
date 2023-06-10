/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "Poppins": "Poppins, sans-serif"
      },
      colors: {
        yankeeBlue: "#14213D",
        silver: "#CCCAC9",
        tangerine: "#FCA311",
        glacier: "#CCE9E4",
        crimson: "#A91D36"
      }
    },
  },
  plugins: [],
}

