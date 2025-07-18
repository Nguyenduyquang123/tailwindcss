/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
      extend: {
         fontFamily: {
          MmFont: ['"MyFont"', 'sans-serif'],
        },
        colors:{
          primary: '#DE0200',
        },
   
      },
    },
    plugins: [],
  };
  