<template>
  <section class="search-container">
    <div class="list-wrapper" v-if="users.length > 0">
      <ul class="items">
        <li v-for="(user, index) in users" :key="index" class="item">
          <nuxt-link :to="{ name: 'users-id', params: { id: user._id }}">
            {{ user.name }}: {{ user.institution }}
          </nuxt-link>
        </li>
      </ul>
    </div>

  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  name: 'users',
  asyncData ({ params, error }) {
    console.log(params)
    return axios.get('/api/users/')
      .then((res) => {
        return { users: res.data }
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'Users not found' })
      })
  },
  head () {
    return {
      title: 'EMR Worx: Users'
    }
  }
}
</script>

<style scoped>
.items
{
  list-style: none;
  margin: 0;
  padding: 0;
}
.item
{
  margin: 40px 80px;
}
a {
  font-size: 22px;
  margin-left: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  text-decoration: none;
  color: purple;
}
a:hover {
  text-decoration: underline;
}
</style>
