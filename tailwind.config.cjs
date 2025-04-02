/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors:{
      'white': '#ffffff',
      'very-light-gray': 'hsl(0, 0%, 98%)',
      'very-light-grayish-blue':	'#e4e5f1',
      'dark-grayish-blue': 'hsl(233, 11%, 84%)',
      'very-dark-grayish-blue': 'hsl(235, 19%, 35%)',
      'blue-selected': 'hsl(188.7,94.5%,42.7%)',
      // dark theme 
      'very-dark-Blue': 'hsl(235, 21%, 11%)',
      'very-dark-desaturated-blue': 'hsl(235, 24%, 19%)',
      'light-grayish-blue': 'hsl(234, 39%, 85%)',
      'light-grayish-blue': 'hsl(236, 33%, 92%)',
      'Dark-Grayish-Blue': 'hsl(234, 11%, 52%)',
      'Very-Dark-Grayish-Blue': 'hsl(233, 14%, 35%)',
      'Very-Dark-Grayish-Blue-2': 'hsl(237, 14%, 26%)',
    },
  
  },
  plugins: []
}
