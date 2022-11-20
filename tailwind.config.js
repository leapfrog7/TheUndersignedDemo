/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      backgroundImage: {
        'hero': "url('../src/images/background.svg')",
        'convenience':"url('../src/images/convenience1.svg')",
        'productivity':"url('../src/images/productivity1.svg')",
        'guide':"url('../src/images/guide1.svg')",
        'searchIcon':"url('../src/images/searchIcon.png')"
      },

      colors: {
        'primary': '#16075a',
      },

      keyframes: {
        sbEnter: {
          '0%': { opacity:0 },
          '50%':{opacity:0.35},
          '100%': {  opacity:1 },
          
        },
        sbOut:{
          '0%': { opacity:1 },
          '50%':{opacity:0.50},
          '100%': {  opacity:0 },
        }
      },
      animation: {
       sbEnter: 'sbEnter 500ms ease-out',
       sbOut: 'sbOut 300ms ease-in'
      }
    },
    
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'] 
      
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms')
  ],
}
