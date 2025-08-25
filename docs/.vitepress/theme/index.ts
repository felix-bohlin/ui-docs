import DefaultTheme from "./theme-default/without-fonts"
import type { Theme } from "vitepress"

import "../../../node_modules/opui-css/dist/op+ui.css"
import "../../../node_modules/opui-css/src/theme.css"
import "../../../node_modules/opui-blocks/dist/ui-blocks.css"
import "../custom.css"

export default {
  extends: DefaultTheme,
} satisfies Theme
