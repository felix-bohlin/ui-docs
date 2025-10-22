import DefaultTheme from "./theme-default/without-fonts"
import type { Theme } from "vitepress"
import {
  initializeTheme,
  registerThemeStorageListener,
} from "./theme-default/composables/theme"

import "../../../node_modules/opui-blocks/dist/ui-blocks.css"

export default {
  extends: DefaultTheme,
  enhanceApp() {
    if (typeof window !== "undefined") {
      initializeTheme()
      registerThemeStorageListener()
    }
  },
} satisfies Theme
