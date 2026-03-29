/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        // Microsoft-inspired brand colors
        misc: {
          blue: "#0078D4",
          darkBlue: "#005A9E",
          lightBlue: "#2B88D8",
          purple: "#5C2D91",
          dark: "#0f172a", // Slate-900
          darker: "#020617", // Slate-950 (True deep dark)
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "mesh-light":
          "radial-gradient(at 40% 20%, hsla(210,100%,90%,1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(260,100%,90%,1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(210,100%,95%,1) 0px, transparent 50%)",
        "mesh-dark":
          "radial-gradient(at 40% 20%, hsla(210,100%,15%,1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(260,100%,15%,1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(210,100%,10%,1) 0px, transparent 50%)",
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
