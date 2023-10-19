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
        "forth": "#D75A2C",
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        message: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0%)' },
        }
      },
      animation: {
        wiggle: 'wiggle 0.5s ease-out 0s 1',
        message: 'message 0.5s ease-out 0s 1',
      }
    },
    fontFamily: {
      poppins: ['poppins', 'sans-serif'],
    }
  },
  plugins: [],
}

