<template>
  <section class="container">
    <img width="250" src="~/assets/img/logo.png" />
    <h2>
      Search for templates and shortcuts.
    </h2>
    <form action="/search" method="get">
      <input class="search-bar" type="search" name="text" autocomplete="off" />
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
