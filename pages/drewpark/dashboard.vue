<template>
  <section class="container">
    <h1>Welcome to your dashboard Drew</h1>
    <p>All important information for your day will be listed here.</p>
    <hr>
    <html-view :id='this.object._id' />

  </section>
</template>

<script>
import axios from '~/plugins/axios'
import HtmlView from '~/components/HtmlView.vue'

export default {
  layout: 'landing',
  name: 'dashboard',
  components: {
    HtmlView
  },
  asyncData ({ params, error }) {
    console.log(params)
    return axios.get('/api/drewpark/today')
      .then((res) => {
        return { object: res.data }
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'Object not found' })
      })
  },
  head () {
    return {
      title: 'EMR Worx: Drew Park'
    }
  }
}
</script>

<style scoped>
.container {
  text-align: left;
  margin-left: 20px;
}

</style>
