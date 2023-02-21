/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      marginBottom:{
        15: '15px',
      },
      colors:{
       primary: {
        'black': '#333333',
        'blue': '#0077b3',
        'blown':'#cc4100',
        'green':'#008053',
        'sky':'#dff2fd',
        'orange':'#fcd3b6',
        'rose':'#e8692d',
        'yellow':{
          100:"#f2efed", 
          200:"#faf7f5",
            },
       },
      },
      fontSize:{
         6: '24px'
    },
    boxShadow: {
      '3xl': "0 0 60px 0 rgb(0 0 0 / 10%)",     
    }

  }
},
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
