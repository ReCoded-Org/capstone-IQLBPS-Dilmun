/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#16425B',
        secondary:'#2F6690',
        tertiary: '#81C3D7',
        background: '#D9DCD6'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
    plugins: [],
  },
};
