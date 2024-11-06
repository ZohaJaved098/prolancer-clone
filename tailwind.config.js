/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes:{
        slideInDown: {
          '0%': { 
            opacity: 0,
            transform: 'translateY(-20px)'
           },
          '100%': { 
            
            opacity: 1,
            transform: 'translateY(0)'
           },
        },
      },
      animation: {
        slideInDown: 'slideInDown 1.2s ease-in-out forwards', 
      },
      backgroundImage: {
        'gradient-bg':  'linear-gradient(280deg, #6787FE 0%, #0F1B63 100%)',
      },
      boxShadow: {
        'select-shadow': '0 0 0 .25rem rgba(13, 110, 253, .25)',
        'container-shadow': '0 0.125rem 0.25rem rgb(0 0 0 / 8%)',
      }

    },
  },
  plugins: [],
}