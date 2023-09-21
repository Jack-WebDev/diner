/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      clrBrown: "#9e7f66",
      clrGray100: "#5c6779",
      clrGray200: "#4c4c4c",
      clrGray300: "#242b37",
      clrGray400: "#17192b",
      clrGray500: "#111111",
      clrBorder: "#97979726",
      clrShadow: "#38425580",
      clrError: "#B54949",
      clrWhite: "#FFF",
    },
    fontFamily: {
      serif: ["League Spartan", "sans-serif"],
    },
    fontWeight: {
      fw300: 300,
      fw400: 400,
      fw600: 600,
      fw700: 700,
    },
    extend: {},
  },
  plugins: [],
};
