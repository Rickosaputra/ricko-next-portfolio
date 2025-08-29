/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: { brand: { DEFAULT: '#6366F1', dark: '#4F46E5', light: '#A5B4FC' } },
      boxShadow: { soft: '0 10px 30px -10px rgba(0,0,0,0.15)' },
    },
  },
  plugins: [],
};
