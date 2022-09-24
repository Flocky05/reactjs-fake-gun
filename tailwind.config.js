/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#9bf2e6",

          "secondary": "#119108",

          "accent": "#f2b64f",

          "neutral": "#372C3A",

          "base-100": "#F8F6F9",

          "info": "#A9B8EF",

          "success": "#0F8A69",

          "warning": "#F8BA68",

          "error": "#F46275",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
