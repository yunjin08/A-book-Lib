/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1300px'
    },
    extend: {
      width: {
        '22rem': '22rem',
      },
    },
  },
  plugins: [],
}

