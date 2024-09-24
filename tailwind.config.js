module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        purple: {
          500: '#8B5CF6',
          700: '#6D28D9',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}