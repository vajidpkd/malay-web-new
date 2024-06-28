/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "22px"],
      base: ["16px", "24px"],
      lg: ["18px", "28px"],
      xl: ["20px", "28px"],
      small: ["10px", "12px"],
      "2xl": ["24px", "32px"],
      "3xl": ["32px", "30px"],
      "4xl": ["45px", "42px"],
      "6xl": ["48px", "52px"],
      "8xl": ["60px", "60px"],
      "8xlxl": ["66px", "60px"],
    },
    extend: {
      colors: {
        black: "#1c1c1c",
        text: "#000003",
        light_gray: "#d9d9d9",
        light_gray_600: "#E8E8E8",
        light_white: "#F9F9F9",
        background: "#fbfbfe",
        primary: "#9C0105",
        light_red: "#FFF6F6",
        secondary: "#f7f1f8",
        accent: "#BEBEBE",
      },

      fontFamily: {
        Urbanist: "'Urbanist', sans-serif",
        DMSerifText: "'DM Serif Text', serif",
      },

      boxShadow: {
        "3xl": "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        "4xl":
          "0 2px 8px -2px hsla(0, 0%, 9%, 0.08), 0 8px 12px -2px hsla(0, 0%, 9%, 0.16)",
        "40xl": "rgba(149, 157, 165, 0.1) 0px 8px 24px",
        "5xl": "122px 0px 300px -81px rgb(175, 60, 144,0.44)",
        "6xl":
          "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
      },
    },
    scale: ["hover", "focus"],
  },
  plugins: [],
};
