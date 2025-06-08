const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontSize: '2.5rem',
              fontWeight: '700',
              marginTop: '2rem',
              marginBottom: '1rem',
            },
            h2: {
              fontSize: '2rem',
              fontWeight: '700',
              marginTop: '1.5rem',
              marginBottom: '0.75rem',
            },
            h3: {
              fontSize: '1.75rem',
              fontWeight: '600',
              marginTop: '1.25rem',
              marginBottom: '0.5rem',
            },
            'ul > li': {
              position: 'relative',
              paddingLeft: '1.5em',
              marginTop: '0.25em',
              marginBottom: '0.25em',
            },
            'ul > li::before': {
              content: '""',
              width: '0.375em',
              height: '0.375em',
              position: 'absolute',
              borderRadius: '50%',
              left: '0.25em',
              top: '0.6875em',
              backgroundColor: 'currentColor',
            },
            'ol > li': {
              position: 'relative',
              paddingLeft: '1.5em',
              marginTop: '0.25em',
              marginBottom: '0.25em',
            }
          }
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}