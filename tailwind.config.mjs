/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '0px',
      // => @media (min-width: 0px) { ... }

      xxs: '400px',
      // => @media (min-width: 400px) { ... }

      sm: '600px',
      // => @media (min-width: 600px) { ... }

      md: '900px',
      // => @media (min-width: 900px) { ... }

      lg: '1200px',
      // => @media (min-width: 1200px) { ... }

      xl: '1650px',
      // => @media (min-width: 1650px) { ... }
    },
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
      grey50: '#fafafa',
      grey100: '#f5f5f5',
      grey200: '#eeeeee',
      grey300: '#e0e0e0',
      grey500: '#9e9e9e',
      grey600: '#757575',
      grey700: '#616161',
      grey900: '#212121',
      greyBg: '#eef2f6',
    },
    extend: {},
  },
  plugins: [],
};
