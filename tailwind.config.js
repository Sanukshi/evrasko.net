/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B0B0F',
        coral: {
          DEFAULT: '#FF5A4E',
          hover: '#E8473C',
          // Brand coral (#FF5A4E) is ~3:1 against white, which is fine for large
          // headings and icons. Small text and white-on-coral buttons use these
          // deeper shades to pass WCAG AA (4.5:1).
          deep: '#D63A2F',
          deeper: '#B8302A',
          soft: '#FFF1EF',
        },
        text: {
          dark: '#16161D',
          muted: '#6B6B76',
        },
        light: '#F7F7F9',
        line: '#E7E7EC',
        risk: {
          low: '#22C55E',
          medium: '#F59E0B',
          high: '#EF4444',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
      boxShadow: {
        card: '0 20px 50px -20px rgba(11, 11, 15, 0.25)',
        soft: '0 10px 30px -12px rgba(11, 11, 15, 0.15)',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        spinSlow: {
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'spin-slow': 'spinSlow 18s linear infinite',
      },
    },
  },
  plugins: [],
};
