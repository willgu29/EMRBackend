<template>
  <section class="subscribe-success-container">
    <div>
      <h1>We're sorry, looks like that note template doesn't exist anymore.</h1>
      <p>Send us an email at will@emrworx.com if you'd like a copy.</p>

      <img v-on:click="goHome()" class='logo-welcome' width="150" src="~/assets/img/logo-roboto.svg"/>
    </div>
  </section>
</template>

<script>

export default {
  layout: 'landing',
  head () {
    return {
      title: 'EMR Worx'
    }
  },
  methods: {
    goHome: function () {
      window.location.href = '/'
    }
  }
}
</script>

<style scoped>
.subscribe-success-container {
  margin: 60px 60px 60px 120px;
}
.logo-welcome {
  vertical-align: middle;
}
</style>
