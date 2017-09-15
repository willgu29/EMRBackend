<template>
  <section>
  <object :data="emr.filePath" type="application/pdf">
    <p><a :href="emr.filePath">Link to the PDF!</a></p>
  </object>
</section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  layout: 'landing',
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
object {
  width: 100%;
  height: 1000px;
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
