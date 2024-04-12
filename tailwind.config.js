/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#316195",
      secondary: "#f99c24",
      teritiary: "#f1f5f9",
      white: "#ffffff",
      black: "#000000",
    },
    extend: {
      fontFamily: {
        "Maison-Neue": ["Maison-Neue", "sans-serif"],
        "Interphases-reqular": ["Interphases-reqular", "sans-serif"],
        "Interphases-light": ["Interphases-light", "sans-serif"],
      },
    },
  },
  plugins: [],
};
