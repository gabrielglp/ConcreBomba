import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '360px',   // Tamanho de tela extra pequeno
      },
      colors: {
        'green-primary': '#2A4B46',
        'gray-actived': '#a3a1a1',
        'green-border': '#2A4B46',
        'light-gray': '#f5f5f7',
        'green-btn': '#CCEC60',
        'green-title-cards': '#719D96',
        'green-title-contact': '#0FCE33',
        'gray-color': '#F7F7F7',
        'gray-color-input': '#606060'
      },
      maxWidth: {
        grid: '77.5rem',
        'text-hero': '66rem',
        'area-icon': '53.4375rem',
        'area-mockups': '59.8125rem',
        'area-cards': '82.5rem',
        'area-card-contato': '586px',
      },
      height: {
        'sectionHero': '54.625rem',
        'area-cards': '35.125rem',
        'area-cards-desk': '32.125rem',
        'area-card-contato': '657px',
      },
      backgroundImage: {
        'hero': "url('/bg-hero.svg')",
        'sobre': "url('/bg-sobre.jpg')",
      },
      borderRadius: {
        '4xl': '2rem'
      },
      gridTemplateRows: {
        'max-content': 'max-content',
      }
    },
  },
  plugins: [],
};
export default config;
