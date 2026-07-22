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
        bg: '#151312',
        purple: '#9D4CCC',
        gray: '#998f8f',
        'dark-gray': '#6a6b6e',
        'soft-gray': 'rgba(182,180,189,0.20)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      maxWidth: {
        content: '1140px',
      },
      boxShadow: {
        card: '0px 18px 50px -24px rgba(157,76,204,0.75)',
        profile: '0px 30px 80px -46px rgba(157,76,204,0.55)',
      },
    },
  },
  plugins: [],
};
export default config;
