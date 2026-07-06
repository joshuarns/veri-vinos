/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // ── Paleta Veri Vinos ─────────────────────────────────────────
        "primary":                    "#8B1A2E",   // burdeos principal
        "on-primary":                 "#FFFFFF",
        "primary-container":          "#5C0D1C",   // burdeos oscuro
        "on-primary-container":       "#F5C6CE",

        "secondary":                  "#C9A227",   // dorado
        "on-secondary":               "#1C1008",
        "secondary-container":        "#F0D97A",   // dorado claro
        "on-secondary-container":     "#3D2800",

        "tertiary":                   "#6B2737",   // vino medio
        "on-tertiary":                "#FFFFFF",
        "tertiary-container":         "#3D0F1A",
        "on-tertiary-container":      "#F5C6CE",

        "background":                 "#F5EFE6",   // crema fondo
        "on-background":              "#1C1008",

        "surface":                    "#F5EFE6",
        "surface-bright":             "#FDF8F2",
        "surface-dim":                "#E0D6CA",
        "surface-container-lowest":   "#FFFFFF",
        "surface-container-low":      "#FAF4EC",
        "surface-container":          "#F0E8DC",
        "surface-container-high":     "#E8DDD0",
        "surface-container-highest":  "#DFD3C4",
        "surface-variant":            "#EDE0D4",
        "surface-tint":               "#8B1A2E",

        "on-surface":                 "#1C1008",
        "on-surface-variant":         "#4A3828",

        "outline":                    "#7A6050",
        "outline-variant":            "#C8B8A8",

        "inverse-surface":            "#1C1008",
        "inverse-on-surface":         "#F5EFE6",
        "inverse-primary":            "#F5C6CE",

        "error":                      "#BA1A1A",
        "on-error":                   "#FFFFFF",
        "error-container":            "#FFDAD6",
        "on-error-container":         "#93000A",

        // legados (sin uso activo, mantenidos por compatibilidad)
        "secondary-fixed":            "#F0D97A",
        "secondary-fixed-dim":        "#D4B44A",
        "on-secondary-fixed":         "#3D2800",
        "on-secondary-fixed-variant": "#6B4E00",
        "primary-fixed":              "#F5C6CE",
        "primary-fixed-dim":          "#E89BA8",
        "on-primary-fixed":           "#3D0010",
        "on-primary-fixed-variant":   "#6B1022",
        "tertiary-fixed":             "#F5C6CE",
        "tertiary-fixed-dim":         "#E89BA8",
        "on-tertiary-fixed":          "#3D0010",
        "on-tertiary-fixed-variant":  "#6B1022",
      },
      borderRadius: {
        DEFAULT: "4px",
        lg: "8px",
        xl: "16px",
        full: "9999px",
      },
      spacing: {
        "margin-mobile": "20px",
        "gutter": "24px",
        "margin-desktop": "64px",
        "unit": "8px",
      },
      maxWidth: {
        "container-max": "1280px",
      },
      fontFamily: {
        "body-lg": ["Metropolis", "sans-serif"],
        "display-script": ["Epilogue", "sans-serif"],
        "headline-lg-mobile": ["Metropolis", "sans-serif"],
        "headline-md": ["Metropolis", "sans-serif"],
        "label-caps": ["Metropolis", "sans-serif"],
        "headline-sm": ["Metropolis", "sans-serif"],
        "headline-lg": ["Metropolis", "sans-serif"],
        "body-md": ["Metropolis", "sans-serif"],
      },
      fontSize: {
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "display-script": ["64px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "300" }],
        "headline-lg-mobile": ["32px", { lineHeight: "40px", fontWeight: "700" }],
        "headline-md": ["32px", { lineHeight: "40px", letterSpacing: "0.02em", fontWeight: "600" }],
        "label-caps": ["12px", { lineHeight: "16px", letterSpacing: "0.15em", fontWeight: "700" }],
        "headline-sm": ["24px", { lineHeight: "32px", fontWeight: "600" }],
        "headline-lg": ["48px", { lineHeight: "56px", letterSpacing: "0.05em", fontWeight: "700" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
      },
    },
  },
  plugins: [],
}
