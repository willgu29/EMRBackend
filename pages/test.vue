<template>
  <section class="main-container">
    <div class='grid-container'>
      <div class='grid-2'>
        <h1 class='chat-title'>Find a note template</h1>
        <form class="form" v-on:click.self="displayFocus">
          <div class='input-group'>
            <label>Type:</label>
            <input v-on:focus="displayFocus" placeholder='Search "History and Physical"'  type="text" v-bind:class="{ completed: selectedType }" class='form-search-field ' name="type" v-on:keyup="filterNote" autocomplete="off" v-model="selectedType">
            <ul class='dropdown'>
              <li class='clickable-list-item' v-show="focused === 0" v-on:click="highlightType" v-for="text in display">{{text}}</li>
            </ul>
          </div>
          <div class='input-group'>
            <label>Specialty:</label>
            <input ref="specialty" v-on:focus="displayFocus" placeholder='Search "Internal Medicine" or "Medicine"' v-bind:class="{ completed: selectedSpecialty }"  type="text" class='form-search-field' name="specialty" v-on:keyup="filterSpecialty" autocomplete="off" v-model="selectedSpecialty"/>
            <ul class='dropdown'>
              <li class='clickable-list-item' v-show="focused === 1" v-on:click="highlightSpecialty" v-for="text in display">{{text}}</li>
            </ul>
          </div>
          <div class='input-group'>
            <div>
              <label>Diagnosis:</label> <field-tip img="https://www.emrworx.com/public/assets/info.png" text="Please select a specialty before a diagnosis." />
            </div>
            <input ref="diagnosis"  v-on:focus="displayFocus" placeholder='Search "Congestive Heart Failure" or "CHF"' v-bind:class="{ completed: selectedDiagnosis }" type="text" class='form-search-field' name="diagnosis" v-on:keyup="filterDiagnosis" autocomplete="off" v-model="selectedDiagnosis" />
            <ul class='dropdown'>
              <li class='clickable-list-item' v-show="focused === 2" v-on:click="hightlightDiagnosis" v-for="text in display">{{text}}</li>
            </ul>
          </div>
          <input type="submit" class='submit-button' value="FIND" />
        </form>
      </div>
      <div class='grid-small'>
        <div class='text-container'>
          <p>EMR Worx finds relevant note templates and helps you finish faster without sacrificing accuracy.</p>
          <h2>We break note templates into:</h2>
          <ul>
            <li>Checklists for streamlining your HPI</li>
            <li>Coding and billing tips for proper reimbursement</li>
            <li>Personalized content based on your patient</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- Mobile Version Not Supported Alert -->
    <div class='width-too-small-alert'>
      <p>EMR Worx is intended for use on a desktop. Please widen your browser window.</p>
    </div>

  </section>
</template>

<script>
import axios from '~/plugins/axios'
import FieldTip from '~/components/FieldTip'

