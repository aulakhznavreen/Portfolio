/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        peach: "#FFF7F5",
        coral: "#FF6B6B",
        purple: "#6C63FF",
        lavender: "#F3F0FF",
        charcoal: "#1F2937",
      },
    },
  },
  plugins: [],
};