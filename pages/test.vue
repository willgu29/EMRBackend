<template>
  <section class="search-container" v-on:click="unFocus">
    <div>
      <form class="form" v-on:submit.prevent="onSubmit">
        <div class='input-group'>
          <label>Diagnosis:</label>
          <input v-on:click.stop v-on:focus.self="dropdown" placeholder='Search "Hyperglycemia, unspecified (R73.9)" or "Psychosis"'  type="text" v-bind:class="{ error: retryDiagnosis }" class='form-search-field ' name="type" v-on:keyup="filterNote" autocomplete="off" v-model="searchText">
          <ul class='dropdown'>
            <li class='clickable-list-item' v-on:click.stop="selectDiagnosis" v-show="focused === 0" v-for="diagnosis in displayDiagnoses">{{diagnosis}}</li>
          </ul>
          <input type='submit' value='add diagnosis' />
        </div>
        <div class='input-group inline'>
          <select name="noteType" v-model="noteType">
            <option value="History and Physical">History and Physical</option>
            <option value="Consultation">Consultation Note</option>
            <option value="Initial Evaluation">Inital Evaluation Note</option>
          </select>
        </div>
        <div class='input-group inline'>
          <select name="specialty" v-model="specialty">
            <option value="Psychiatry">Psychiatry</option>
            <option value="Internal Medicine">Internal Medicine</option>
            <option value="Family Medicine">Family Medicine</option>
          </select>
        </div>
      </form>
    </div>
    <div class='grid-container' v-show="displayTemplate === 1">
      <div class='outline grid-small'>
        <h1>Note Title</h1>
        <ul>
          <li v-on:click.stop="expand(index)" v-for="(section, index) in sections" :key="index">
            <div>
              <p class='inline'>{{section.header}}</p>
              <copy-to-clipboard />
            </div>
          </li>
        </ul>
      </div>
      <div class='notePanel grid-large'>
          <ul>
            <li v-for="diagnosis in addedDiagnoses">{{diagnosis}}</li>
          </ul>
        <pre>
          {{sectionText}}
        </pre>
      </div>
    </div>
    {{diagnoses}}
  </section>
</template>

<script>
import CopyToClipboard from '~/components/CopyToClipboard'
import axios from '~/plugins/axios'

export default {
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
      diagnoses: [],
      displayDiagnoses: [],
      addedDiagnoses: [],
      displayTemplate: -1,
      focused: 0,
      sections: [{'header': 'Chief Complaint', 'text': 'Textext'}, {'header': 'Chief Complaint', 'text': 'Textext'}],
      sectionText: 'History of diabetes\r\n     - T1DM vs T2DM vs gestational diabetes\r\n     - Newly vs previously diagnosed\r\n     - Last HbA1c\r\n     - Recent fasting glucose measurements\r\n  Medications\r\n     - Oral hypoglycemics\r\n          - Metformin\r\n            Dose, schedule, compliance\r\n          - Sulfonylureas, GLP1 agonists, DPP4 inhibitors, SGLT1 inhbitors, TZDs, \r\n alpha glucosidase inhibitors\r\n            Dose, schedule, compliance\r\n     - Insulin\r\n       Dose, schedule, compliance\r\n  Pregnancy (if female)\r\n  Lifestyle\r\n     - Diet\r\n     - Exercise\r\n     - Acute stressors\r\n  Complications\r\n     - Acute complications\r\n          - DKA, HHS\r\n     - Chronic complications\r\n          - Macrovascular complications\r\n               - CAD, PVD\r\n     - Microvascular complications\r\n          - Diabetic retinopathy, nephropathy, neuropathy'
    }
  },
  methods: {
    onSubmit: function (event) {
      axios.get('/api/templates/')
      var diagnoses = this.addedDiagnoses
      diagnoses.push(this.searchText)
      this.addedDiagnoses = diagnoses
      this.searchText = ''
      this.displayTemplate = 1
    },
    expand: function (index) {
      var text = this.sections[index].text
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
    selectDiagnosis: function (event) {
      this.searchText = event.target.textContent
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
      for (var i = 0; i < searchArray.length; i++) {
        var item = searchArray[i].displayText.toUpperCase()
        if (item.indexOf(filter) > -1) {
          newDisplay.push(item)
        }
      }
      return newDisplay
    }
  }
}
</script>

<style scoped>
.grid-container {
  display: flex;
  justify-content: space-between;
}
.grid-large {
  /*position: relative;*/
  width: 65%;
}
.grid-small {
  width: 35%;
  background-color: RGB(0, 129, 213);
}
.outline {

}
.notePanel {

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
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
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

@media (max-width: 750px) {
  .grid-container {
    display: none;
  }
  .width-too-small-alert {
    display: inline;
    text-align: center;
  }
}
</style>
