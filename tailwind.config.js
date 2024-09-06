/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        black: 'var(--color-black)',
        secondary: 'var(--color-secondary)',
        white: 'var(--color-white)',
        gray: 'var(--color-gray)',
        accent: 'var(--color-accent)',
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}

