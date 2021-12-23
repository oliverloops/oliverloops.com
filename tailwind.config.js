module.exports = {
  content: [
    "./pages/**/*.{tsx,js}",
    "./components/**/*.{tsx,js}",
    "./styles/**/*.css",
  ],
  darkMode: "class",
  theme: {
    extend: {},
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
