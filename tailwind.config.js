/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B1220',
          950: '#070C16',
          900: '#0B1220',
          800: '#111C2D',
          700: '#18273E'
        },
        slate: {
          surface: '#111C2D',
          elevated: '#16243A'
        },
        gold: {
          DEFAULT: '#D6B56D',
          light: '#E3C684',
          deep: '#9A7428',
          muted: 'rgba(214, 181, 109, 0.14)'
        },
        tech: {
          blue: '#38BDF8',
          indigo: '#3B82F6'
        },
        mist: {
          white: '#F5F7FA',
          gray: '#9AA9BC'
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', '"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace']
      },
      boxShadow: {
        editorial: '0 18px 50px -24px rgba(0, 0, 0, 0.55)',
        gold: '0 0 0 1px rgba(214, 181, 109, 0.25), 0 12px 30px -14px rgba(214, 181, 109, 0.2)'
      }
    }
  },
  plugins: []
};
