const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.html', './src/**/*.md'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans', ...defaultTheme.fontFamily.sans],
        serif: ['Scotch Display', ...defaultTheme.fontFamily.serif],
        hand: ['Tangerine', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui"),

  ],
};
