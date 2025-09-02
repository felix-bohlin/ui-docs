---
overline: Components
title: Tabs
description: Layered content displayed one at a time.
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

<div class="tabs">
  <div class="underlined" aria-label="Underlined tabs example" role="tablist">
    <label><input type="radio" name="tabs-underlined" id="profile" checked>Profile</label>
    <label><input type="radio" name="tabs-underlined" id="settings">Settings</label>
    <label><input type="radio" name="tabs-underlined" id="notifications">Notifications</label>
  </div>

  <div id="tab-profile" role="tabpanel">profile</div>
  <div id="tab-settings" role="tabpanel">settings</div>
  <div id="tab-notification" role="tabpanel">notification</div>
</div>
</template>
<template #code>

```html
<div class=" underlined" aria-label="Radio tabs example" role="tablist">
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
  <div class=" filled" aria-label="Radio tabs example" role="tablist">
    <label><input type="radio" name="tabs-filled" id="korg" checked>Korg</label>
    <label><input type="radio" name="tabs-filled" id="yamaha">Yamaha</label>
    <label><input type="radio" name="tabs-filled" id="roland">Roland</label>
  </div>
</template>
<template #code>

```html
<div class=" filled" aria-label="Radio tabs example" role="tablist">
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


## Anatomy

1. Container: `<div class="" role="tablist">` groups the tabs.
2. Tab: `<label>` clickable surface (click/press selects the underlying radio).
3. Radio input: `<input type="radio" name="…">` holds selection state (only one checked per `name` group).
4. Label: Text (or icon + optional text) inside the `<label>` after the input.

<Example column>
<template #example>
  <div class=" underlined anatomy" role="tablist" aria-label="Anatomy example">
    <label><input type="radio" name="anatomy-tabs" id="tab-1" checked>Tab one</label>
    <label><input type="radio" name="anatomy-tabs" id="tab-2">Tab two</label>
  </div>
</template>
<template #code>

```html
<div class=" underlined" role="tablist">
  <label>
    <input type="radio" name="tabs" id="tab-1" checked>
    Tab one
  </label>
  <label>
    <input type="radio" name="tabs" id="tab-2">
    Tab two
  </label>
</div>
```
</template>
</Example>

## API

<!--@include: ./tabs-api.md -->

## Installation

::: code-group
<!--<<< @/../node_modules/opui-css/src/components/tabs.css [tabs.css]-->
:::
