<template>

  <div id='emr'>

    <div id="buttons" v-if="this.program.name === 'Quest' || this.program.name === 'Epic'">
      <button class="copy" type="submit" v-on:click="copyToClipboard">Copy as</button>
      <select v-model="selected">
        <option name="epic">Epic</option>
        <option name="quest">Quest</option>
      </select>
      <info-button :filePath='howTo' />
    </div>
    <div id="buttons" v-else>
      <button class="copy" type="submit" v-on:click="copyToClipboard">Copy</button>
      <info-button :filePath='howTo' />
    </div>

    <textarea ref="copyContainer" readonly>Loading...</textarea>


  </div>
</template>

<style>

#emr {
  display: inline-grid;
  margin-left: 10px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
  color: #0a65ff;
  text-decoration: none;
}
</style>


<script>
import axios from '~/plugins/axios'
import InfoButton from '~/components/InfoButton.vue'
export default {
  props: ['id', 'filePath', 'program'],
  name: 'emr',
  components: {
    InfoButton
  },
  data () {
    if (this.program.name === 'Quest') {
      return { howTo: '/other/howToQuest.pdf', selected: this.program.name }
    } else {
      return { howTo: '/other/howToTemplate.pdf', selected: this.program.name }
    }
  },
  beforeMount () {
    this.getText()
  },
  methods: {
    getText: function () {
      const self = this
      var url = ('/api/emrs/file/' + this.id)
      axios.get(url).then(response => {
        self.populateTextArea(response.data.text)
      })
    },
    populateTextArea: function (text) {
      this.$refs.copyContainer.value = text
    },
    copyToClipboard: function (text) {
      this.$refs.copyContainer.select()
      var successful = document.execCommand('copy')
      var msg = successful ? 'successful' : 'unsuccessful'
      console.log('Copying text command was ' + msg)
    },
    exportAs: function (program) {
      if (this.program.name === this.selected) {
        return
      }

      if (this.program.name === 'Quest') {
        this.$refs.copyContainer.replace('/[[[.+]]]/', 'willgusayshi')
      } else if (this.program.name === 'Epic') {
        this.$refs.copyContainer.replace('***', 'willgusayshi')
      }
      if (this.selected === 'Epic') {
        this.$refs.copyContainer.replace('willgusayshi', '***')
      } else if (this.selected === 'Quest') {
        this.$refs.copyContainer.replace('willgusayshi', '[[[ ]]]')
      }
    }
  }

}
</script>
