/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#061121',
          950: '#040B17',
          900: '#061121',
          800: '#0C1E38',
          700: '#122A4D'
        },
        slate: {
          surface: '#0C1E38',
          elevated: '#122A4D'
        },
        gold: {
          DEFAULT: '#D6B56D',
          light: '#E5CA8A',
          deep: '#9A7428',
          muted: 'rgba(214, 181, 109, 0.16)'
        },
        tech: {
          blue: '#38BDF8',
          indigo: '#0EA5E9'
        },
        mist: {
          white: '#F4F8FC',
          gray: '#9BB2CB'
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', '"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace']
      },
      boxShadow: {
        editorial: '0 20px 55px -24px rgba(2, 12, 27, 0.72)',
        gold: '0 0 0 1px rgba(214, 181, 109, 0.3), 0 12px 32px -14px rgba(56, 189, 248, 0.25)'
      }
    }
  },
  plugins: []
};
