<template>
  <section class="subscribe-success-container">
    <div>
      <h1>Contributors</h1>
      <h2>To contribute or give feedback email will@emrworx.com</h2>
      <div class='contributor-profile'>
        <p id="blurb">Drew Park MD</p>
        <p id="blurb">UC Irvine Medical Center</p>
        <p id="blurb">Psychiatry Resident</p>
      </div>
      <div class='contributor-profile'>
        <p id="blurb">Joseph Gantala</p>
        <p id="blurb">Laoag City General Hospital</p>
        <p id="blurb">AAPC Certified Medical Coder</p>
      </div>
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
