/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        black: { "50": "#171B26", "100": "#161928", "200": "#202538", "300":"#333B59", "400":"#485173","500":"#666c85" },
        primary : {"100": "#202753","200":"#4D2D90","300":"#622fcc"}
      }
    },
    fontFamily: {
      'body': [
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
      ]
    }
  },
  plugins: [],
}