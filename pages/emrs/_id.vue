<template>
  <section class="emr-container">
    <h1 class="title">
      {{ emr.name }}
    </h1>
    <h2 class="info">
      {{ emr.type }}
    </h2>
    <emr-text-area :id='emr._id' :filePath='emr.filePath' :program='emr.program' :fileType="emr.fileType" />
    <p>By: {{emr.author.name}} {{emr.author.degree}} </p>
  </section>
</template>

<script>
import axios from '~/plugins/axios'
import EmrTextArea from '~/components/EmrTextArea.vue'

export default {
  layout: 'emr',
  components: {
    EmrTextArea
  },
  name: 'id',
  asyncData ({ params, error }) {
    return axios.get('/api/emrs/' + params.id)
      .then((res) => {
        return { emr: res.data }
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'Emr not found' })
      })
  },
  head () {
    return {
      title: `EMR Worx: ${this.emr.name}`
    }
  }
}
</script>

<style scoped>
.emr-container {
  display: inline-block;
  margin: 0 auto;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.title
{
  margin-top: 30px;
}
.info
{
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
  margin-top: 10px;
  margin-bottom: 10px;
}
.button
{
  margin-top: 30px;
}
</style>
