/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Jura: ["Jura", "sans-serif"],
      },
      colors: {
        basicRed: "#D9280D",
        red800: "#a71c07",
        basicBlack: "#303030",
        darkRed: "#873926",
        darkRed500: "#943e29",
        dark800: "#0a0301",
        darkLight: "#f2f2f2",
      },
    },
  },
  plugins: [],
};
