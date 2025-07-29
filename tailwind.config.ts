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
        
        // El Tirol Brand Palette
        stone: {
          "extra-light": "var(--color-stone-extra-light)",
          light: "var(--color-stone-light)",
          DEFAULT: "var(--color-stone)",
          dark: "var(--color-stone-dark)",
          "extra-dark": "var(--color-stone-extra-dark)",
        },
        forest: {
          "extra-light": "var(--color-forest-extra-light)",
          light: "var(--color-forest-light)",
          DEFAULT: "var(--color-forest)",
          dark: "var(--color-forest-dark)",
          "extra-dark": "var(--color-forest-extra-dark)",
        },
        water: {
          "extra-light": "var(--color-water-extra-light)",
          light: "var(--color-water-light)",
          DEFAULT: "var(--color-water)",
          dark: "var(--color-water-dark)",
          "extra-dark": "var(--color-water-extra-dark)",
        },
        
        // Legacy compatibility
        primary: {
          DEFAULT: "var(--color-forest-dark)",
          foreground: "var(--color-stone-extra-light)",
        },
        secondary: {
          DEFAULT: "var(--color-stone)",
          foreground: "var(--color-stone-dark)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "var(--color-stone-extra-light)",
          foreground: "var(--color-stone-dark)",
        },
        accent: {
          DEFAULT: "var(--color-stone)",
          foreground: "var(--color-stone-dark)",
        },
        popover: {
          DEFAULT: "var(--color-stone-extra-light)",
          foreground: "var(--color-stone-dark)",
        },
        card: {
          DEFAULT: "var(--color-stone-extra-light)",
          foreground: "var(--color-stone-dark)",
        },
        info: {
          DEFAULT: "var(--color-info)",
        },
      },
      fontFamily: {
        primary: ["var(--font-quadrant)", "serif"], // Quadrant Text for headlines
        secondary: ["var(--font-messina)", "sans-serif"], // Messina Sans for body/buttons
        sans: ["var(--font-messina)", "sans-serif"],
        serif: ["var(--font-quadrant)", "serif"],
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
