/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#4547BF",
        "secondary": "#ADADAD",
        "third": "#3A3845",
      }
    },
    fontFamily: {
      poppins: ['poppins', 'sans-serif'],
    }
  },
  plugins: [],
}

