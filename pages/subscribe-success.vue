<template>
  <section class="subscribe-success-container">
    <div>
      <h1>Thank you for your subscription</h1>
      <p>We'll be in touch with you soon</p>

      <img class='logo-welcome' width="150" src="~/assets/img/logo-roboto.svg"/>
    </div>
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
    // this.logVisit()
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
.subscribe-success-container {
  margin: 60px 60px 60px 60px;
}
.logo-welcome {
  vertical-align: middle;
}
</style>
