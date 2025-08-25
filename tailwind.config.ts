import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0D1B1E", // deep ink
          accent: "#4ADE80",  // calm green accent
          soft: "#F3F5F4"     // near-white
        }
      },
      borderRadius: {
        "2xl": "var(--radius)"
      }
    }
  },
  plugins: []
};

export default config;
