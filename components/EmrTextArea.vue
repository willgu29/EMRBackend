<template>

  <div id='emr'>
    <!--
      <form id="addData" v-on:submit.stop.prevent="smartList">
        <div id="bottom" v-if="this.indicator != 'NONE' && this.indicator != ''">
          <label class='indicator' >Replace <em>{{this.indicator}}</em> with... </label><br />
          <input id="wrap" type="text" placeholder="type in data and enter" v-model="replace" />
          <input type="submit" />
        </div>
        <div v-else>
          <label>DONE</label>
        </div>
      </form> -->

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

    <textarea id="copyContainer" ref="copyContainer" v-model="text"></textarea>
  
  </div>
</template>

<style>
.indicator {
  display: inline-block;
  width: 600px;
  text-align: left;
}
#bottom {
  text-align: left;
}
#buttons {
  text-align: right;
}
#emr {
  margin: 0 auto;
  width: 600px;
}

h1, h2 {
  font-weight: normal;
}
code {
  margin-top: 15px;
  display: inline-block;
  outline-color: black;
  outline-width: 1;
  outline-style: double;
  width: 600px;
  height: 500px;
  text-align: left;
}

textarea {
  margin-top: 15px;
  display: inline-block;
  outline-color: black;
  outline-width: 1;
  outline-style: double;
  width: 600px;
  height: 500px;

}
button {
  width: 100px;
  cursor: pointer;
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
    var howTo = ''
    if (this.program.name === 'Quest') {
      howTo = '/other/howToQuest.pdf'
    } else {
      howTo = '/other/howToTemplate.pdf'
    }
    return {
      howTo: howTo,
      selected: this.program.name,
      text: 'Loading...',
      replace: '',
      indicator: '.'
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
      this.text = text
    },
    copyToClipboard: function (text) {
      this.$refs.copyContainer.select()
      var successful = document.execCommand('copy')
      var msg = successful ? 'successful' : 'unsuccessful'
      console.log('Copying text command was ' + msg)
    },
    highlightNextReplace: function () {
      if (this.selected === 'Quest') {
        var find = '\\[\\[\\[(.*?)\\]\\]\\]'
        var re = new RegExp(find)
        var result = this.text.match(re)
        if (result) {
          console.log('Match: ' + result[0])
          this.indicator = result[0]
        } else {
          this.indicator = 'NONE'
        }
      } else if (this.selected === 'Epic') {
        var find2 = '\\*\\*\\*'
        var re2 = new RegExp(find2)
        var result2 = this.text.match(re2)
        if (result2) {
          console.log('Match: ' + result2[0])
          this.indicator = result2[0]
        } else {
          this.indicator = 'NONE'
        }
      } else {
        this.indicator = ''
      }
    },
    smartList: function () {
      if (this.indicator === 'NONE' || this.replace === '') { return }
      this.text = this.text.replace(this.indicator, this.replace, 1)
      this.replace = ''
    },
    exportAs: function (templateProgram, selectedProgram, text) {
      if (templateProgram === selectedProgram) {
        return
      }
      var newText = ''
      var find = '\\[\\[\\[ \\]\\]\\]'
      var re = new RegExp(find, 'g')
      var find4 = '\\[\\[\\[\\]\\]\\]'
      var re4 = new RegExp(find4, 'g')
      var find2 = '\\[<<\\w+>>\\]'
      var re2 = new RegExp(find2, 'g')
      var find3 = '\\[\\[\\[.*\\]\\]\\]'
      var re3 = new RegExp(find3, 'g')

      if (templateProgram === 'Quest') {
        newText = text.replace(re, '***')
        newText = newText.replace(re4, '***')

        var resultsData = newText.match(re2)
        var resultsFillIn = newText.match(re3)
        if (resultsData) {
          for (var data of resultsData) {
            newText = newText.replace(data, '***' + ' (' + data + ')', 1)
          }
        }
        if (resultsFillIn) {
          for (var fill of resultsFillIn) {
            var helperText = fill.replace('[[[', '')
            helperText = helperText.replace(']]]', '')
            newText = newText.replace(fill, '***' + ' (' + helperText + ')', 1)
          }
        }
      }
      this.text = newText
    }
  },
  watch: {
    selected: function (val, oldVal) {
      this.exportAs(oldVal, val, this.text.slice())
    },
    text: function (val, oldVal) {
      this.highlightNextReplace()
    }
  }

}
</script>
