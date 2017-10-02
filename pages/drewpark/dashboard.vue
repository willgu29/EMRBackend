<template>
  <section class="container">
    <h1>Welcome to your dashboard Drew</h1>
    <p>All important information for your day will be listed here.</p>
    <hr>
    <div v-if="this.codePath">
      <html-view :codePath='this.codePath' />
    </div>
    <div v-else>
      <h3>No tasks currently being done.</h3>
    </div>

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
        var object = res.data
        if (object) {
          return {
            process: object.process,
            codePath: object.codePath,
            displayType: object.displayType
          }
        } else {
          return { process: '', codePath: '', displayType: '' }
        }
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
