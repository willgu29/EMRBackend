<template>
  <section class="container">
    <h1 class="title">
      Contact
    </h1>
    <p><b><a href="mailto:info@emrworx.com">info@emrworx.com</a></b> for general inquiries.</p>
    <p><b><a href="mailto:hello@emrworx.com">hello@emrworx.com</a></b> for everything else!</p>
  </section>
</template>

<script>
export default {
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
