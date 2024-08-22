import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#3A86FF",
        secondaryColor: "#FFBF3B",
        bgColor: "#ffffff",
        textColor: "#343A40",
        accentColor: "#8338EC",
        errorColor: "#EF233C",
      },
      fontFamily: {
        urbanist: ["var(--font-urbanist)"],
        jost: ["var(--font-jost)"],
      },
    },
  },
  plugins: [],
};
export default config;
