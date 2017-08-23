<template>
  <section class="search-container">

    <ul class="items">
      <li v-for="(emr, index) in emrs" :key="index" class="item">
        <h2>
          <nuxt-link :to="{ name: 'id', params: { id: index }}">
            {{ emr.name }}
          </nuxt-link>
        </h2>
        <p>{{emr.short}}</p>
        <p>{{emr.author}}</p>
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
  margin: 30px 50px;
}
a {
  margin-left: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  text-decoration: none;
  color: purple;
}
h2 {
  margin-bottom: 0px;
}
p {
  margin-top: 0px;
  margin-left: 2px;
}
a:hover {
  text-decoration: underline;
}
</style>
