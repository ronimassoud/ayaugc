import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";

// AYA UGC brand tokens v1.0 (brand/AYA UGC - Brand Assets.zip → Design tokens). Pages use these names, never hex values.
export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    extend: {
      // One layout breakpoint: grids collapse to one column under 720 px.
      screens: { md: "720px" },
      fontFamily: {
        display: ['"Instrument Serif"', "Georgia", "serif"],
        sans: ['"Work Sans"', "Arial", "sans-serif"],
        "ar-display": ["Amiri", "serif"],
        "ar-text": ['"IBM Plex Sans Arabic"', "sans-serif"],
      },
      colors: {
        beige: "#F9F1E4",
        mint: { DEFAULT: "#A2D8BF", hover: "#91C6AE", selected: "#82B69F" },
        ink: "#2E2A24",
        brown: "#6B5F50",
        pine: { DEFAULT: "#2F5F4E", hover: "#2F5244", active: "#2F473B" },
        line: "#E3D3B4",
        disabled: { bg: "#E8DFD2", text: "#ABA193" },
        error: "#A33A2B",

        // shadcn/ui names, mapped onto the brand tokens in src/index.css.
        border: "rgb(var(--border))",
        input: "rgb(var(--input))",
        ring: "rgb(var(--ring))",
        background: "rgb(var(--background))",
        foreground: "rgb(var(--foreground))",
        primary: { DEFAULT: "rgb(var(--primary))", foreground: "rgb(var(--primary-foreground))" },
        secondary: { DEFAULT: "rgb(var(--secondary))", foreground: "rgb(var(--secondary-foreground))" },
        destructive: { DEFAULT: "rgb(var(--destructive))", foreground: "rgb(var(--destructive-foreground))" },
        muted: { DEFAULT: "rgb(var(--muted))", foreground: "rgb(var(--muted-foreground))" },
        accent: { DEFAULT: "rgb(var(--accent))", foreground: "rgb(var(--accent-foreground))" },
        popover: { DEFAULT: "rgb(var(--popover))", foreground: "rgb(var(--popover-foreground))" },
        card: { DEFAULT: "rgb(var(--card))", foreground: "rgb(var(--card-foreground))" },
      },
      borderRadius: { sm: "12px", lg: "16px", card: "20px", pill: "999px" },
      // Brand spacing scale (px): 8, 16, 24, 32, 48, 64, 96. Tailwind's 2, 4, 6, 8, 12, 16, 24 map onto it.
      maxWidth: { content: "1200px", text: "680px" },
      transitionTimingFunction: { brand: "cubic-bezier(0.2,0.7,0.2,1)" },
      transitionDuration: { brand: "250ms" },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
        rise: { from: { opacity: "0", transform: "translateY(12px)" }, to: { opacity: "1", transform: "translateY(0)" } },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        rise: "rise 300ms cubic-bezier(0.2,0.7,0.2,1) both",
      },
    },
  },
  plugins: [tailwindcssAnimate, typography],
} satisfies Config;
