/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#f0f4ff',
          100: '#dce6ff',
          200: '#b9ccff',
          300: '#85a5ff',
          400: '#4a74ff',
          500: '#1a46f5',
          600: '#0a2ecb',
          700: '#0a23a3',
          800: '#0e1e7a',
          900: '#0d1957',
          950: '#080f36',
        },
        slate: {
          850: '#1a2332',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"DM Sans"', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
