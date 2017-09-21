<template>
  <section class="container">

  </section>
</template>

<script>
export default {
  validate ({ params, query }) {
    // TODO: Validate via cookie stored, hash via server
    // (compare saved cookie to sessionId in database)
    return true
  },
  head () {
    return {
      title: 'EMR Worx'
    }
  }
}
</script>

<style scoped>
.title
{
  margin: 15px 0;
}
.search-bar {
  width: 30%;
  font-size: 20px;
}
</style>
