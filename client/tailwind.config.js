/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        loaderend1: ['Marcellus'],
        loaderbutton: ["Oleo Script"],
        mainNavbar:['Anta']
      }
    },
  },
  plugins: [],
}

