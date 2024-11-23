/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "main-bg": "#161513",
        "main-accent": "#4291e9",
        greyish: "#c4c4c4",
      },
    },
  },
  plugins: [],
};
