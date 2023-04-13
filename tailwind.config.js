const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "layouts/**/*.{vue,js}",
    "components/**/*.{vue,js}",
    "pages/**/*.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EA3A3A",
        dark: "#0D0D0D",
        light: "#B0B0B7",
      },
      aspectRatio: {
        "3/4": "3 / 4",
      },
      fontFamily: {
        headline: "'Inter', sans-serif",
      },
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  //plugins: [require("@tailwindcss/typography")],
};
