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
        'off-white': '#f5f5f5',
        'ex-white': 'e9e3d5',
        'green': '#0a7273',
        'yellow': '#fda521',
        'midnight': '#033043',
      },
      
    },
  },
  plugins: [],
};
export default config;
