<template>
  <section class="container">

    <img width="250" src="~/assets/img/logo.png" />
    <h2>
      Finish your notes faster
    </h2>
    <form action="/search" method="get">
      <input v-model='searchText' placeholder="Search for note templates" class="search-bar" type="search" name="text" autocomplete="off" />
    </form>

    <div class='buttons'>
      <input v-on:click="search" type='submit' class='button' value='Search' />
      <input v-on:click="demo" type='submit' class='button' value='Demo' />
    </div>

    <br />
    <br />
    <br />
    <hr>
    <section>
      <h1 class='title'>Note Templates by Department:</h1>
      <div class="list-wrapper" v-if="users.length > 0">
        <ul class="items">
          <li v-for="(user, index) in users" :key="index" class="item">
            <nuxt-link class='button' :to="{ name: 'users-id', params: { id: user._id }}">
              {{ user.name }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </section>

  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
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
      title: 'EMR Worx'
    }
  },
  data () {
    return {
      searchText: ''
    }
  },
  methods: {
    search: function () {
      window.location.href = '/search?text=' + this.searchText
    },
    demo: function () {
      window.location.href = '/demo'
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
}
a {
  background-color: transparent;
}
a:visited {
  background-color: transparent;
}
.buttons {
  margin-top: 20px;
}
.button {
  margin: 5px 5px 5px 5px
}
.title
{
  margin: 15px 0;
}
.search-bar {
  width: 30%;
  font-size: 20px;
}
</style>
