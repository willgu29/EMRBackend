<template>

  <div id='emr'>

    <div id="buttons">
      <button class="copy" type="submit" v-on:click="copyToClipboard">Copy</button>
      <info-button />
    </div>

    <textarea ref="copyContainer" readonly></textarea>


  </div>
</template>

<style>

#emr {
  display: inline-grid;
  margin-left: 10px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 5px;
}

h1, h2 {
  font-weight: normal;
}
.copy {
  width: 25%;
}
#buttons {
  display: flex;
}

textarea {
  margin-top: 15px;
  display: block;
  outline-color: black;
  outline-width: 1;
  outline-style: double;
  width: 600px;
  height: 500px;

}
button {
  width: 100px;
}

a {
  color: purple;
  text-decoration: none;
}
</style>


<script>
import InfoButton from '~/components/InfoButton.vue'
export default {
  props: ['id', 'filePath'],
  name: 'emr',
  components: {
    InfoButton
  },
  data () {
    return {
      body: this.filePath
    }
  },
  mounted () {
    this.getText()
  },
  methods: {
    getText: function () {
      var request = new XMLHttpRequest()
      var populate = this.populateTextArea
      var url = this.$data.body
      request.open('GET', url, true)
      request.send(null)
      request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
          var type = request.getResponseHeader('Content-Type')
          if (type.indexOf('text') !== 1) {
            populate(request.responseText)
          }
        }
      }
    },
    populateTextArea: function (text) {
      this.$refs.copyContainer.value = text
    },
    copyToClipboard: function (text) {
      this.$refs.copyContainer.select()
      var successful = document.execCommand('copy')
      var msg = successful ? 'successful' : 'unsuccessful'
      console.log('Copying text command was ' + msg)
    }
  }

}
</script>
