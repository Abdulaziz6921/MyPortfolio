/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    textFillColor: (theme) => theme("borderColor"),
    textStrokeColor: (theme) => theme("borderColor"),
    textStrokeWidth: (theme) => theme("borderWidth"),
    paintOrder: {
      fsm: { paintOrder: "fill stroke markers" },
      fms: { paintOrder: "fill markers stroke" },
      sfm: { paintOrder: "stroke fill markers" },
      smf: { paintOrder: "stroke markers fill" },
      mfs: { paintOrder: "markers fill stroke" },
      msf: { paintOrder: "markers stroke fill" },
    },
    fontFamily: {
      mono: ['"Courier New"', "Courier", "monospace"],
    },
    extend: {
      colors: {
        primary: "#6e6e6e",
        secondary: "#bcfd4c",
      },

      animation: {
        wiggle: "wiggle 0.8s ease-in-out 4.5s infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-15deg)" },
          "50%": { transform: "rotate(20deg)" },
        },
      },
    },
  },
  plugins: [],
};
