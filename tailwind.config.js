/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./index.html"
  ],

  theme: {
    extend: {
      colors: {
        primary: {
          'dark-blue': 'hsl(219, 37, 17)',
          'blue': 'hsl(212, 29, 36)',
          'grey': 'hsl(214, 23, 56)',
        },
        neutral: {
          'off-white': 'hsl(75, 6, 87)',
          'very-dark-blue': 'hsl(211, 92, 5)',
        },
      },
      fontFamily: {
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        paragraph: '15px',
      },
    },
  },
  plugins: [],
}

