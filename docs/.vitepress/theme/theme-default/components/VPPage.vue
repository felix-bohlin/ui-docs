<template>
  <div class="VPPage">
    <slot name="page-top" />

    <hgroup
      class="container"
      v-if="
        !$frontmatter.hideHeadings &&
        ($frontmatter.overline ||
          $frontmatter.title ||
          $frontmatter.description)
      "
    >
      <p v-if="$frontmatter.overline">{{ $frontmatter.overline }}</p>
      <h1 v-if="$frontmatter.title">{{ $frontmatter.title }}</h1>
      <p v-if="$frontmatter.description">
        {{ $frontmatter.description }}
      </p>
    </hgroup>

    <Content />
    <slot name="page-bottom" />
  </div>
</template>

<style scoped>
.VPPage {
  &:has(hgroup) {
    padding-block: 48px;
  }
}
</style>
