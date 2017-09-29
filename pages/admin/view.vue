<template>

  <section class="container">

  </section>
</template>

<script>

export default {
  validate ({ params, query }) {
    console.log(query)
    if (query.user === 'drew' && query.pw === 'toocool2') {
      return true
    } else {
      return false
    }
  },
  head () {
    return {
      title: 'Admin: EMR Worx'
    }
  },
  data () {
    return {
      text: ''
    }
  }
}
</script>

<style scoped>

</style>
