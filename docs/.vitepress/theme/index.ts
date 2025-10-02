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

        // Find and disable/enable the appropriate theme styles using markers
        document
          .querySelectorAll("style, link[rel='stylesheet']")
          .forEach((element) => {
            const content = element.textContent || ""
            const href = element.getAttribute?.("href") || ""

            // Check if this is a theme-one style
            if (
              content.includes("THEME_ONE_MARKER") ||
              href.includes("theme-one")
            ) {
              ;(element as HTMLStyleElement | HTMLLinkElement).disabled =
                isThemeTwo
            }

            // Check if this is a theme-two style
            if (
              content.includes("THEME_TWO_MARKER") ||
              href.includes("theme-two")
            ) {
              ;(element as HTMLStyleElement | HTMLLinkElement).disabled =
                !isThemeTwo
            }
          })
      }

      // Apply initial theme
      const savedTheme =
        localStorage.getItem("vitepress-theme-preference") ||
        "prefers-theme-one"

      // Use a slight delay to ensure styles are loaded
      setTimeout(() => applyTheme(savedTheme), 0)

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
