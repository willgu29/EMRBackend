<template>

  <section class="container">
    <ul>
      <li v-for="(proxy, index) in proxies" :key="index" class="item">
        <h2>
            {{ proxy.emr.name }}: {{ proxy.emr.description.short }}
        </h2>
        <a class='link' :href="proxy.emr.filePath" target="_blank">{{ proxy.emr.filePath }}</a>
        <p>{{ proxy.proxy }}</p>
        <p>{{ proxy._id }}</p>

      </li>
    </ul>
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  validate ({ params, query }) {
    console.log(query)
    if (query.user === 'drew' && query.pw === 'toocool2') {
      return true
    } else {
      return false
    }
  },
  asyncData ({ params, error }) {
    return axios.get('/api/proxies/all')
      .then((res) => {
        return { proxies: res.data }
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'Emr not found' })
      })
  },
  head () {
    return {
      title: 'Admin: EMR Worx'
    }
  }
}
</script>

<style scoped>
.link {
  color: #6093e5
}
.link:hover {
  text-decoration: underline;
}
</style>
