/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('/assets/avian-bird-flu.jpg')",
      }
    },
  },
  plugins: [],
}
