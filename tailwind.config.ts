import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          dark: "#0A0A0F",
          light: "#F8F8FF",
        },
        surface: {
          dark: "#111118",
          light: "#FFFFFF",
        },
        border: {
          dark: "#1E1E2E",
          light: "#E2E2F0",
        },
        primary: {
          dark: "#6C63FF",
          light: "#5B52E8",
        },
        secondary: {
          dark: "#A78BFA",
          light: "#8B5CF6",
        },
        text: {
          primary: {
            dark: "#F0F0FF",
            light: "#0D0D1A",
          },
          muted: {
            dark: "#8B8BA8",
            light: "#6B6B8A",
          },
        },
      },
      fontFamily: {
        display: ["var(--font-syne)"],
        body: ["var(--font-inter)"],
        mono: ["var(--font-jetbrains-mono)"],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(to right, #6C63FF, #A78BFA, #EC4899)",
        "gradient-light": "linear-gradient(to right, #5B52E8, #8B5CF6, #D946EF)",
      },
    },
  },
  plugins: [],
};
export default config;
