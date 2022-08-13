const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./src/**/*.{astro,html,svelte,vue,js,ts}'],
  plugins: [require('@tailwindcss/typography')],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif', ...defaultTheme.fontFamily.sans],
        mono: ['Space Mono', 'monospaced', ...defaultTheme.fontFamily.mono],
      },
      lineHeight: {
        'headline': '0.85',
        'description': '1.15rem',
      }
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.5rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
  },
  darkMode: 'media',
};
