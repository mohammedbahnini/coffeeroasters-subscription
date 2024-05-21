/** @type {import('tailwindcss').Config} */
export default {
  content: [
    'index.hmtl',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'fraunces': ['"Fraunces", serif'],
        'barlow': [' "Barlow", sans-serif']
      },
      colors: {
        'dark-cyan': '#0E8784',
        'cyan-hover': '#66D2CF',
        'btn-grey-disabled': '#E2DEDB',
        'dark-grey-blue': '#333D4B',
        'pale-orange': '#FDD6BA',
        'light-cream': '#FEFCF7',
        'grey': '#83888F' , 
        'grey-disabled' : '#83888F'
      } , 
      borderRadius : {
        '10' : 'border-'
      }
    },
  },
  plugins: [],
}

