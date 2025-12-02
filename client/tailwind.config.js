/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        hotPink: '#FF69B4',
        lime: '#32CD32',
        sunshine: '#FFD700',
        surf: '#40E0D0',
        ink: '#1E1E1E',
      },
      fontFamily: {
        script: ['"Dancing Script"', '"Pacifico"', 'cursive'],
        hand: ['"Caveat"', 'cursive'],
        body: ['"Montserrat"', '"Open Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'dot-grid':
          'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.08) 1px, transparent 0)',
      },
      backgroundSize: {
        'dot-grid': '32px 32px',
      },
      dropShadow: {
        splash: '0 35px 65px rgba(255,105,180,0.3)',
      },
      borderRadius: {
        '4xl': '2.5rem',
      },
    },
  },
  plugins: [],
};

