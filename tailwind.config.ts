import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'off-white': '#f2f0ef',
        'ex-white': 'e9e3d5',
        'green': '#0a7273',
        'yellow': '#fda521',
        'midnight': '#033043',
      },
      boxShadow: {
        bold_r: "10px 10px",
        bold_r_xs: "3px 3px",
        bold_r_sm: "5px 5px",
        bold_r_md: "7px 7px",
        bold_l: "-10px 10px",
        zero: "0px 0px",
      }
    },
  },
  plugins: [],
};
export default config;
