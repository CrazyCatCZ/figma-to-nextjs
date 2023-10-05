/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        teal: "#006b61",
        gray1: {
          "100": "rgba(0, 0, 0, 0.1)",
          "200": "rgba(255, 255, 255, 0.6)",
        },
        gold: "#ffc102",
        black: "#000",
        orangered: {
          "100": "#ff5522",
          "200": "rgba(255, 85, 34, 0.02)",
        },
        dark: "#080708",
        gray: "#6e6d7a",
        "light-gray-bg": "#f8f8f8",
        coral: "#eb763c",
      },
      spacing: {},
      fontFamily: {
        "averia-serif-libre": "'Averia Serif Libre'",
        rubik: "Rubik",
        "averia-sans-libre": "'Averia Sans Libre'",
      },
      borderRadius: {
        "131xl": "150px",
        "81xl": "100px",
        "9981xl": "10000px",
        mini: "15px",
      },
    },
    fontSize: {
      "77xl": "96px",
      base: "16px",
      "17xl": "36px",
      "13xl": "32px",
      "5xl": "24px",
      sm: "14px",
      xl: "20px",
      "45xl": "64px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
