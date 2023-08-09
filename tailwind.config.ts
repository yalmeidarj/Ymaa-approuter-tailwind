import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "ymaa-green": "#577830",
        "light-green": "#A9C4A5",
        "green-lighter": "#CBE3CB",
        "mid-green": "#789661",
        "green-dark": "#1B4332",
        orange: "#FF685F",
        "dark-orange": "#CC553D",
        "light-orange": "#FFA89C",
        "light-color": "#F5F5DC",
        brown: "#211C15",
        "light-brown": "#58483A",
        "gray-dark": "#273444",
        "gray-light": "#BBC0C7",
        white: "#f4f4f4",
        black: "#211C15",
      },
    },
  },
  plugins: [],
};
export default config;
