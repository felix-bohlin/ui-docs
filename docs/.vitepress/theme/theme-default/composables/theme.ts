import { computed, watch } from "vue"
import { useLocalStorage } from "@vueuse/core"
import { withBase } from "vitepress"
import { inBrowser } from "../../shared/shared"
import themeOneHref from "../../theme-one.css?url"
import themeTwoHref from "../../theme-two.css?url"

export const THEME_STORAGE_KEY = "vitepress-theme-preference"
const DEFAULT_THEME = "prefers-theme-two"

const themeDefinitions = [
  { value: "prefers-theme-one", label: "Theme One" },
  { value: "prefers-theme-two", label: "Theme Two" },
] as const

type ThemeOption = (typeof themeDefinitions)[number]
export type ThemeValue = ThemeOption["value"]

const themeHrefMap: Record<ThemeValue, string> = {
  "prefers-theme-one": withBase(themeOneHref),
  "prefers-theme-two": withBase(themeTwoHref),
}

let initialized = false
let storageListenerAttached = false
let activeTheme: ThemeValue | null = null

function isThemeValue(value: unknown): value is ThemeValue {
  return themeDefinitions.some((option) => option.value === value)
}

function ensureThemeLink(theme: ThemeValue) {
  if (!inBrowser) return

  const linkId = "vitepress-theme-css"
  let link = document.getElementById(linkId) as HTMLLinkElement | null

  if (!link) {
    link = document.createElement("link")
    link.id = linkId
    link.rel = "stylesheet"
    link.type = "text/css"
    document.head.appendChild(link)
  }

  const href = themeHrefMap[theme]

  if (link.getAttribute("href") !== href) {
    link.href = href
    link.dataset.theme = theme
  }
}

function applyTheme(theme: ThemeValue) {
  if (!inBrowser) return
  if (theme === activeTheme) return

  ensureThemeLink(theme)

  const html = document.documentElement

  for (const option of themeDefinitions) {
    if (option.value === theme) continue
    html.classList.remove(option.value)
  }

  if (!html.classList.contains(theme)) {
    html.classList.add(theme)
  }

  activeTheme = theme
}

export function initializeTheme() {
  if (!inBrowser || initialized) return

  const stored = localStorage.getItem(THEME_STORAGE_KEY)
  const theme = isThemeValue(stored) ? stored : DEFAULT_THEME

  applyTheme(theme)

  if (!stored) {
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  }

  initialized = true
}

export function registerThemeStorageListener() {
  if (!inBrowser || storageListenerAttached) return

  window.addEventListener("storage", (event) => {
    if (event.key !== THEME_STORAGE_KEY) return

    const value = event.newValue
    const theme = isThemeValue(value) ? value : DEFAULT_THEME

    applyTheme(theme)
  })

  storageListenerAttached = true
}

export function useThemePreference() {
  const selectedTheme = useLocalStorage<ThemeValue>(
    THEME_STORAGE_KEY,
    DEFAULT_THEME,
    {
      listenToStorageChanges: true,
    },
  )

  if (inBrowser) {
    watch(
      selectedTheme,
      (theme) => {
        if (!isThemeValue(theme)) {
          selectedTheme.value = DEFAULT_THEME
          return
        }

        applyTheme(theme)
      },
      { immediate: true },
    )
  }

  const options = computed(() => themeDefinitions)

  return {
    selectedTheme,
    options,
  }
}
