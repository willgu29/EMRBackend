<template>
  <section class="error-container">
    <h1 class="title">
      {{ error.statusCode }}
    </h1>
    <p class="error-text">
      Try refreshing this screen.
    </p>
    <h2 class="info">
      {{ error.message }}
    </h2>
    <nuxt-link class="button" to="/" v-if="error.statusCode === 404">
      Home
    </nuxt-link>
    <nuxt-link class="button" to="/" v-if="error.statusCode === 500">
      Home
    </nuxt-link>
  </section>
</template>
<script>
import 'babel-polyfill'

export default {
  props: ['error'],
  head () {
    return {
      title: 'EMR Worx'
    }
  }
}
</script>

<style scoped>
.error-container {
  text-align: center;
}
.title
{
  margin-top: 15px;
  font-size: 5em;
  margin-bottom: 10px;
}
.info
{
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
}
.button
{
  margin-top: 50px;
}
</style>
