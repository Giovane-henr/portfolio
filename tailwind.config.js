/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors:{
        'primary-300' : '#bbd2d8',
        'primary-500' : '#8adaee',
        'primary-700' : '#136e85',
        'primary-900' : '#1c4e66',
        'secondary-900' : '#ffc803'
         },
      height:{
        "hvm":"calc(100vh - 7.25rem)",
      },
      fontFamily:{
        "oxaniun": 'Oxanium, sans-serif',
      }
      
    },
  },
  plugins: [],
}

