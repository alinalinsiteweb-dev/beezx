module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B1220",
        paper: "#F6F8FB",
        brand: "#0B3C5D",
        accent: "#FFC300"
      },
      boxShadow: {
        soft: "0 12px 40px rgba(11, 18, 32, 0.10)"
      }
    }
  },
  plugins: []
};