export default {
  components: {
    FieldTip
  },
  asyncData ({ params, error }) {
    console.log(params)
    return axios.get('/api/users/')
      .then((res) => {
        return { users: res.data }
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'Users not found' })
      })
  },
  head () {
    return {
      title: 'EMR Worx',
      meta: [
        {
          hid: `keywords`,
          name: 'keywords',
          keywords: 'emr, worx, emrworx, note templates'
        }
      ]
    }
  },
  data () {
    return {
      noteTypes: ['History and Physical', 'Inpatient Progress Note', 'Discharge Note', 'Procedure Note', 'Consultation Note', 'Initial Encounter Note'],
      specialties: ['Psychiatry', 'Internal Medicine', 'Family Medicine'],
      diagnoses: [
        ['For Psychiatry'],
        ['Congestive Heart Failure (CHF)'],
        ['For Family Medicine']
      ],
      display: [],
      selectedType: '',
      selectedSpecialty: '',
      selectedDiagnosis: '',
      focused: 0
    }
  },
  methods: {
    onSubmit: function (event) {

    },
    highlightType: function (event) {
      this.selectedType = event.target.textContent
      this.$refs.specialty.focus()
    },
    highlightSpecialty: function (event) {
      this.selectedSpecialty = event.target.textContent
      this.$refs.diagnosis.focus()
    },
    hightlightDiagnosis: function (event) {
      this.selectedDiagnosis = event.target.textContent
      this.focused = -1
    },
    filterNote: function (event) {
      var filter = event.target.value.toUpperCase()
      var searchArray = this.noteTypes
      var newDisplay = this.filterSearch(filter, searchArray)
      this.display = newDisplay
    },
    filterSpecialty: function (event) {
      var filter = event.target.value.toUpperCase()
      var searchArray = this.specialties
      var newDisplay = this.filterSearch(filter, searchArray)
      this.display = newDisplay
    },
    filterDiagnosis: function (event) {
      var filter = event.target.value.toUpperCase()
      var index = this.specialties.indexOf(this.selectedSpecialty)
      var searchArray = this.diagnoses[index]
      var newDisplay = this.filterSearch(filter, searchArray)
      this.display = newDisplay
    },
    filterSearch: function (filter, searchArray) {
      var newDisplay = []
      for (var i = 0; i < searchArray.length; i++) {
        var item = searchArray[i].toUpperCase()
        if (item.indexOf(filter) > -1) {
          newDisplay.push(searchArray[i])
        }
      }
      return newDisplay
    },
    displayFocus: function (event) {
      var inputFocused = event.target.name
      if (inputFocused === 'type') {
        this.display = this.noteTypes
        this.focused = 0
      } else if (inputFocused === 'specialty') {
        this.display = this.specialties
        this.focused = 1
      } else if (inputFocused === 'diagnosis') {
        if (this.selectedSpecialty === '') {
          // display error/alert
        } else {
          var index = this.specialties.indexOf(this.selectedSpecialty)
          this.display = this.diagnoses[index]
          this.focused = 2
        }
      } else {
        this.focused = -1
      }
    }
  }
}
</script>

<style scoped>
.text-container {
  margin: 20px;
}
.form {
  margin: 20px;
}
.input-group {
  margin-top: 10px;
  margin-bottom: 40px;
  position: relative;
  display: block;
}
.dropdown {
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
}
label {
  font-size: 24px;
  margin-bottom: 20px;
}
.grid-container {
  margin: 60px;
  box-shadow: 0px 0px 10px #888888;
}
.form-search-field {
  margin-top: 10px;
  display: block;
  height: 30px;
  width: 85%;
  min-width: 350px;
  max-width: 400px;
  font-size: 16px;
  border-radius: 2px;
  border-style: solid;
  border-width: 1px;
  border-color: #b2b2b2;
  background: RGB(239, 239, 239) url("~/assets/img/menu3.png") no-repeat right;
}
.form-search-field:focus {
  background-color: white;
}
.completed {
  background-color: RGB(0, 129, 213);
}

.clickable-list-item {
  list-style: none;
  text-decoration: underline;
  padding: 0px 20px 0px 0px;
}
.clickable-list-item:hover {
  color: #0043ff;
  cursor: pointer;
}

li {
  line-height: 30px;
}
.list {
  list-style: none;
  text-align: left;
}
.quick-start-title {
  text-align: left;
  margin-left: 10px;
}
.quick-display {
  min-width: 200px;
  max-width: 300px;
}
.chat-title {
  text-align: left;
  margin-left: 20px;
}
.text {
  margin: 20px;
}
.explainer {
  text-align: center;
  color: #b2b2b2;
}

.submit-button {
  width: 100%;
  height: 30px;
  border-style: solid;
  border-radius: 5px;
  border-width: 1px;
  background-color: rgb(0, 129, 213);
  color: white;
  font-size: 14px;
}
.submit-button:hover {
  cursor: pointer;
  background-color: #0043ff;
}

.grid-container {
  display: flex;
  justify-content: space-between;
}
.grid-2 {
  position: relative;
  width: 60%;
}
.grid-small {
  width: 40%;
  background-color: RGB(225, 240, 255);
}

.width-too-small-alert {
  display: none;
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
