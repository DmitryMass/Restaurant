/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {},
    lineHeight: {},
    extend: {
      spacing: {},
      backgroundColor: {},
      fontSize: {
        huge: '120px',
        lg: '80px',
        h1: '60px',
        h2: '44px',
        h3: '38px',
        h4: '24px',
        h5: '20px',
        h6: '18px',
        p: '16px',
        sp: '14px',
        md: '32px',
        sm: '12px',
      },
      lineHeight: {
        lg: '80px',
        h1: '60px',
        h2: '52px',
        h3: '42px',
        h4: '28px',
        h5: '24px',
        h6: '21px',
        p: '160%',
      },
      fontFamily: {
        righteous: ['Righteous', 'cursive'],
        dancing: ['Dancing Script', 'cursive'],
      },
      backgroundColor: {
        main: '#050505',
        bookedBtn: '#111111',
        activeBtn: '#F8F8F8',
      },

      borderColor: {},
      colors: {
        goldPrimary: '#FACE8D',
        goldHover: '#a27412',
        mutted: 'rgba(255, 255, 255, 0.8)',
        black: '#050505',
        error: '#d45757',
        text: '#081212',
      },
    },
  },
  plugins: [],
};
