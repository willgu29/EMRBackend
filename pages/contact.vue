<template>
  <section class="subscribe-success-container">
    <div>
      <h1>Contact</h1>
      <p><a class='link' href="mailto:will@emrworx.com">will@emrworx.com</a></p>
    </div>
  </section>
</template>

<script>

export default {
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
#blurb {
  max-width: 700px;
}
.subscribe-success-container {
  margin: 60px 60px 60px 120px;
}
.logo-welcome {
  vertical-align: middle;
}
</style>
