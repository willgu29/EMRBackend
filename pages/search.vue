<template>
  <section class="container">
    <h1 class="title">
      EMRs
    </h1>
    <ul class="items">
      <li v-for="(emr, index) in emrs" :key="index" class="item">
        <nuxt-link :to="{ name: 'id', params: { id: index }}">
          {{ emr.name }}
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  layout: 'search',
  async asyncData () {
    let { data } = await axios.get('/api/emrs')
    return { emrs: data }
  },
  head () {
    return {
      title: 'EMRS'
    }
  }
}
</script>

<style scoped>
.container {
  text-align: left;
  margin-left: 10px;
}
.title
{
  margin: 30px 0;
}
.items
{
  list-style: none;
  margin: 0;
  padding: 0;
}
.item
{
  margin: 10px 0;
}
</style>
