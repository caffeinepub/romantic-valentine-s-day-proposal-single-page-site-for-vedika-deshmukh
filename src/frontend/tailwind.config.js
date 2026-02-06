/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
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
        border: "oklch(var(--border))",
        input: "oklch(var(--input))",
        ring: "oklch(var(--ring))",
        background: "oklch(var(--background))",
        foreground: "oklch(var(--foreground))",
        primary: {
          DEFAULT: "oklch(var(--primary))",
          foreground: "oklch(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "oklch(var(--secondary))",
          foreground: "oklch(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "oklch(var(--destructive))",
          foreground: "oklch(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "oklch(var(--muted))",
          foreground: "oklch(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "oklch(var(--accent))",
          foreground: "oklch(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "oklch(var(--popover))",
          foreground: "oklch(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "oklch(var(--card))",
          foreground: "oklch(var(--card-foreground))",
        },
        rose: {
          50: 'oklch(0.97 0.02 10)',
          100: 'oklch(0.95 0.04 10)',
          200: 'oklch(0.90 0.08 10)',
          300: 'oklch(0.82 0.14 10)',
          400: 'oklch(0.72 0.20 10)',
          500: 'oklch(0.65 0.22 10)',
          600: 'oklch(0.58 0.20 10)',
          700: 'oklch(0.50 0.18 10)',
          800: 'oklch(0.42 0.15 10)',
          900: 'oklch(0.35 0.12 10)',
        },
        pink: {
          50: 'oklch(0.97 0.02 350)',
          100: 'oklch(0.95 0.04 350)',
          200: 'oklch(0.90 0.08 350)',
          300: 'oklch(0.82 0.14 350)',
          400: 'oklch(0.72 0.20 350)',
          500: 'oklch(0.65 0.22 350)',
          600: 'oklch(0.58 0.20 350)',
          700: 'oklch(0.50 0.18 350)',
          800: 'oklch(0.42 0.15 350)',
          900: 'oklch(0.35 0.12 350)',
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        display: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
}
