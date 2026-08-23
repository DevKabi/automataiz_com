import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        surface: "#0A0A0A",
        surfaceElevated: "#121212",
        brand: {
          green: "#18B300",
          lime: "#75B800",
          gold: "#F4C800",
          yellow: "#FFD200",
          silver: "#E6E6E6",
          black: "#050505",
        },
        glass: {
          bg: "rgba(255, 255, 255, 0.04)",
          bgHover: "rgba(255, 255, 255, 0.07)",
          border: "rgba(255, 255, 255, 0.08)",
          borderBright: "rgba(255, 255, 255, 0.18)",
          glowGreen: "rgba(24, 179, 0, 0.35)",
          glowGold: "rgba(255, 210, 0, 0.3)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "primary-gradient": "linear-gradient(135deg, #18B300 0%, #75B800 50%, #F4C800 100%)",
        "secondary-gradient": "linear-gradient(135deg, #18B300 0%, #FFD200 100%)",
        "green-gold-gradient": "linear-gradient(90deg, #18B300 0%, #F4C800 100%)",
        "glow-conic": "conic-gradient(from 180deg at 50% 50%, #18B300 0deg, #75B800 120deg, #FFD200 240deg, #18B300 360deg)",
      },
      boxShadow: {
        "glow-green": "0 0 40px -10px rgba(24, 179, 0, 0.5)",
        "glow-gold": "0 0 40px -10px rgba(255, 210, 0, 0.4)",
        "glow-mixed": "0 0 50px -10px rgba(24, 179, 0, 0.3), 0 0 50px -10px rgba(255, 210, 0, 0.3)",
        "glass-inset": "inset 0 1px 1px 0 rgba(255, 255, 255, 0.15)",
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "float-delayed": "float 7s ease-in-out 2s infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
        "scan-line": "scanLine 8s linear infinite",
        "spin-slow": "spin 20s linear infinite",
        "shimmer": "shimmer 2.5s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.04)" },
        },
        scanLine: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
