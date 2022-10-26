/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0A2239',
        secondary: '#53A2BE',
        accent: '#0D2225',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
    plugins: [],
  },
};
