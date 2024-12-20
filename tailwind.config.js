/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html",
    "!./node_modules/**/*.{html,js}",
    "./src/assets/ts/*",
  ],
  theme: {
    extend: {
      fontSize: {
        xs: ".75rem",
      },
      backgroundImage: {
        "step-side":
          "url(/src/assets/images/step-side.jpg),linear-gradient(175deg, #85cca9 -2.29%, #216a4e 147.59%);",
      },
      screens: {
        lg: "1150px",
        md: "950px",

        xs: "450px",
      },
      colors: {
        brown: "#5D2D05",
        "light-brown": "#895027",
        disabled: "rgba(35,25,23,0.35)",
        gray: {
          50: "#F7FAF6",
          100: "#ECEFEA",
          200: "#E0E3DF",
          500: "#6F7973",
          600: "#3F4943",
          300: "#BFC9C1",
          400: "#B7B7B7",
          900: "#191C1A",
        },
        green: {
          200: "#E8FFF0",
          300: "#85CCA9",
          400: "#8ED5B2",
          950: "#003725",
          800: "#216A4E",
          500: "#7EC5A3",
        },
        orange: {
          50: "#FFF1ED",
          100: "#FFDAD6",
          200: "#FFDCC7",
          400: "#FFBE94",
        },
      },
      fontSize: {
        "3.5xl": "2rem",
      },

      backgroundSize: {
        bigSmall: "contain cover",
      },
    },
  },
  plugins: [],
};
