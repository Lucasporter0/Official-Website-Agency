import type { Config } from "tailwindcss";

export default {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#0D1B1E", accent: "#4ADE80", soft: "#F3F5F4" }
      }
    }
  },
  plugins: []
} satisfies Config;
