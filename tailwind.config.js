/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      '2lg': ['4rem','4rem'],
      'lg': ['2.5rem', '2.625rem'],
      '2md': ['1rem', '1.75rem'], 
      'md': ['0.875rem', '1.75rem'], 
      'sm': ['0.875rem', '1.375rem'], 
      'xs': ['0.875rem', '1'],
    },

    letterSpacing: {
      'wide': '0.667rem',
      'wider': '1.0825rem'
    }, 

    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'desaturated-red': "hsl(0, 36%, 70%)",
        'soft-red': "hsl(0, 93%, 68%)",
        'dark-grayish-red': "hsl(0, 6%, 24%)"
      },

      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        'gradient-mobile':"linear-gradient(135deg, 	hsl(0, 0%, 100%) 0%, hsl(0, 100%, 98%) 100%)",
        'gradient-desktop': "url('./src/assets/bg-pattern-desktop.svg'), linear-gradient(135deg, 	hsl(0, 0%, 100%) 0%, hsl(0, 100%, 98%) 100%)",
        'gradient-button': "linear-gradient(135deg, hsla(0, 80%, 86%, 1), hsl(0, 74%, 74%))"
      },
      screens: {
        "desktop": "1440px"
      }
    },
  },
  plugins: [],
}