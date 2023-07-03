/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: { sans: ["Poppins", "sans-serif"] },
    extend: {
      colors: {
        background: "#DBD3C9",
        primary: "#B4CEB3",
        primary_variant: "#88A0A8",
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
