/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: { sans: ["Poppins"] },
    extend: {
      colors: {
        background: "#ededed",
        primary: "#95d4e8",
        primary_varient: "#1f29e0",
        attention: "#546A76",
      },
    },
    borderRadius: {
      "4xl": "2rem",
    },
    screens: {
      sm: "480px",

      md: "547px",

      lg: "768px",

      xl: "1024px",

      "2xl": "1680px",
    },
  },
  plugins: [],
};
