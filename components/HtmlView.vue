<template>
  <div ref='html' id='html' class='html-container'>
  </div>
</template>

<style>
.patient {
  font-size: 24px;
  margin-top: 20px;
  color: #6093e5;
}
li {
  margin-bottom: 10px;
}
table {
  border: 2px solid #6093e5;;
  border-radius: 3px;
  background-color: #fff;
}

th {
  background-color: #6093e5;;
  color: rgba(255,255,255,0.66);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

td {
  background-color: #f9f9f9;
}

th, td {
  min-width: 100px;
  padding: 10px 20px;
}
</style>

<script>
import axios from '~/plugins/axios'
export default {
  props: ['id'],
  name: 'htmlView',
  beforeMount () {
    this.loadHtml()
  },
  mounted () {
    const script = document.createElement('script')
    script.setAttribute('type', 'text/javascript')
    script.setAttribute('src', 'https://storage.googleapis.com/emrworx.com/drewpark/pre-rounding.js')
    this.$refs.html.appendChild(script)
  },
  methods: {
    loadHtml: function () {
      if (!this.id) { return }
      const self = this
      var url = ('/api/drewpark/file/' + this.id)
      axios.get(url).then(response => {
        console.log(response)
        self.populateHtml(response.data.text)
      })
    },
    populateHtml: function (text) {
      // this.render(text)
      // this.$refs.html.innerHTML = text
      // var content = document.createElement('div')
      // content.innerHTML = '<h1 v-on:click="hi">h1</h1>'
      // this.$refs.html.appendChild(content)
      // var element = this.$refs.html.innerHTML
      // var element = document.getElementById('html').append(text)
      // Vue._compile(this.$refs.html.innerHTML)
    },
    hi: function () {
      alert('hi')
    }
  }
}
</script>
