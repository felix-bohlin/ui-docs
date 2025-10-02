import DefaultTheme from "./theme-default/without-fonts"
import type { Theme } from "vitepress"

// Import both themes - we'll control which one is active
import "./theme-one.css"
import "./theme-two.css"

import "../../../node_modules/opui-blocks/dist/ui-blocks.css"

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    if (typeof window !== "undefined") {
      // Function to show only the active theme
      function applyTheme(theme: string) {
        const isThemeTwo = theme === "prefers-theme-two"

        // Find and disable/enable the appropriate theme styles
        document.querySelectorAll("style").forEach((style) => {
          const content = style.textContent || ""

          // Check if this is a theme-one style
          if (
            content.includes("--palette-hue: var(--oklch-teal)") ||
            content.includes("--palette-hue-rotate-by: 5")
          ) {
            style.disabled = isThemeTwo // Disable theme-one if theme-two is active
          }

          // Check if this is a theme-two style
          if (
            content.includes("--palette-hue: var(--oklch-orange)") ||
            content.includes("--palette-hue-rotate-by: 0")
          ) {
            style.disabled = !isThemeTwo // Disable theme-two if theme-one is active
          }
        })
      }

      // Apply initial theme
      const savedTheme =
        localStorage.getItem("vitepress-theme-preference") ||
        "prefers-theme-one"
      applyTheme(savedTheme)

      // When theme changes, apply it
      const originalSetItem = localStorage.setItem.bind(localStorage)
      localStorage.setItem = function (key: string, value: string) {
        originalSetItem(key, value)

        // If theme preference changed, apply new theme
        if (key === "vitepress-theme-preference") {
          applyTheme(value)
        }
      }

      // Watch for localStorage changes from other tabs
      window.addEventListener("storage", (e) => {
        if (e.key === "vitepress-theme-preference" && e.newValue) {
          applyTheme(e.newValue)
        }
      })
    }
  },
} satisfies Theme
