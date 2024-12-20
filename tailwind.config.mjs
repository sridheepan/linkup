/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#000',
        white: '#fff',
        paper: '#f4edea',
        menu: '#fcf8f7',
        primaryMain: '#003366',
        primaryLight: '#002244',
        primaryDark: '#001F33',
        secondaryMain: '#FFCC00',
        secondaryHigh: '#FFB400',
        secondaryLight: '#FFEC99',
        secondaryMuted: '#FFD700',
      },
    },
  },
  plugins: [],
};
