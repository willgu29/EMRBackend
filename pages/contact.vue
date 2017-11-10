<template>
  <section class="container">
    <h1 class="title">
      Contact
    </h1>
    <p><b><a href="mailto:will@emrworx.com">will@emrworx.com</a></b></p>

  </section>
</template>

<script>
export default {
  layout: 'info',
  head () {
    return {
      title: 'Contact EMR Worx'
    }
  }
}
</script>

<style scoped>
.title {
  margin: 15px 0;
}
b {
  font-weight: 600;
}
a {
  text-decoration: underline;
  margin-right: 0px;
  margin-left: 0px;
}

</style>
