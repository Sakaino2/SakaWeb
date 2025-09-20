// tailwind.config.mjs
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#3498db",
        secondary: "#2c3e50",
        background: "#ecf0f1",
        text: "#34495e",
        primaryDark: "#3498db",
        secondaryDark: "#2c3e50",
        backgroundDark: "#ecf0f1",
        textDark: "#34495e",
      },
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
        heading: ["Lato", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [typography],
};
