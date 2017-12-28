<!--NOTE TO CODER:

This admin panel helps Drew create proxies.
How I searched proxies was inclusive: So if a proxy had ["Well Child 6 Month"]
Then "Well" or "Child" or "Well Child" or "Child 6" would turn up as a hit.
"Child Well" would not.

To make it simplier for Drew, I just ran all the different combinations of potential
search terms.

For example: if the key words were HEART, FAILURE, and HF.
The proxy would be ["HEART FAILURE HF", "HEART HF FAILURE", "FAILURE HEART HF", ...]
until all the combinations of searches for those 3 key words could be ordered.

This is currently not in use, to use it, just rewire the onSubmit function to
a valid API endpoint (as currently proxy is replaced with finds)

To visit this route, I added a small checker, so the actual route is
emrworx.com/admin/proxy?user=drew&pw=toocool2

This is reflected in the validate function.

 -->

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
      Created Search Terms: <textarea id="proxies" name="combos" v-model="combos"></textarea>
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
      proxy: '',
      permArr: [],
      usedChars: [],
      combos: []
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
      this.permute(this.proxies)
      console.log(this.permArr)
      var searchTerms = []
      for (var perm of this.permArr) {
        if (this.proxies.length === perm.length) {
          var wordCombo = perm.join(' ').trim()
          searchTerms.push(wordCombo)
        }
      }
      console.log(searchTerms)
      this.combos = searchTerms
    },
    onSubmit: function () {
      axios.post('/api/proxies/', {
        id: this.id,
        proxy: this.combos
      })
        .then((res) => {
          alert('Last thing! Alert WFG to add file to server.')
        })
        .catch((e) => {
          alert(e.response.statusText)
        })
    },
    permute: function (input) {
      var i, ch
      for (i = 0; i < input.length; i++) {
        ch = input.splice(i, 1)[0]
        this.usedChars.push(ch)
        if (input.length === 0) {
          this.permArr.push(this.usedChars.slice())
        }
        this.permute(input)
        input.splice(i, 0, ch)
        this.usedChars.pop()
      }
    }
  }
}
</script>

<style scoped>
#proxies {
  width: 400px;
  height: 150px;
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
