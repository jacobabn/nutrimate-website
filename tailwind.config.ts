import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  corePlugins: { container: false },
  theme: {
    extend: {
      colors: {
        bg:        "#FBFAF7",
        bg2:       "#F4F1EA",
        card:      "#FFFFFF",
        ink:       "#0E1116",
        ink2:      "#2A2D34",
        muted:     "#5C6068",
        subtle:    "#8A8E97",
        line:      "#E7E3D9",
        line2:     "#D7D3C7",
        primary:        "#F06292",
        "primary-dark": "#D14E7C",
        "primary-tint": "#FCE4EC",
        teal:   "#8DD9D5",
        mint:   "#C0DCC8",
        sand:   "#D9D2BA",
        peach:  "#EDC2AC",
        coral:  "#FE9A8E",
        ok:     "#3A9D5A",
        warn:   "#E8A23A",
        danger: "#D14545",
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      letterSpacing: {
        tightish: "-0.012em",
        tighter2: "-0.024em",
        tighter3: "-0.04em",
      },
      borderRadius: {
        "2xl": "20px",
        "3xl": "28px",
        "4xl": "36px",
      },
      boxShadow: {
        soft:  "0 1px 2px rgba(14,17,22,.04), 0 8px 24px rgba(14,17,22,.06)",
        lift:  "0 2px 4px rgba(14,17,22,.05), 0 18px 40px rgba(14,17,22,.10)",
        ring:  "0 0 0 1px rgba(14,17,22,.06), 0 30px 60px rgba(14,17,22,.10)",
        glow:  "0 20px 60px rgba(240,98,146,.25)",
      },
      backgroundImage: {
        "brand-bands": "linear-gradient(180deg, #8DD9D5 0%, #8DD9D5 12.5%, #A2DCD3 12.5%, #A2DCD3 25%, #C0DCC8 25%, #C0DCC8 37.5%, #D9D2BA 37.5%, #D9D2BA 50%, #EDC2AC 50%, #EDC2AC 62.5%, #F8AC9C 62.5%, #F8AC9C 75%, #FE9A8E 75%, #FE9A8E 87.5%, #FF8C82 87.5%, #FF8C82 100%)",
        "soft-pink":   "linear-gradient(180deg, #FFE4ED 0%, #FFF7FB 100%)",
        "soft-blue":   "linear-gradient(180deg, #DBEAFE 0%, #F0F9FF 100%)",
        "soft-mint":   "linear-gradient(180deg, #E6F7F4 0%, #FAFFFD 100%)",
      },
      keyframes: {
        rise: { "0%": { opacity: "0", transform: "translateY(8px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-8px)" } },
        kcalFill: { from: { strokeDashoffset: "528" }, to: { strokeDashoffset: "170" } },
        blink: { "0%,49%": { opacity: "1" }, "50%,100%": { opacity: "0" } },
        ringPulse: { "0%,100%": { transform: "scale(1)", opacity: ".9" }, "50%": { transform: "scale(1.04)", opacity: "1" } },
      },
      animation: {
        rise:        "rise .6s cubic-bezier(.2,.7,.2,1) both",
        float:       "float 6s ease-in-out infinite",
        kcalFill:    "kcalFill 1.6s cubic-bezier(.2,.7,.2,1) .3s both",
        blink:       "blink 1.05s steps(2) infinite",
        ringPulse:   "ringPulse 4.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
