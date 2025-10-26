/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'singari-purple': '#5227FF',
        'singari-light-purple': '#B19EEF',
        'singari-bg-light': '#F8F9FB',
        // Official color palette
        'singari': {
          'navy': '#08225A',      // Darkest blue
          'blue-dark': '#3C4785',  // Dark blue
          'blue': '#696FB2',       // Medium blue
          'blue-light': '#979BE2', // Light blue
          'lavender': '#C6C9FF',   // Lightest lavender
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
