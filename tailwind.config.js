/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdfcf6',
          100: '#f9f4e1',
          200: '#f1e6bc',
          300: '#e6d18d',
          400: '#d9b65d',
          500: '#c5a028',
          600: '#a6821e',
          700: '#85641c',
          800: '#6d521d',
          900: '#5d461e',
          950: '#36270d',
        },
        gold: {
          light: '#F3E5AB',
          DEFAULT: '#D4AF37',
          dark: '#996515',
        },
        dark: {
          DEFAULT: '#0a0a0a',
          lighter: '#1a1a1a',
          accent: '#262626',
        }
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
