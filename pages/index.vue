<template>
  <section class="container">
    <h1 class="title">
      EMR Worx
    </h1>
    <h2>
      Search for templates and shortcuts.
    </h2>
    <form action="/search">
      <input class="search-bar" type="search" />
    </form>

  </section>
</template>

<script>
export default {
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
