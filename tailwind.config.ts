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
        'exwhite': 'e9e3d5',
        // 'green': '#0a7273',
        // 'green': '#0a3e73',
        'green' : '#007bff',
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
      },
      keyframes: {
        floating: {
          '0%, 100%': { transform: 'translate(0, 0px)' },
          '50%': { transform: 'translate(0, 15px)' },
        }
      },
      animation: {
        floating: 'floating 3s ease-in-out infinite' 
      },
      fontFamily: {
        cutepixel: ['CutePixel', 'sans-serif'],
        neodgm: ['neodgm', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;
