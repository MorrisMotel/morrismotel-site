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
    },
  },
  darkMode: 'media',
};
