/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./public/index.html",
    ],
    theme: {
      extend: {
        colors: {
          'tennis-green': '#78A161', // Professional tennis court color
          'court-blue': '#2C5784',   // Common tennis court color
          'warm-clay': '#E35C38',    // Clay court inspired
        },
        fontFamily: {
          sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        },
        spacing: {
          '128': '32rem',
          '144': '36rem',
        }
      },
    },
    plugins: [],
  }