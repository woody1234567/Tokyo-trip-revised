import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./App.tsx",
    "./index.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "japan-red": "#E06A6A", // Softer red
        "japan-black": "#4A4A4A", // Softer black
        paper: "#F9F7F2", // Warm washi paper color
        "indigo-japan": "#5B6C8C", // Muted indigo
        sakura: "#FFE4E8", // Soft pink
        "sakura-dark": "#F0AAB8",
        matcha: "#D3D9C3", // Muted green
        "matcha-dark": "#8A9A5B",
        sand: "#EBE5CE",
      },
      fontFamily: {
        sans: ['"Zen Maru Gothic"', "sans-serif"],
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.04)",
        "inner-soft": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.03)",
      },
    },
  },
  plugins: [],
} satisfies Config;
