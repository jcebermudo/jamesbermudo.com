const { spacing, fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  darkmode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Moderat"],
        display: ["Redaction35"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
