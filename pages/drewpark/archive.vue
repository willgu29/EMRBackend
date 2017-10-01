<template>
  <section class="container">
      <h1>Archives</h1>
      <p>9-29-2017 (Pre-rounding)</p>
      <hr>
      <h2>Pre-rounding Information</h2>
      <html-view />

  </section>
</template>

<script>
import HtmlView from '~/components/HtmlView.vue'
export default {
  layout: 'landing',
  name: 'archive',
  components: {
    HtmlView
  },
  head () {
    return {
      title: 'EMR Worx: Drew Park'
    }
  }
}
</script>

<style scoped>

</style>
