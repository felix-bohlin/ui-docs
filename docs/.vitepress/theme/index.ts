import DefaultTheme from "./theme-default/without-fonts"
import type { Theme } from "vitepress"

// Import default theme
import "./theme-one.css"

import "../../../node_modules/opui-blocks/dist/ui-blocks.css"

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    if (typeof window !== "undefined") {
      // Check if we need to load theme-two instead
      const savedTheme = localStorage.getItem("vitepress-theme-preference")

      if (savedTheme === "prefers-theme-two") {
        // Dynamically load theme-two and remove theme-one
        import("./theme-two.css").then(() => {
          // More aggressive removal of theme-one styles
          document.querySelectorAll("style").forEach((style) => {
            const content = style.textContent || ""
            if (
              content.includes("theme-one") ||
              content.includes("--palette-hue: var(--oklch-teal)") ||
              content.includes("--palette-hue-rotate-by: 5")
            ) {
              style.remove()
            }
          })

          // Also remove link elements if any
          document
            .querySelectorAll('link[rel="stylesheet"]')
            .forEach((link) => {
              const href = link.getAttribute("href") || ""
              if (href.includes("theme-one")) {
                link.remove()
              }
            })

          // Load custom.css last after theme-two
          import("../custom.css")
        })
      } else {
        // Load custom.css last after theme-one
        import("../custom.css")
      }

      // When theme changes, reload the page for clean swap
      const originalSetItem = localStorage.setItem.bind(localStorage)
      localStorage.setItem = function (key: string, value: string) {
        const oldValue = localStorage.getItem(key)
        originalSetItem(key, value)

        // If theme preference changed, reload to apply new theme
        if (key === "vitepress-theme-preference" && oldValue !== value) {
          window.location.reload()
        }
      }

      // Watch for localStorage changes from other tabs
      window.addEventListener("storage", (e) => {
        if (e.key === "vitepress-theme-preference" && e.newValue) {
          window.location.reload()
        }
      })
    }
  },
} satisfies Theme
