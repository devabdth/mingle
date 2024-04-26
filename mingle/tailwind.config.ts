import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        boxShadow: {
            header: "0 10px 30px 10px rgba(0, 0, 0, 0.15)"
        },
        colors: {
            primary: "#101010",
            secondary: "#444444",
            background: "#fff9f8",
            rose: "#efc3ca",
            pink: "#d49ba7",
            rosebackground: "#b28b95",
        },
        fontFamily: {
            primary: "Ginebra",
            secondary: "Raleway"
        },
    },
  },
  plugins: [],
};
export default config;
