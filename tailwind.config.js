/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fill-shop' : 'repeat(auto-fill, minmax(200px, 1fr))',
        'auto-fill-media' : 'repeat(auto-fill, minmax(240px, 1fr))',
        'auto-fill-album' : 'repeat(auto-fill, minmax(144px, 1fr))',
        'auto-fill-albumSmall' : 'repeat(auto-fill, minmax(80px, 1fr))',
      },
    },
  },
  plugins: [],
}