import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#fff",
      gray: '#D9D9D9',
      'dark-terra-cotta': '#cb4b3d',
      'royal-blue': '#404ed9',
      'middle-pink': '#e37caf',
      'dark-sienna': '#3a1b0f',
    },
    fontFamily: {
      California: ['var(--font-california)', 'sans-serif'],
      Gill: ['var(--font-gill-regular)', 'var(--font-gill-bold)', 'sans-serif'],
      GillLight: ['var(--font-gill-light)', 'sans-serif'],
    },
    extend: {
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
