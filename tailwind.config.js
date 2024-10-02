/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('/public/m-website-bg.png')",
      },
      boxShadow: {
        shadowOne: "10px 20px 19px #a5e4e6, -10px 0px 19px #daeff0",
      },
      colors: {
        primary: "#31587C",
        secondary: "#F2A341",
        redButton: "#ff4a52",
        tealButton: "#1ec6b6",
        titleColor: "#040e27",
        subTitleColor: "#aab1b7",
        bodyColor: "#212428",
        lightText: "#c4cfde",
        boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
      },
    },
  },
  plugins: [],
};
