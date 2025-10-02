import DefaultTheme from "./theme-default/without-fonts"
import type { Theme } from "vitepress"

// Import default theme
import "./theme-one.css"

import "../../../node_modules/opui-blocks/dist/ui-blocks.css"

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    if (typeof window !== "undefined") {
      // Check if theme-two is preferred and dynamically load it
      const savedTheme = localStorage.getItem("vitepress-theme-preference")
      if (savedTheme === "prefers-theme-two") {
        import("./theme-two.css")
      }

      // Watch for theme changes and reload page
      const originalSetItem = localStorage.setItem.bind(localStorage)
      localStorage.setItem = function (key: string, value: string) {
        originalSetItem(key, value)
        if (key === "vitepress-theme-preference") {
          window.location.reload()
        }
      }

      // Watch for changes from other tabs
      window.addEventListener("storage", (e) => {
        if (e.key === "vitepress-theme-preference" && e.newValue) {
          window.location.reload()
        }
      })
    }
  },
} satisfies Theme
