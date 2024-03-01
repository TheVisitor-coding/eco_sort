/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        gothic: ['gothic', 'sans-serif'],
        'gothic-bold': ['gothic-bold', 'sans-serif'],
        'arial-rounded': ['arial-rounded-bold', 'sans-serif']
      },
      colors: {
        yellow: '#EFD600',
        'green-primary': '#17A638',
        'green-secondary': '#A3C4AA',
        'grey-primary': 'rgba(255, 255, 255, 1)'
      },
      backgroundColor: {
        'button-focus': '#F8F7F7'
      },
      borderRadius: {
        section: '32px'
      }
    }
  },
  plugins: []
}
