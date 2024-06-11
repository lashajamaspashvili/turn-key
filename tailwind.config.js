/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        lg: "1150px",
        xs: "350px",
      },
    },
    fontFamily: {
      sans: ["Inter, sans-serif"],
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
