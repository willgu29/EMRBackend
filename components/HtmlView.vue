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
  methods: {
    loadHtml: function () {
      const self = this
      var url = ('/api/drewpark/file/' + this.id)
      axios.get(url).then(response => {
        console.log(response)
        self.populateHtml(response.data.text)
      })
    },
    populateHtml: function (text) {
      this.$refs.html.innerHTML = text
    }
  }
}
</script>
