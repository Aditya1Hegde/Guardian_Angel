/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gainsboro: "#d9d9d9",
        dimgray: "#515960",
        gray: {
          "100": "#262626",
          "200": "#1a1a1a",
        },
        "absolute-white": "#fff",
        "grey-70": "#b3b3b3",
        "grey-75": "#bfbfbf",
        greenyellow: "#caff33",
        "grey-11": "#1c1c1c",
        "white-shades-90": "#e3e3e8",
        darkslategray: "#333",
        red: "#ff0000",
        "absolute-black": "#000",
      },
      spacing: {},
      fontFamily: {
        lexend: "Lexend",
      },
      borderRadius: {
        "31xl": "50px",
        "81xl": "100px",
        "63xl": "82px",
        "51xl": "70px",
        "44xl": "63px",
        "6xl": "25px",
      },
    },
    fontSize: {
      sm: "14px",
      "6xl": "25px",
      base: "16px",
      "19xl": "38px",
      "11xl": "30px",
      "21xl": "40px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
