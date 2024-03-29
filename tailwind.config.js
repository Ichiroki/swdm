/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      transitionProperty: {
        'width': 'width',
      }
    },
    container: {
      center: true,
    }
  },
  plugins: [],
}

