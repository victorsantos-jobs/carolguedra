/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
          roxo: '#6B21A8',      // Roxo intenso
          dourado: '#FFD700',   // Dourado brilhante
          branco: '#FFFFFF',     // Branco puro
        },
        fontFamily: {
          tarot: ['"Cinzel"', 'serif'], // Fonte elegante, mística
        },
      },
    },
    plugins: [],
  }
  