<template>
  <section class="search-container" v-on:click="unFocus">
    <input ref="focuser" type='submit' class='focuser' />
    <div class='display-container'>
      <img class="header-logo" width="150" src="~/assets/img/logo-roboto.png" v-on:click="home" />
      <div class="form inline">
        <div class='input-group inline'>
          <input ref='searchBar' v-on:click.stop.prevent v-on:keyup.enter.stop="autoComplete" v-on:focus.self="dropdown" placeholder='Search "Hyperglycemia, unspecified (R73.9)" or "Psychosis"'  type="text" v-bind:class="{ error: retryDiagnosis }" class='form-search-field ' name="type" v-on:keyup="filterNote" autocomplete="off" v-model="searchText">
          <ul class='dropdown'>
            <li class='clickable-list-item' v-on:click.stop="selectDiagnosis(diagnosis.code, $event)" v-show="focused === 0" v-for="diagnosis in displayDiagnoses">{{diagnosis.displayText}}</li>
          </ul>
          <input type='submit' class='submit-button' value='add diagnosis' v-on:keyup.enter.stop v-on:click.prevent.stop="onSubmit"/>
        </div>
      </div>
    </div>
    <div class='grid-container' v-show="displayTemplate === 1">
      <div class='outline grid-small'>
        <h1 class='noteType'>{{type}}</h1>
        <ul>
          <li class='sections clickable' v-on:click.stop="expand(index)" v-for="(section, index) in sections" :key="index">
            <div>
              <p class='inline section-header' v-bind:class="{ selected: sectionIndexDisplayed === index }">{{section.header}}</p>
            </div>
          </li>
        </ul>
      </div>
      <div class='notePanel grid-large'>
          <ul>
            <li class='inline' v-for="diagnosis in addedDiagnoses">{{diagnosis}}</li>
            <copy-to-clipboard v-on:click.self.stop="copy(index)" />
          </ul>
        <pre class='document'>
          {{sectionText}}
        </pre>
      </div>
    </div>
    <!-- Mobile Version Not Supported Alert -->
    <div class='width-too-small-alert'>
      <p>EMR Worx is intended for use on a desktop. Please widen your browser window.</p>
    </div>
    {{diagnoses}}
  </section>
</template>

<script>
import CopyToClipboard from '~/components/CopyToClipboard'
import axios from '~/plugins/axios'

