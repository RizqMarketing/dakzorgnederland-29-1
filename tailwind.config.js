/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#e6f7ed',
          100: '#c2ebd3',
          200: '#8fd9af',
          300: '#5cc88b',
          400: '#2db86d',
          500: '#00a550',
          600: '#008c44',
          700: '#007338',
          800: '#005a2c',
          900: '#004120',
        }
      }
    },
  },
  plugins: [],
};
