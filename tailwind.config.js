/** @type {import('tailwindcss').Config} */
const defaultColors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#333",
        "main-content": "#FEFEFE",
        sub: "#000000",
        "sub-content": "#FFFFFF",

        // General Palette
        basic: "#F0F0F0",
        "basic-active": "#F0F0F0",
        "basic-content": "#000000",
        default: "#d4d4d4",
        "default-active": "#e6e6e6",
        "default-content": "#131313",
        primary: "#1266F1",
        "primary-active": "#0c56d0",
        "primary-content": "#FFFFFF",
        secondary: "#B23CFD",
        "secondary-active": "#a316fd",
        "secondary-content": "#FFFFFF",
        success: "#00B74A",
        "success-active": "#00913b",
        "success-content": "#FFFFFF",
        info: "#39C0ED",
        "info-active": "#16b5ea",
        "info-content": "#ffffff",
        warning: "#FFA900",
        "warning-active": "#d99000",
        "warning-content": "#ffffff",
        danger: "#F93154",
        "danger-active": "#f80c35",
        "danger-content": "#ffffff",
        link: "#39C0ED",
        "link-active": "#39C0ED",
        "link-content": "#ffffff",
        light: "#FBFBFB",
        "light-active": "#e6e6e6",
        "light-content": "#262626",
        dark: "#262626",
        "dark-active": "#131313",
        "dark-content": "#FBFBFB",

        ...defaultColors,
      },
    }, // END::Extend
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      jm: { max: "479px" },
      xs: { max: "319px" },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/line-clamp"),
    function ({ addVariant }) {
      addVariant("custom-variant", "& *", "& + *");
    },
  ],
};
