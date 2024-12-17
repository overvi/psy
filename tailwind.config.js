/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html",
    "!./node_modules/**/*.{html,js}",
    "./src/assets/ts/*",
  ],
  theme: {
    extend: {
      screens: {
        lg: "1150px",
        md: "950px",
        xs: "420px",
      },
      colors: {
        brown: "#5D2D05",
        gray: {
          50: "#F7FAF6",
          100: "#ECEFEA",
          500: "#6F7973",
          300: "#BFC9C1",
          900: "#191C1A",
        },
        green: {
          300: "#85CCA9",
          950: "#003725",
          500: "#216A4E",
        },
        orange: {
          100: "#FFDAD6",
          400: "#FFBE94",
        },
      },
      fontSize: {
        "3.5xl": "2rem",
      },
    },
  },
  plugins: [],
};
