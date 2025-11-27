/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Poster-theme colors
        "sg-blue": "#1e3a8a",        // main deep blue
        "sg-blue-dark": "#162c6e",   // darker blue for headings
        "sg-cream": "#f6e0b8",       // 🔶 slightly darker cream
        "sg-gold": "#d4af37",        // gold accent
      },
      boxShadow: {
        poster: "0 20px 45px rgba(0,0,0,0.12)",
      },
    },
  },
  plugins: [],
};
