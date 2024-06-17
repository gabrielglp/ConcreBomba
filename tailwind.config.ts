import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-primary': '#2A4B46',
        'gray-actived': '#a3a1a1',
        'green-border': '#2A4B46',
        'light-gray': '#f5f5f7',
        'green-btn': '#CCEC60'
      },
      maxWidth: {
        grid: '77.5rem',
        'text-hero': '66rem'
      },
      height: {
        'sectionHero': '54.625rem'
      }
    },
  },
  plugins: [],
};
export default config;
