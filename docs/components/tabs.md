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


<div class="tabs underlined">
  <div class="slide" data-label="Main Section">
    <section role="tabpanel" aria-label="Main Section">
      <p>
        Proin sodales condimentum felis, mattis tristique sem porttitor
        vitae. Suspendisse id condimentum orci. Interdum et malesuada
        fames ac ante ipsum primis in faucibus. Integer a nunc dignissim,
        varius urna nec, placerat ex. Vestibulum lacinia tempus semper.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
        finibus nibh dolor, eget dictum mauris pharetra ac. Nulla gravida
        gravida mauris, imperdiet efficitur diam congue et. Nam pharetra
        nulla sed pellentesque pulvinar. Nulla eu pretium ligula.
        Curabitur vulputate, nulla quis laoreet ornare, mauris ex pretium
        ligula, at dapibus lacus elit ac nibh.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
        finibus nibh dolor, eget dictum mauris pharetra ac. Nulla gravida
        gravida mauris, imperdiet efficitur diam congue et. Nam pharetra
        nulla sed pellentesque pulvinar. Nulla eu pretium ligula.
        Curabitur vulputate, nulla quis laoreet ornare, mauris ex pretium
        ligula, at dapibus lacus elit ac nibh.
      </p>
    </section>
  </div>
  <div class="slide" data-label="Details Section">
    <section role="tabpanel" aria-label="Details Section">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
        id cupiditate distinctio hic eum blanditiis in, temporibus itaque
        dolore, unde explicabo! Voluptates veniam perferendis debitis
        recusandae quod vero porro quidem!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
        id cupiditate distinctio hic eum blanditiis in, temporibus itaque
        dolore, unde explicabo! Voluptates veniam perferendis debitis
        recusandae quod vero porro quidem!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
        id cupiditate distinctio hic eum blanditiis in, temporibus itaque
        dolore, unde explicabo! Voluptates veniam perferendis debitis
        recusandae quod vero porro quidem!
      </p>
    </section>
  </div>
  <div class="slide" data-label="Follow-up Section">
    <section role="tabpanel" aria-label="Follow-up Section">
      <p>
        Nam ex leo, auctor vitae lectus ac, imperdiet viverra nisi.
        Maecenas augue arcu, vulputate nec posuere ac, iaculis dignissim
        ipsum. Nam efficitur quam ac turpis mollis viverra.
      </p>
      <p>
        Donec pulvinar nisl dolor, vel tincidunt magna viverra vel.
        Curabitur pharetra ex sit amet urna interdum finibus. In arcu est,
        efficitur nec velit at, scelerisque efficitur dolor. Praesent orci
        turpis, interdum et diam nec, ornare ullamcorper tortor.
      </p>
      <p>
        Donec pulvinar nisl dolor, vel tincidunt magna viverra vel.
        Curabitur pharetra ex sit amet urna interdum finibus. In arcu est,
        efficitur nec velit at, scelerisque efficitur dolor. Praesent orci
        turpis, interdum et diam nec, ornare ullamcorper tortor.
      </p>
    </section>
  </div>
</div>

## Variants

### Underlined

<Example>
<template #example>

<div class="tabs">
  <div role="tablist" class="underlined" aria-label="Underlined tabs example">
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
<div role="tablist" class="underlined" aria-label="Radio tabs example">
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
  <div role="tablist" class="filled" aria-label="Radio tabs example">
    <label><input type="radio" name="tabs-filled" id="korg" checked>Korg</label>
    <label><input type="radio" name="tabs-filled" id="yamaha">Yamaha</label>
    <label><input type="radio" name="tabs-filled" id="roland">Roland</label>
  </div>
</template>
<template #code>

```html
<div role="tablist" class="filled" aria-label="Radio tabs example">
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
  <div class="underlined anatomy" role="tablist" aria-label="Anatomy example">
    <label><input type="radio" name="anatomy-tabs" id="tab-1" checked>Tab one</label>
    <label><input type="radio" name="anatomy-tabs" id="tab-2">Tab two</label>
  </div>
</template>
<template #code>

```html
<div class="underlined" role="tablist">
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

## Browser compatibility

<Baseline :ids="['scroll-markers', 'scroll-buttons', 'scroll-marker-group']" />


## API

<!--@include: ./tabs-api.md -->

## Installation

::: code-group
<!--<<< @/../node_modules/opui-css/src/components/tabs.css [tabs.css]-->
:::


<style scoped>
.tabs {
    border-top-right-radius: var(--radius-2);
    border: 1px solid var(--surface-2);
    display: grid;
    gap: var(--size-5);
    grid-auto-columns: 100%;
    grid-auto-flow: column;
    anchor-name: --tabs;
    max-inline-size: 100cqi;
    overflow-y: hidden;
    scroll-behavior: auto;
    scroll-marker-group: before;


  &.underlined {
    --_accent-color: var(--color-8);

      &::scroll-marker-group {
        align-items: end;
        block-size: 2lh;
        border-bottom: 1px solid var(--border-color);
        column-gap: var(--size-1);
        display: flex;
        inline-size: 100%;
        inset-block-end: anchor(top);
        inset-inline-end: anchor(right);
        inset-inline-start: anchor(left);
        justify-content: start;
        max-inline-size: 100cqi;
        overscroll-behavior-x: contain;
        position-anchor: --tabs;
        position: absolute;
        scrollbar-width: none;
      }

    .slide {
      container-type: scroll-state;
      max-inline-size: initial;
      overflow-y: auto;
      padding: 0;
      scroll-snap-align: start;

      &:focus-visible {
        outline-offset: -5px;
      }

      > [role="tabpanel"] {
        background: light-dark(white, var(--surface-1));
        display: grid;
        gap: var(--size-3);
        padding: var(--size-3);
      }

      &::scroll-marker {
        -webkit-tap-highlight-color: transparent;
        background: var(--_bg-color) var(--ripple, none);
        border-bottom: none;
        content: attr(data-label);
        font-weight: 500;
        line-height: var(--font-lineheight-4);
        padding: var(--size-2) var(--size-3);
        text-decoration: none;
        transition:
          background-color 0.2s var(--ease-out-3),
          border-color 0.2s var(--ease-out-3),
          color 0.2s var(--ease-out-3),
          outline-offset 0.05s var(--ease-1);
        white-space: nowrap;
      }

      &::scroll-marker:hover {
        background-color: light-dark(
          oklch(from var(--primary) calc(l * 0.75) none h / 5%),
          oklch(from var(--primary) calc(l * 1.25) none h / 5%)
        );
      }

      &::scroll-marker:hover:active {
        background-size: var(--button-ripple-size);
        transition: background 0s;
      }

      &::scroll-marker:target-current {
        border-block-end: 2px solid var(--_accent-color);
        color: var(--_accent-color);
      }

      &::scroll-marker:focus-visible {
        outline: 2px solid var(--text-color-1);
      }
    }
  }
}
</style>
