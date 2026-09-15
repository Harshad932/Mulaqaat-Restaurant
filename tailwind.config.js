/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#e11d48',
          600: '#be123c',
          700: '#9f1239',
          800: '#881337',
          900: '#6b1129',
          950: '#3f0413',
        },
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        cream: {
          50: '#ffffff',
          100: '#fffdfa',
          200: '#faf6f0',
          300: '#f4ede1',
          400: '#ece1ce',
          500: '#dfcfb7',
        }
      },
      fontFamily: {
        serif: ['"Cinzel"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(136, 19, 55, 0.08)',
        'card': '0 10px 30px -4px rgba(63, 4, 19, 0.08), 0 4px 12px -2px rgba(0, 0, 0, 0.05)',
        'gold-glow': '0 0 25px -3px rgba(217, 119, 6, 0.35)',
      }
    },
  },
  plugins: [],
}
