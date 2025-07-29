/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#f1b24f',
      },
      screens: {
        '3xl': '2560px',
      },
    },
  },
  plugins: [],
};
