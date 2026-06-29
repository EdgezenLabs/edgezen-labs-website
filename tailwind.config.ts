import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "var(--space-inline)",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "var(--container-max)",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        gold: "hsl(var(--gold))",
        orange: "hsl(var(--orange))",
        "dark-gray": "hsl(var(--dark-gray))",
        "gradient-purple": "hsl(var(--gradient-purple))",
        "gradient-pink": "hsl(var(--gradient-pink))",
        "gradient-blue": "hsl(var(--gradient-blue))",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)"],
      },
      fontSize: {
        hero: ["var(--text-hero)", { lineHeight: "var(--leading-tight)", letterSpacing: "var(--tracking-tight)" }],
        h1: ["var(--text-h1)", { lineHeight: "var(--leading-tight)", letterSpacing: "var(--tracking-tight)" }],
        h2: ["var(--text-h2)", { lineHeight: "var(--leading-tight)", letterSpacing: "var(--tracking-tight)" }],
        h3: ["var(--text-h3)", { lineHeight: "var(--leading-snug)" }],
        "body-lg": ["var(--text-body-lg)", { lineHeight: "var(--leading-relaxed)" }],
      },
      spacing: {
        "section-y": "var(--space-section-y)",
        "section-y-lg": "var(--space-section-y-lg)",
        card: "var(--space-card)",
        13: "3.25rem",
      },
      maxWidth: {
        narrow: "var(--container-narrow)",
        content: "var(--container-content)",
        wide: "var(--container-wide)",
      },
      borderRadius: {
        lg: "var(--radius-lg)",
        md: "var(--radius-md)",
        sm: "var(--radius-sm)",
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
      },
      boxShadow: {
        "token-xs": "var(--shadow-xs)",
        "token-sm": "var(--shadow-sm)",
        "token-md": "var(--shadow-md)",
        "token-lg": "var(--shadow-lg)",
        "token-xl": "var(--shadow-xl)",
        "token-glow": "var(--shadow-glow)",
      },
      transitionDuration: {
        fast: "var(--duration-fast)",
        DEFAULT: "var(--duration-normal)",
        slow: "var(--duration-slow)",
        slower: "var(--duration-slower)",
      },
      transitionTimingFunction: {
        out: "var(--ease-out)",
        "in-out": "var(--ease-in-out)",
        spring: "var(--ease-spring)",
      },
      height: {
        "btn-sm": "var(--btn-height-sm)",
        "btn-md": "var(--btn-height-md)",
        "btn-lg": "var(--btn-height-lg)",
        "btn-xl": "var(--btn-height-xl)",
        input: "var(--input-height)",
        nav: "var(--nav-height)",
        "nav-lg": "var(--nav-height-lg)",
        13: "var(--btn-height-lg)",
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
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        "fade-in": "fade-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) both",
        "fade-in-up": "fade-in-up 0.4s cubic-bezier(0.16, 1, 0.3, 1) both",
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
