<template>
  <section class="main-container">
    <div class='grid-container'>
      <div class='grid-2'>
        <h1 class='chat-title'>Find a note template</h1>
        <form class="form">
          <label>Type:</label>
          <input v-on:focus="displayFocus" type="text" class='form-search-field' name="type" v-on:keyup="filterNote" autocomplete="off" v-model="selectedType"/>
          <ul>
            <li v-show="focused === 0" v-for="text in display">{{text}}</li>
          </ul>
          <label>Specialty:</label>
          <input v-on:focus="displayFocus" type="text" class='form-search-field' name="specialty" v-on:keyup="filterSpecialty" autocomplete="off" v-model="selectedSpecialty"/>
          <ul>
            <li v-show="focused === 1" v-for="text in display">{{text}}</li>
          </ul>
          <label>Diagnosis:</label> <field-tip img="https://www.emrworx.com/public/assets/info.png" text="This is probably a reasonable explanation length."/>
          <input v-on:focus="displayFocus" type="text" class='form-search-field' name="diagnosis" v-on:keyup="filterDiagnosis" autocomplete="off" v-model="selectedDiagnosis" />
          <ul>
            <li v-show="focused === 2" v-for="text in display">{{text}}</li>
          </ul>
          <input type="submit" class='submit-button' value="FIND" />
        </form>
      </div>
      <div class='grid-small'>
        <h1 class='quick-start-title'>How to Use EMR Worx:</h1>
        <p></p>
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
      specialties: ['Psychiatry', 'Internal Medicine', 'Family Practice'],
      diagnoses: [
        ['For Psychiatry'],
        ['For Internal Medicine'],
        ['For Family Practice']
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
      var searchArray = this.specialties
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
      } else {
        if (this.selectedSpecialty === '') {
          // display error/alert
        } else {
          var index = this.specialties.indexOf(this.selectedSpecialty)
          this.display = this.diagnoses[index]
          this.focused = 2
        }
      }
    }
  }
}
</script>

<style scoped>
.grid-container {
  margin: 60px;
  box-shadow: 0px 0px 10px #888888;
}
.form-search-field {
  display: block;
}

li {
  line-height: 30px;
}
.list {
  list-style: none;
  text-align: left;
}
.speciality {

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

.chat-input {
  padding-left: 20px;
  position: absolute;
  height: 30px;
  bottom: 0;
  right: 0;
  left: 0;
  box-shadow: 0px 0px 1px #888888;
}
.submit-button {
  width: 25%;
  height: 30px;
  border-style: solid;
  border-radius: 5px;
  border-width: 1px;
  margin-left: 5px;
  background-color: rgb(0, 129, 213);
  color: white;
  font-size: 14px;
}
.submit-button:hover {
  cursor: pointer;
  background-color: #0043ff;
}
.form-field {
  height: 30px;
  width: 70%;
  font-size: 16px;
  border-radius: 5px;
  border-style: solid;
  border-width: 0px;
}
.grid-container {
  display: flex;
  justify-content: space-between;
}
.grid-2 {
  position: relative;
  width: 50%;
}
.grid-small {
  width: 50%;
  background-color: RGB(0, 129, 213);
}

.width-too-small-alert {
  display: none;
}
@media (max-width: 710px) {
  .grid-container {
    display: none;
  }
  .width-too-small-alert {
    display: inline;
    text-align: center;
  }
}


</style>
