import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        colors: {
            primary: "#101010",
            secondary: "#444444",
            background: "#f9f9f9",
            rose: "#efc3ca",
            pink: "d49ba7",
            whiterose: "#faa943",
            rosebackground: "#fff0f5",
        },
        fontFamily: {
            primary: "Ginebra",
            secondary: "Montserrat"
        },
    },
  },
  plugins: [],
};
export default config;
