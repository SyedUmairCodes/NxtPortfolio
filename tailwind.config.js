module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: "class",
  theme: {
    fontFamily: {
      "roboto-condensed": ['"Roboto Condensed"'],
    },
    extend: {
      colors: {
        green: {
          DEFAULT: "#00f260",
        },
        dark: {
          DEFAULT: "#010101",
          100: "#0a0b0e",
          200: "#16181d",
          300: "#16181d",
          500: "0f1115",
          700: "#202125",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
