<template>
  <section class="emr-container">
    <h1 class="title">
      {{ emr.name }}
    </h1>
    <h2 class="info">
      {{ emr.description }}
    </h2>
    <emr-text-area :id='emr.id' />
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
        error({ statusCode: 404, message: 'User not found' })
      })
  },
  head () {
    return {
      title: `EMR: ${this.emr.name}`
    }
  }
}
</script>

<style scoped>
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
