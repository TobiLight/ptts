module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#3d9c4d",
        secondary: "#096e09",
        "green-ptts": "#005A31",
      },
      fontFamily: {
        "nanum-pen": ["Nanum Pen Script", "cursive"],
      },
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "50%": "50%",
      "200%": "200%",
    },
  },
  plugins: [],
};
