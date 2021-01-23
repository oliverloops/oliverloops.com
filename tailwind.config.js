module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js", "./styles/**/*.css"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
