import DefaultTheme from "./theme-default/without-fonts"
import type { Theme } from "vitepress"

// Conditionally import theme based on localStorage (checked at build/load time)
// Default to theme-one, but this will be determined at runtime
const getInitialTheme = () => {
  if (typeof localStorage !== "undefined") {
    return (
      localStorage.getItem("vitepress-theme-preference") || "prefers-theme-one"
    )
  }
  return "prefers-theme-one"
}

const initialTheme = getInitialTheme()

if (initialTheme === "prefers-theme-two") {
  await import("./theme-two.css")
} else {
  await import("./theme-one.css")
}

import "../../../node_modules/opui-blocks/dist/ui-blocks.css"

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    if (typeof window !== "undefined") {
      // When theme changes, reload the page for clean theme swap
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
