/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        "signin-background": "url('https://cdn.discordapp.com/attachments/1031834305703460906/1037447936616964136/bg.png')",
        "hero-bg": "url('https://images.unsplash.com/photo-1561715276-a2d087060f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
        "home-page-for-signed-in-users": "url('https://verloop.io/wp-content/uploads/E-commerce-Gains-From-Customer-Support-Automation-During-Covid-19.png')"
      },
      colors: {
        primary: '#16425B',
        secondary: '#2F6690',
        tertiary: '#81C3D7',
        background: '#D9DCD6'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      transitionDuration: {
        '0': '0ms',
      },
      maxHeight: {
        "100": '26rem',
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
    ],
  },
};
