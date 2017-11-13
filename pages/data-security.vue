<template>
  <section class="subscribe-success-container">
    <div>
      <h1>Data Security</h1>
      <p id="blurb">EMR Worx has implemented HIPAA compliance and data protection recommendations per Google Suite applications guidelines (https://support.google.com/a/answer/3407054?hl=en).<br /> <br /> Google Suite applications have earned 27001 certification and SOC 2 and SOC 3 Type II audits, consistent with industry standards of data security for protected health information.</p>
      <img width="250px" src="~/assets/img/hippa.png" />
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
