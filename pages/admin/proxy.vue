<template>
  <section class="container">
    <h1 class="title">
      Create Proxy
    </h1>
    Add Proxy: <input v-on:keyup.enter="addToProxies" type='text' id='proxy' v-model="proxy" autocomplete="off" />
    <br /> <br />
    <form v-on:submit.prevent="onSubmit">
      EMR ID: <input type="text" id="id" v-model="id" autocomplete="off" />
      Proxies: <textarea id="proxies" name="proxies" v-model="proxies"></textarea>
      <br />
      <input type='submit' />
    </form>

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
  data () {
    return {
      id: '',
      proxies: [],
      proxy: ''
    }
  },
  head () {
    return {
      title: 'Admin: EMR Worx'
    }
  },
  methods: {
    addToProxies: function () {
      this.proxies.push(this.proxy.toUpperCase())
      this.proxy = ''
    },
    onSubmit: function () {
      axios.post('/api/proxies/', {
        id: this.id,
        proxy: this.proxies
      })
        .then((res) => {
          alert('Last thing! Alert WFG to add file to server.')
        })
        .catch((e) => {
          alert(e.response.statusText)
        })
    }
  }
}
</script>

<style scoped>
#proxies {
  width: 500px;
  height: 200px;
}
form {
  display: inline-grid;
}
.title
{
  margin: 15px 0;
}
#about {
  margin-left: 100px;
  margin-right: 100px;
  text-align: left;
}
</style>
