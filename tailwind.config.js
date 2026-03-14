/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidienne: '#1C1C1E',
        sunlight: '#FFD700',
        menthe: '#E0F2F1',
        eucalyptus: '#A8DADC',
      },
      fontFamily: {
        sans: ['Inter', 'Geist', 'sans-serif'],
      },
      letterSpacing: {
        premium: '0.05em',
      },
    },
  },
  plugins: [],
}
