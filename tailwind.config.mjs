// tailwind.config.mjs
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
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
