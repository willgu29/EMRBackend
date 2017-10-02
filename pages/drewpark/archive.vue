<template>
  <section class="container">
      <h1>Archives</h1>
      <hr>
      <div class="list-wrapper" v-if="objects.length > 0">
        <ul class="items">
          <li v-for="(object, index) in objects" :key="index" class="item">
            <h2 class='highlight' v-on:click="expandView(index)">{{formatStringDate(object.createdAt)}}</h2>
            <p v-show="showModules[index]">{{object.process}}</p>
            <html-view v-show="showModules[index]" :codePath="object.codePath" />
          </li>
        </ul>
      </div>
      <div class='no-matches' v-else>
        <h2>Looks like we haven't done any tasks for you yet.</h2>
      </div>

  </section>
</template>

<script>
import axios from '~/plugins/axios'
import HtmlView from '~/components/HtmlView.vue'
export default {
  layout: 'landing',
  name: 'archive',
  components: {
    HtmlView
  },
  asyncData ({ params, error }) {
    console.log(params)
    return axios.get('/api/drewpark/')
      .then((res) => {
        return { objects: res.data }
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'Object not found' })
      })
  },
  data () {
    return {
      showModules: []
    }
  },
  head () {
    return {
      title: 'EMR Worx: Drew Park'
    }
  },
  mount () {
    this.showModules = new Array(20).fill(false)
  },
  methods: {
    expandView: function (index) {
      var array = this.showModules.slice()
      array[index] = !array[index]
      this.showModules = array
    },
    formatStringDate: function (stringDate) {
      var date = new Date(stringDate)
      var day = date.getDate()
      var monthIndex = date.getMonth()
      var year = date.getFullYear()
      return (monthIndex + 1) + '/' + day + '/' + year
    }
  }
}
</script>

<style scoped>
.items {
  list-style: none;
  margin: 0;
  padding: 0;
}
.highlight {
  color: #6093e5;
}
.highlight:hover {
  cursor: pointer;
  text-decoration: underline;
}
</style>
