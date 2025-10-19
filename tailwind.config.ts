import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        
        // Costa Rica Recovery Brand Palette
        orange: {
          "extra-light": "var(--color-orange-extra-light)",
          light: "var(--color-orange-light)",
          DEFAULT: "var(--color-orange)",
          dark: "var(--color-orange-dark)",
          "extra-dark": "var(--color-orange-extra-dark)",
        },
        navy: {
          "extra-light": "var(--color-navy-extra-light)",
          light: "var(--color-navy-light)",
          DEFAULT: "var(--color-navy)",
          dark: "var(--color-navy-dark)",
          "extra-dark": "var(--color-navy-extra-dark)",
        },
        
        // Legacy compatibility
        primary: {
          DEFAULT: "var(--color-orange)",
          foreground: "white",
        },
        secondary: {
          DEFAULT: "var(--color-navy)",
          foreground: "white",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "var(--color-gray-100)",
          foreground: "var(--color-gray-600)",
        },
        accent: {
          DEFAULT: "var(--color-orange-light)",
          foreground: "var(--color-navy-extra-dark)",
        },
        popover: {
          DEFAULT: "var(--color-white)",
          foreground: "var(--color-navy-extra-dark)",
        },
        card: {
          DEFAULT: "var(--color-white)",
          foreground: "var(--color-navy-extra-dark)",
        },
        info: {
          DEFAULT: "var(--color-info)",
        },
      },
      fontFamily: {
        primary: ["var(--font-inter)", "sans-serif"], // Inter for headlines
        secondary: ["var(--font-inter)", "sans-serif"], // Inter for body/buttons
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-quadrant)", "serif"], // Playfair for accents
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
