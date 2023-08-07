/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   theme: {
     extend: {},
     colors: {
      'primary-color': '#fcf2ff',
      'secondary-color': '#efd9ff'
     }
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }
