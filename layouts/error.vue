<template>
  <section class="error-container">
    <h1 class="title">
      {{ error.statusCode }}
    </h1>
    <p class="error-text">
      Well, I have no idea. Can I help you?
    </p>
    <h2 class="info">
      {{ error.message }}
    </h2>
    <nuxt-link class="button" to="/" v-if="error.statusCode === 404">
      Home
    </nuxt-link>
  </section>
</template>
<script>
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
