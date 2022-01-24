const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      gilroyBold: ["gilroy-bold"],
      gilroy: ["gilroy"],
      p: ["montserrat-regular"],
    },

    colors: {
      // l stands for light theme, d stands for dark theme
      transparent: "transparent",
      current: "currentColor",
      lprimary: "#003060",
      lsecondary: "#055C9D",
      error: "#e76f51",
      ltext: "black",
      lbg: "white",
    },
    screens: {
      xs: "320px",
      xl3: "2500px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
