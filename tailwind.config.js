/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        carbon: {
          950: '#08090B',
          900: '#0C0D10',
          800: '#13151A',
          700: '#1B1E25',
          600: '#262932',
        },
        ember: {
          400: '#FFB347',
          500: '#FF8A1C',
          600: '#F26B0A',
          700: '#C75204',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,138,28,0.35), 0 10px 40px -10px rgba(255,138,28,0.55)',
        soft: '0 20px 50px -20px rgba(0,0,0,0.6)',
      },
      backgroundImage: {
        'grid-faint': 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)',
        'ember-gradient': 'linear-gradient(135deg,#FF8A1C 0%,#F26B0A 50%,#C75204 100%)',
      },
      keyframes: {
        pulseGlow: {
          '0%,100%': { boxShadow: '0 0 0 0 rgba(37,211,102,0.55)' },
          '50%': { boxShadow: '0 0 0 18px rgba(37,211,102,0)' },
        },
        floatY: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        pulseGlow: 'pulseGlow 2.2s ease-out infinite',
        floatY: 'floatY 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
