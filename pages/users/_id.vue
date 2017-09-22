<template>
  <section class="search-container">
    <h1 class='title'>{{ this.user.institution}}: {{ this.user.name }}</h1>
    <div class="list-wrapper" v-if="user.bundles.length > 0">
      <ul class="items">
        <li v-for="(bundle, index) in user.bundles" :key="index" class="item">
          <h2>{{ bundle.name }}: {{ bundle.group }}</h2>
          <ul>
            <li v-for="(emr, index) in user.bundles[index].emrs" :key="index" class="item">
              <nuxt-link :to="{ name: 'emrs-id', params: { id: emr._id }}" target="_blank" >
                {{emr.name}}: {{emr.description.short}}
              </nuxt-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  name: 'saved',
  layout: 'bundle',
  validate ({ params, query }) {
    // TODO: Validate via cookie stored, hash via server
    // (compare saved cookie to sessionId in database)
    return true
  },
  asyncData ({ params, error }) {
    console.log(params)
    return axios.get('/api/users/' + params.id)
      .then((res) => {
        return { user: res.data }
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'User not found' })
      })
  },
  data () {
    return {
      showEmrs: []
    }
  },
  head () {
    return {
      title: `EMR Worx: ${this.user.name}`
    }
  }
}
</script>

<style scoped>
.search-container {
 margin-left: 20px;
}
.title {
  margin: 15px 0;
  margin-left: 10px;
  font-weight: 400;
}
a {
  font-size: 22px;
  margin-left: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  text-decoration: none;
  color: purple;
}

</style>
