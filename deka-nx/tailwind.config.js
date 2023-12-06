
module.exports = {
  content: [
    "./apps/**/*.{js,ts,jsx,tsx}",
    "./libs/**/*.{js,ts,jsx,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/nesting'),
  ],
};