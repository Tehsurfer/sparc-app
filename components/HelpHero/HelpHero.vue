<template>
  <page-hero justify="left">
    <h1>{{ title }}</h1>
    <p>
      {{ summary }}
    </p>
    <HelpSearchControls />

    <img
      v-if="heroImage"
      slot="image"
      class="page-hero-img"
      :src="heroImage.fields.file.url"
    />
  </page-hero>
</template>

<script lang="ts">
import Vue from 'vue'
import HelpSearchControls from '@/components/help-search-controls/HelpSearchControls.vue'
import PageHero from '@/components/PageHero/PageHero.vue'

export default Vue.extend<
  never,
  never,
  never,
  { title: string; summary: string; heroImage: {} }
>({
  name: 'HelpHero',

  components: {
    HelpSearchControls,
    PageHero
  },

  props: {
    title: {
      type: String,
      default: ''
    },
    summary: {
      type: String,
      default: ''
    },
    heroImage: {
      type: Object,
      default: () => {}
    }
  }
})
</script>

<style lang="scss" scoped>
.search-form {
  max-width: 31.25rem;
}
</style>
