/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#05070d',
          900: '#080b14',
          850: '#0b1020',
          800: '#0f152a',
          700: '#161d36',
        },
        sf: {
          50: '#eaf5ff',
          100: '#cfe9ff',
          200: '#9fd3ff',
          300: '#66b8ff',
          400: '#2e9bf5',
          500: '#0176d3',
          600: '#015fad',
          700: '#014b8a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(1,118,211,0.25), 0 20px 60px -20px rgba(1,118,211,0.45)',
        card: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 24px 60px -32px rgba(0,0,0,0.9)',
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to bottom, rgba(5,7,13,0) 0%, rgba(5,7,13,0.85) 70%, #05070d 100%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-ring': {
          '0%': { opacity: '0.6', transform: 'scale(0.9)' },
          '100%': { opacity: '0', transform: 'scale(1.6)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        caret: { '0%,100%': { opacity: '1' }, '50%': { opacity: '0' } },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both',
        float: 'float 6s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2.4s ease-out infinite',
        marquee: 'marquee 28s linear infinite',
        caret: 'caret 1.1s steps(1) infinite',
      },
    },
  },
  plugins: [],
};
