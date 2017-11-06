<template>
  <section class="subscribe-success-container">
    <p>hey</p>
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  layout: 'landing',
  head () {
    return {
      title: 'EMR Worx'
    }
  },
  beforeMount () {
    this.logVisit()
  },
  methods: {
    logVisit: function () {
      axios.post('/api/visits/', {
        url: '/subscribe-success'
      })
    }
  }
}
</script>

<style scoped>

</style>
