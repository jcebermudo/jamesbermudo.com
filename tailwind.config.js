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
        sans: ["Inter"],
        display: ["Redaction35", "Inter"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
