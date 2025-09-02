---
overline: Components
title: Tab buttons
---

<script setup>
	import {ref,onMounted} from 'vue'
	import Example from "../.vitepress/theme/app/components/Example.vue"
	import Baseline from "../.vitepress/theme/app/components/Baseline.vue"
	import Alert from "../.vitepress/theme/app/components/Alert.vue";
</script>

<div class="not-rich-text">
<Alert title="Can't I just use Toggle button group?" severity="ok" variant="outlined">

<div class="rich-text">

<p>Sure, why not? Just don't forget the <a href="#accessibility">accessibility</a> stuff.</p>

<a href="/components/toggle-button-group">Toggle button group</a>

</div>
</Alert>

</div>

## Variants

### Underlined

<Example>
<template #example>
  <div class="tab-buttons underlined" aria-label="Underlined tabs example" role="tablist">
    <label><input type="radio" name="tabs-underlined" id="profile" checked>Profile</label>
    <label><input type="radio" name="tabs-underlined" id="settings">Settings</label>
    <label><input type="radio" name="tabs-underlined" id="notifications">Notifications</label>
  </div>
</template>
<template #code>

```html
<div class="tab-buttons underlined" aria-label="Radio tabs example" role="tablist">
  <label><input type="radio" name="tabs-underlined" id="profile" checked>Profile</label>
  <label><input type="radio" name="tabs-underlined" id="settings">Settings</label>
  <label><input type="radio" name="tabs-underlined" id="notifications">Notifications</label>
</div>
```
</template>
</Example>

### Filled

<Example>
<template #example>
  <div class="tab-buttons filled" aria-label="Radio tabs example" role="tablist">
    <label><input type="radio" name="tabs-filled" id="korg" checked>Korg</label>
    <label><input type="radio" name="tabs-filled" id="yamaha">Yamaha</label>
    <label><input type="radio" name="tabs-filled" id="roland">Roland</label>
  </div>
</template>
<template #code>

```html
<div class="tab-buttons filled" aria-label="Radio tabs example" role="tablist">
  <label><input type="radio" name="tabs-filled" id="korg" checked>Korg</label>
  <label><input type="radio" name="tabs-filled" id="yamaha">Yamaha</label>
  <label><input type="radio" name="tabs-filled" id="roland">Roland</label>
</div>
```
</template>
</Example>

## Accessibility

Tab buttons must contain the following:

| Attribute       | Value          | Description                        |
| --------------- | -------------- | ---------------------------------- |
| `role`          | `"tab"`        | Identifies the element as a tab    |
| `id`            | `"TAB_ID"`     | A unique ID for the tab            |
| `aria-selected` | `"true/false"` | Indicates if the tab is selected   |
| `aria-controls` | `"panel-id"`   | The ID of the associated tab panel |
| `tabindex`      | `"0/-1"`       | Indicates if the tab is focusable  |

### Tab panel

Tab panels must contain the following:

| Attribute         | Value             | Description                                                                   |
| ----------------- | ----------------- | ----------------------------------------------------------------------------- |
| `role`            | `"tabpanel"`      | Identifies the element as a tab panel                                         |
| `id`              | `"panel-id"`      | A unique ID for the panel                                                     |
| `aria-labelledby` | `"unique-tab-id"` | The ID of the associated tab                                                  |
| `hidden`          | No value needed   | Indicates if the panel is hidden (use hidden attribute for non-active panels) |

### Other

- Screen reader navigation through proper tabindexing and ARIA attributes, making sure users can switch between tabs and their respective panels.
- High contrast with distinct visual indicators for active tabs and keyboard focus states.
- Complete keyboard navigation is implemented, allowing users to move between tabs using arrow keys, Home/End keys, and Tab key, with automatic activation of panels when their associated tabs receive focus.

There's a lot more. Read about it [here](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/examples/tabs-automatic/#accessibilityfeatures).

## Installation

::: code-group
<<< @/../node_modules/opui-css/src/components/tab-buttons.css [tab-buttons.css]
:::
