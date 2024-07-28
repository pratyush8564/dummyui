/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        '92': '92px', // Add a custom spacing value
      },
    },
  },
  plugins: [],
}