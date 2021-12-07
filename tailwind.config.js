module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px'
    },
    fontFamily:{
      Fraunces: ['Fraunces', 'sans-serif'],
      Bai: ['Bai Jamjuree', 'sans-serif'],
      Acme:['Acme', 'sans-serif'],
      Poppins: ['Poppins', 'sans-serif']
    }, 
     colors:{
      'primary-color': '#18a364',
      'primary-accent': '#deb887',
      'primary-hover': '#ce7b00',
      'primary-bg':'#c0faf1',
      'primary-grey':'#f1fff8',//#9aaebb4d,
      'primary-text': '#1d1d35',
      'primary-text-grey': '#dce3d0',
      'primary-btn': '#7ef8b2',
      'primary-heading': '#1984b6',
      'primary-input':'#f7fdfa'
    },
    extend: {
      container: {
        center: true
        },
        
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
;

