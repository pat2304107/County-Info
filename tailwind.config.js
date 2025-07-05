/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#23272a', // 深灰接近黑
          light: '#2c2f33',
          dark: '#18191a',
        },
        secondary: {
          DEFAULT: '#88898a', // 較淺灰
        },
      },
    },
  },
  plugins: [],
};
