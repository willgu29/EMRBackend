<template>
    <div class="list-wrapper" v-if="macros.length > 0">
      <ul class="items">
        <li v-for="(macro, index) in macros" :key="index" class="item">
          <h1 class='title-clickable' v-on:click="copyToClipboard(index)" @mouseenter="onHover(index)" @mouseleave="onExit(index)">{{macro.name}}</h1>
          <p>{{snippet(macro.text, index)}}</p>
        </li>
      </ul>
      <textarea id="flash" v-show="isCopying" ref="copyContainer" readonly>Loading...</textarea>
    </div>
</template>

<style>
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
.items {
  list-style: none;
}
/*.item {
  margin: 40px 80px;
}*/
</style>

<script>
export default {
  props: ['macros'],
  name: 'macro-list',
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
