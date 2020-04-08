module.exports = {
  theme: {
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
      "8xl": "8rem",
    },
    extend: {
      fontFamily: {
        mono: [
          "Basis Grotesque Pro",
          '"Liberation Mono"',
          '"Courier New"',
          "monospace",
        ],
      },
    },
  },
  plugins: [
    require("tailwindcss-transition")({
      standard: "all .3s ease",
      transitions: {
        slow: "all 0.7s ease",
      },
    }),
  ],
  corePlugins: {
    container: false,
  },
}