export default {
  layout: 'none',
  components: {
    CopyToClipboard
  },
  head () {
    return {
      title: 'EMR Worx'
    }
  },
  async asyncData (context) {
    var url = ('/api/diagnoses')
    let { data } = await axios.get(url)
    return { diagnoses: data }
  },
  data () {
    return {
      searchText: '',
      retryDiagnosis: false,
      noteType: 'History and Physical',
      specialty: 'Psychiatry',
      diagnoses: [], // initial from server
      displayDiagnoses: [], // formatted to text, list under search bar
      addedDiagnoses: [], // saved, displaying for note template
      selectedDiagnosis: '', // send to server for finds API
      displayTemplate: -1,
      focused: -1, // 0 = searchBar, 1 = Space input button
      sections: [],
      sectionIndexDisplayed: -1,
      sectionText: '',
      type: ''
    }
  },
  mounted () {
    var self = this
    document.addEventListener('keyup', function (event) {
      if (event.keyCode === 32) {
        self.nextSection()
      }
    })
  },
  methods: {
    command: function () {
      if (this.displayTemplate === 1) {
        this.nextSection()
      } else if (this.focused === 0) {
        this.autoComplete()
      } else if (this.displayTemplate === -1) {
        this.onSubmit()
      } else {
        console.log('nada')
      }
    },
    autoComplete: function () {
      if (this.displayDiagnoses.length === 0) {
        this.retryDiagnosis = true
        return
      }
      var diagnosis = this.displayDiagnoses[0]
      this.searchText = diagnosis.displayText
      this.selectedDiagnosis = diagnosis.code
      this.retryDiagnosis = false
      this.unFocus()
      // this.onSubmit()
    },
    nextSection: function () {
      var newIndex = this.sectionIndexDisplayed + 1
      if (newIndex >= this.sections.length) {
        newIndex = 0
      }
      var sectionText = this.sections[newIndex].text
      this.sectionText = sectionText
      this.sectionIndexDisplayed = newIndex
    },
    home: function () {
      this.$router.replace('/')
    },
    copy: function (index) {

    },
    onSubmit: function (event) {
      console.log(event)
      var check = this.filterSearch(this.searchText, this.displayDiagnoses)
      console.log(check)
      if (check.length === 0) {
        this.retryDiagnosis = true
        return
      }
      var url = ('/api/finds?text=' + this.selectedDiagnosis)
      var self = this
      axios.get(url)
        .then(function (response) {
          console.log(response.data[0])
          var template = response.data[0]
          self.sections = template.sections
          self.sectionText = template.sections[0].text
          self.sectionIndexDisplayed = 0
          self.type = template.type
          self.$refs.focuser.focus()
          self.focused = 1
        })
        .catch(function (error) {
          console.log(error)
        })

      var diagnoses = this.addedDiagnoses
      diagnoses.push(this.searchText)
      this.addedDiagnoses = diagnoses
      this.searchText = ''
      this.displayTemplate = 1
    },
    expand: function (index) {
      var text = this.sections[index].text
      this.sectionIndexDisplayed = index
      this.sectionText = text
    },
    parseJSON: function (escapedString) {
      return JSON.parse(escapedString)
    },
    unFocus: function () {
      this.focused = -1
    },
    dropdown: function () {
      this.focused = 0
      this.retryDiagnosis = false
      this.filterNote()
    },
    selectDiagnosis: function (diagnosisCode, event) {
      this.searchText = event.target.textContent
      this.selectedDiagnosis = diagnosisCode
      this.retryDiagnosis = false
      this.unFocus()
    },
    filterNote: function (event) {
      var filter = this.searchText
      var searchArray = this.diagnoses
      var newDisplay = this.filterSearch(filter.toUpperCase(), searchArray)
      this.displayDiagnoses = newDisplay
    },
    filterSearch: function (filter, searchArray) {
      var newDisplay = []
      filter = filter.toUpperCase()
      for (var i = 0; i < searchArray.length; i++) {
        var item = searchArray[i].displayText.toUpperCase()
        if (item.indexOf(filter) > -1) {
          newDisplay.push(searchArray[i])
        }
      }
      return newDisplay
    }
  }
}
</script>

<style scoped>
.clickable {
  cursor: pointer;
}
.clickable:hover {

}
.selected {
  background-color: yellow;
}
.submit-button {
  width: 120px;
  height: 30px;
  border-style: solid;
  border-radius: 5px;
  border-width: 1px;
  margin-left: 5px;
  background-color: rgb(0, 129, 213);
  color: white;
  font-size: 14px;
}
.focuser {
  opacity:0;
  filter:alpha(opacity=0);
}
.display-container {
  background-color: #89CFF0;
  min-width: 900px;
  padding: 20px;
}
.header-logo {
  vertical-align: middle;
  margin-right: 40px;
}
.document {
  min-height: 400px;
  max-height: 550px;
  overflow: auto;
}
.grid-container {
  display: flex;
  justify-content: space-between;
  min-width: 800px;
}
.grid-large {
  /*position: relative;*/
  width: 60%;
}
.grid-small {
  width: 40%;
  background-color: RGB(0, 129, 213);
  padding: 20px;
}
.noteType {
  font-size: 24px;
}
.section-header {
  font-size: 16px;
}
.sections {
  list-style: none;

}
.notePanel {

}

.form-search-field {
  height: 30px;
  width: 500px;
  font-size: 16px;
  border-radius: 5px;
  border-style: solid;
  border-width: 0px;
}
.inline {
  display: inline;
}
.input-group {
  display: relative;
}
.dropdown {
  margin: 0px;
  padding: 0px;
  display: block;
  left: 210px;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 500px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}
.clickable-list-item {
  display: block;
  list-style: none;
  text-decoration: underline;
  padding: 20px 20px 20px 20px;
}
.clickable-list-item:hover {
  color: #0043ff;
  cursor: pointer;
}
.completed {
  background-color: RGB(0, 129, 213);
}
.error {
  background-color: red;
}

.width-too-small-alert {
  display: none;
}
@media (max-width: 750px) {
  .display-container {
    display: none;
  }
  .width-too-small-alert {
    display: inline;
    text-align: center;
  }
}
</style>
