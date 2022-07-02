module.exports = {
  content: [
    "./pages/**/*.{tsx,js}",
    "./components/**/*.{tsx,js}",
    "./styles/**/*.css",
  ],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        handmove: {
          "0%, 100%": { transform: "rotate(-8deg)" },
          "50%": { transform: "rotate(8deg)" },
        },
      },
      animation: {
        handmove: "handmove 1.5s ease-in-out 1s infinite",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
