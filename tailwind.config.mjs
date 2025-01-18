/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    screens: {
      xs: '0px',
      xxs: '400px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1650px',
    },
    colors: {
      black: '#000',
      paper: '#ffffff',
      menu: '#fcf8f7',
      main: '#173C61',
      mainB: '#3F7BFE',
      primaryMain: '#2B77DB',
      primaryLight: '#eef6ff',
      primaryLight100: '#dde9fd',
      primaryDark: '#5DAFD1',
      secondaryMain: '#f4f6f8',
      secondaryDark: '#606161',
      secondaryLight: '#C6C7C7',
      grey50: '#f5f6f8',
      grey100: '#f5f5f5',
      grey200: '#eeeeee',
      grey300: '#e0e0e0',
      grey500: '#9e9e9e',
      grey600: '#757575',
      grey700: '#616161',
      grey900: '#212121',
      greyBg: '#eef2f6',
    },
    extend: {
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif'],
        cursive: ['Dancing Script', 'cursive'],
        playwrite: ['Playwrite HR Lijeva', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
