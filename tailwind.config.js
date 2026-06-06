/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Brand palette
        blush: {
          DEFAULT: '#FFBBE7',
          50: '#FFF4FB',
          100: '#FFE9F6',
          200: '#FFD4EF',
          300: '#FFBBE7',
          400: '#FF94D8',
          500: '#F86CC6',
        },
        sky: {
          DEFAULT: '#BDE0FE',
          50: '#F3F9FF',
          100: '#E5F2FF',
          200: '#D2E9FF',
          300: '#BDE0FE',
          400: '#8FC7FB',
          500: '#5FA8F2',
        },
        ink: {
          DEFAULT: '#2A2433',
          soft: '#5B5466',
          muted: '#8A8394',
        },
        cream: '#FFFCF9',
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(42, 36, 51, 0.18)',
        glow: '0 0 0 1px rgba(255,255,255,0.6), 0 18px 50px -16px rgba(248, 108, 198, 0.45)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
}
