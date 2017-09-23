<template>
  <section class="search-container">

    <form action="/macros/search" method="get">
      <input class="search-bar" type="search" :value="this.$route.query.text" name="text" autocomplete="off" />
    </form>

    <div class="list-wrapper" v-if="macros.length > 0">
      <ul class="items">
        <li v-for="(macro, index) in macros" :key="index" class="item">
          <h1 class='title-clickable' v-on:click="copyToClipboard(index)" @mouseenter="onHover(index)" @mouseleave="onExit(index)">{{macro.name}}</h1>
          <p>{{snippet(macro.text, index)}}</p>
        </li>
      </ul>
    </div>
    <textarea id="flash" v-show="isCopying" ref="copyContainer" readonly>Loading...</textarea>

  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  layout: 'search',
  async asyncData (context) {
    var searchText = context.query.text.replace(/&/g, '%26')
    var url = ('/api/macros?text=' + searchText)
    let { data } = await axios.get(url)
    return { macros: data }
  },
  data () {
    return {
      showHover: [],
      isCopying: false
    }
  },
  head () {
    return {
      title: 'EMR Worx Macros'
    }
  },
  beforeMount () {
    this.showHover = new Array(this.macros.length).fill(false)
  },
  methods: {
    snippet: function (text, index) {
      if (this.showHover[index]) { return text }
      return text.slice(0, 60) + '...'
    },
    onHover: function (index) {
      var array = this.showHover.slice()
      array[index] = true
      this.showHover = array
    },
    onExit: function (index) {
      var array = this.showHover.slice()
      array[index] = false
      this.showHover = array
    },
    copyToClipboard: function (index) {
      var self = this
      this.isCopying = true
      this.$refs.copyContainer.value = this.macros[index].text
      setTimeout(function () {
        self.$refs.copyContainer.select()
        var successful = document.execCommand('copy')
        var msg = successful ? 'successful' : 'unsuccessful'
        console.log('Copying text command was ' + msg)
        self.isCopying = false
        alert('Copied to clipboard!')
      }, 1)
    }
  }

}
</script>

<style scoped>
#flash {
  width: 1px;
  height: 1px
}
.title-clickable {
  font-size: 24px;
  margin: 15px 0;
  color: #0a65ff;
}
.title-clickable:hover {
  text-decoration: underline;
}
.search-bar {
  width: 30%;
  font-size: 20px;
  margin-left: 20px;
}
.items {
  list-style: none;
  margin: 0;
  padding: 0;
}
.item {
  margin: 40px 80px;
}
</style>
