import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: "#050505",
          card: "rgba(20, 20, 20, 0.65)",
          neon: "#39FF14",
          text: "#EDEDED",
          muted: "#9CA3AF",
          border: "rgba(57, 255, 20, 0.35)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "system-ui", "sans-serif"],
        arabic: ["var(--font-cairo)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 20px rgba(57, 255, 20, 0.25)",
        "neon-lg": "0 0 40px rgba(57, 255, 20, 0.35)",
        glass: "0 8px 32px rgba(0, 0, 0, 0.4)",
      },
      backdropBlur: { glass: "16px" },
    },
  },
  plugins: [],
};
export default config;
