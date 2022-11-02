/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        "signin-background": "url('https://cdn.discordapp.com/attachments/1031834305703460906/1037447936616964136/bg.png')"
      },
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
