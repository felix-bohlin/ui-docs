import DefaultTheme from "./theme-default/without-fonts"
import type { Theme } from "vitepress"

// Import theme-one by default
import "./theme-one.css"

import "../../../node_modules/opui-blocks/dist/ui-blocks.css"

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    if (typeof window !== "undefined") {
      // Check if user prefers theme-two and reload if needed
      const savedTheme = localStorage.getItem("vitepress-theme-preference")
      const currentUrl = new URL(window.location.href)
      const themeParam = currentUrl.searchParams.get("__theme")

      // If theme-two is preferred but we haven't loaded it yet
      if (savedTheme === "prefers-theme-two" && themeParam !== "two") {
        // Add a flag to prevent infinite reload loop
        currentUrl.searchParams.set("__theme", "two")
        window.location.href = currentUrl.toString()
        return
      }

      // If theme-two is selected, dynamically load it
      if (savedTheme === "prefers-theme-two") {
        import("./theme-two.css")
      }

      // When theme changes, reload the page for clean theme swap
      const originalSetItem = localStorage.setItem.bind(localStorage)
      localStorage.setItem = function (key: string, value: string) {
        const oldValue = localStorage.getItem(key)
        originalSetItem(key, value)

        // If theme preference changed, reload to apply new theme
        if (key === "vitepress-theme-preference" && oldValue !== value) {
          // Clear the theme param before reloading
          const url = new URL(window.location.href)
          url.searchParams.delete("__theme")
          window.location.href = url.toString()
        }
      }

      // Watch for localStorage changes from other tabs
      window.addEventListener("storage", (e) => {
        if (e.key === "vitepress-theme-preference" && e.newValue) {
          const url = new URL(window.location.href)
          url.searchParams.delete("__theme")
          window.location.href = url.toString()
        }
      })
    }
  },
} satisfies Theme
