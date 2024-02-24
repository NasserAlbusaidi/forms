/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        'gotham': ['Gotham', 'sans-serif'],
        'gothamBold': ['gothamBold', 'sans-serif'],
        'gothamMedium': ['gothamMedium', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

