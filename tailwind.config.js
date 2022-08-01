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
        sans: ["IBM Plex Sans", "Inter", ...fontFamily.sans],
        serif: ["IBM Plex Serif", ...fontFamily.serif],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
