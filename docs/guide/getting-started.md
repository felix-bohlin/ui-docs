---
overline: Guide
title: Getting started
---

<script setup>
import Accordion from "../.vitepress/theme/app/components/Accordion.vue";
import Alert from "../.vitepress/theme/app/components/Alert.vue";
</script>

<style scoped>
   .overflow .blocks {
      overflow-y: auto;
      max-block-size: 15lh;
   }
</style>

<span></span>

You can choose between:

- [manual setup](#manual-setup) (more fun, recommended)
- [npm installation](#npm-installation) (a lot less fun, recommended)

This guide will set you up with:

- Open Props
- a normalize
- some util classes
- base theme setup

<div class="not-rich-text">

<Alert class="ok outlined">
<p>Open Props UI is <u><strong>just CSS</strong></u>. Therefore you're able to go and <strong>copy and paste</strong> any <a class="link" href="/components">component</a> right now without any installs. You don't even need Open Props! It won't necessarily look and feel as intended, but if that suits your project then skip this page.</p>
</Alert>
</div>

## Manual setup

### 1. Install Open Props

Open Props v2 hasn't dropped yet, which is why this project relies on the OPv2 beta. The difference right now between the OPv1 and the OPv2 beta aren't huge (the way OPUI consumes it), so you should be fine with either version.

```sh
# pnpm
pnpm add opbeta@npm:open-props@2.0.0-beta.5 -S

# npm
npm i opbeta@npm:open-props@2.0.0-beta.5 -S
```

### 2. Base setup

The setup process will differ a bit if you use a framework, but the core principles still apply. You should have no problems getting it to work though :+1: Otherwise, [let me know](https://github.com/felix-bohlin/ui).

<div class="not-rich-text">

<ul class="definition-list dotted">
  <li>
    <span class="term"><code>main.css</code></span>
    <hr>
    <span class="description">is the home of all your CSS</span>
  </li>
  <li>
    <span class="term"><code>opui.css</code></span>
    <hr>
    <span class="description">consists of OPUI imports, only</span>
  </li>
  <li>
    <span class="term"><code>open-props.css</code></span>
    <hr>
    <span class="description">consists of Open Props imports, only</span>
  </li>
</ul>

::: code-group [main.css]
<<< @/../node_modules/opui-css/src/main.css [main.css]
<<< @/../node_modules/opui-css/src/opui.css [opui.css]
<<< @/../node_modules/opui-css/src/open-props.css [open-props.css]
:::

<Accordion variant="tonal" style="margin-block-start: var(--size-3)">
<template #summary>src/core</template>

::: code-group
<<< @/../node_modules/opui-css/src/core/normalize.css [normalize.css]
<<< @/../node_modules/opui-css/src/core/utils.css [utils.css]
<<< @/../node_modules/opui-css/src/core/theme.css [theme.css]
<<< @/../node_modules/opui-css/src/core/components.css [components.css]
:::

</Accordion>
</div>

#### Folder structure

This is the folder structure that comes out of the box. Feel free to change it to your needs.

```
├─ main.css
├─ opui.css
├─ open-props.css
├─ core
│  └─ normalize.css
│  └─ utils.css
│  └─ theme.css
│  └─ components.css
├─ components
│  └─ button.css
│  └─ ...

```

<div class="not-rich-text">
<Alert severity="warning">
<p>While many components will work as intended in modern browsers - some are using features that haven't landed outside Chromium with <strong>experimental feature flags</strong> enabled.</p>

<a href="/guide/what-is-open-props-ui" class="link">About Open Props UI.</a>
</Alert>

</div>

### 3. Copy & paste

Browse [all the components](/components).

**Copy and paste** the HTML and CSS (see the "Installation" section on each component page) and you're good to go!

## NPM installation

```sh
# pnpm
pnpm add opui-css -S

# npm
npm i opui-css -S
```

Then check your `node_modules` folder for the `opui-css` package and pick and choose what files you want to use!

The `dist` folder includes bundled files with:

- `dist/op.css` all the needed `Open Props` imports
- `dist/ui.css` the entire `OPUI` library
- `dist/op+ui.css` both files above combined
