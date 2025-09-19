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
      },
      fontFamily: {
        // 'sans' is the primary font, usually for body text
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
        // 'serif' or another custom name for headings
        heading: ["Lato", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
