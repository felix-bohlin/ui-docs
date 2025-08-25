---
overline: Blocks
title: Teaser
layout: page
---

<script setup>
import Example from "../.vitepress/theme/app/components/Example.vue"
</script>

<div class="container large">

<Example>
	<template #example>
	<div class="container teaser">
      <div class="content">
        <h2>Default teaser</h2>
        <p>Our default teasers are made from high-quality teaser beans.</p>
        <div class="actions">
          <a class="link">Link this</a>
        </div>
      </div>
      <picture>
        <img src="https://picsum.photos/700" />
      </picture>
    </div>
  </template>

<template #code>

  ```html
  <div class="container teaser">
    <div class="content">
      <h2>Default teaser</h2>
      <p>Our default teasers are made from high-quality teaser beans.</p>

      <div class="actions">
        <a class="link">Link this</a>
      </div>
    </div>

    <picture>
      <img src="https://picsum.photos/700" />
    </picture>
  </div>
  ```
</template>
</Example>



## Installation

::: code-group
<<< @/../node_modules/opui-blocks/src/blocks/teaser/teaser.css [teaser.css]
:::

</div>



<style scoped>
:where(h2[id]) {
  margin-block: 2em 1em;
}
</style>
