module.exports = {
  content: ["./index.html"],
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
    extend: {
        container: {
        center: true
        },
        colors:{
          'primary-color': '#13998b',
          'primary-bg':'#c0faf1',
          'primary-grey':'#9aaebb4d',
          'primary-text': '#1d1d35',
          'primary-text-grey': '#dce3d0',
          'primary-btn': '#7ef8b2',
          'primary-heading': '#1984b6',
          'primary-input':'#f7fdfa'
        },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
