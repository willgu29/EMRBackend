<template>
  <section class="search-container">
    <h1 class='title'>{{ this.user.name }}</h1>
    <div class="list-wrapper" v-if="user.bundles.length > 0">
      <ul class="items">
        <li v-for="(bundle, index) in user.bundles" :key="index" class="item">
          <h2 class="bundle" v-on:click="toggleShowBundle(index)">{{ bundle.name }}: {{ bundle.group }}</h2>
          <div v-show="showEmrs[index]" transition="fade" >
            <div v-if="user.bundles[index].emrs.length > 0">
              <ul>
                <li v-for="(emr, index) in user.bundles[index].emrs" :key="index" class="item">
                  <nuxt-link :to="{ name: 'emrs-id', params: { id: emr._id }}" target="_blank" >
                    {{emr.name}}: {{emr.description.short}}
                  </nuxt-link>
                </li>
              </ul>
            </div>
            <div v-else>
              <ul>
                <li>
                  <p>TBA</p>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div class="macros">
      <h2 class="bundle" v-on:click="toggleShowBundle(user.bundles.length)">Macros</h2>
      <macro-list v-show="showEmrs[user.bundles.length]" :macros="this.user.macros" />
    </div>

  </section>
</template>

<script>
import axios from '~/plugins/axios'
import MacroList from '~/components/MacroList.vue'

export default {
  name: 'saved',
  layout: 'bundle',
  components: {
    MacroList
  },
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
  },
  beforeMount () {
    this.showEmrs = new Array(this.user.bundles.length + 1).fill(false)
  },
  methods: {
    toggleShowBundle: function (index) {
      console.log('toggle: ' + index)
      var array = this.showEmrs.slice()
      array[index] = !array[index]
      this.showEmrs = array
      console.log(this.showEmrs)
    }
  }
}
</script>

<style scoped>
.macros {
  margin-left: 40px;
}
.items {
  list-style: none;
}
.bundle {
  color: purple;

}
.bundle:hover {
  text-decoration: underline;
}
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
  color: #0a65ff
}
.fade-transition
{
  transition: all 0.5s ease;
}

.fade-enter, .fade-leave
{
   opacity : 0;
}

</style>
