/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "gray-20": "#DDF5F7",
        "gray-50": "#C0D9E5",
        "gray-100": "#44679F",
        "gray-500": "#3B577D",
        "primary-100": "#AAD8D3",
        "primary-300": "#00ADB5",
        "primary-500": "#393E46",
        "secondary-400": "#FFCD5B",
        "secondary-500": "#FFC132",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred":
          "linear-gradient(90deg, #AAD8D3 0%, #00ADB5 100%)",
        "mobile-home": "url('/assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        evolvetext: "url('/assets/EvolveText.png')",
        abstractwaves: "url('/assets/AbstractWaves.png')",
        sparkles: "url('/assets/Sparkles.png')",
        circles: "url('/assets/Circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
}
