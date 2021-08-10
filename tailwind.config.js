module.exports = {
  purge: [["./pages/**/*.tsx", "./components/**/*.tsx"]],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      "roboto-condensed": ['"Roboto Condensed"'],
    },
    extend: {
      colors: {
        green: {
          DEFAULT: "#00f260",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
