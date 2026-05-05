/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        carbon: { 950: '#08090B', 900: '#0C0D10', 800: '#13151A', 700: '#1B1E25', 600: '#262932', 500: '#3A3F4B' },
        crimson: { 300: '#F87171', 400: '#DC2626', 500: '#B91C1C', 600: '#991B1B', 700: '#7F1D1D', 800: '#660D0D', 900: '#450A0A' },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(185,28,28,0.35), 0 14px 40px -12px rgba(139,0,0,0.55)',
        luxe: '0 30px 80px -30px rgba(0,0,0,0.85), inset 0 1px 0 rgba(255,255,255,0.04)',
        soft: '0 20px 50px -20px rgba(0,0,0,0.6)',
        rim: 'inset 0 0 0 1px rgba(255,255,255,0.06)',
      },
      backgroundImage: {
        'grid-faint': 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)',
        'crimson-gradient': 'linear-gradient(135deg,#B91C1C 0%,#8B0000 55%,#5C0808 100%)',
        'rim-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.02) 40%, rgba(185,28,28,0.18))',
      },
      keyframes: {
        pulseGlow: { '0%,100%': { boxShadow: '0 0 0 0 rgba(37,211,102,0.55)' }, '50%': { boxShadow: '0 0 0 18px rgba(37,211,102,0)' } },
        floatY: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } },
        sheen: { '0%': { transform: 'translateX(-120%)' }, '100%': { transform: 'translateX(220%)' } },
      },
      animation: {
        pulseGlow: 'pulseGlow 2.2s ease-out infinite',
        floatY: 'floatY 6s ease-in-out infinite',
        sheen: 'sheen 2.4s ease-in-out infinite',
      },
      letterSpacing: { ultratight: '-0.04em' },
    },
  },
  plugins: [],
};
