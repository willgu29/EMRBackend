<template>
  <div class='quick-display'>
    <ul class='list'>
      <h3>Note Templates</h3>
      <ul class='list no-padding'>
          <li v-if="step === 0" v-on:click="expand(index)" v-for="(speciality, index) in specialities" :key="index" class='speciality'>{{speciality}}</li>
          <li v-if="step === 1" v-on:click="expand2(index)" v-for="(subSpeciality, index) in subSpecialities[this.index]" :key="index" class='speciality'>{{subSpeciality}}</li>
          <li v-if="step === 2" v-on:click="goTo(noteTemplate.link)" v-for="(noteTemplate, index) in noteTemplates[this.index]" :key="index" class='speciality'>{{noteTemplate.name}}</li>
      </ul>
    </ul>
  </div>
</template>

<style>
.no-padding {
   padding: 0;
}
.list {
  list-style: none;
}
.speciality {
  line-height: 50px;
  border-bottom: 2px;
  border-bottom-style: solid;
}
.speciality:hover {
  cursor: pointer;
  color: white;
}
</style>

<script>

export default {
  name: 'noteSelector',
  data () {
    return {
      step: 0,
      index: -1,
      specialities: ['Psychiatry', 'Internal Medicine', 'Family Medicine'],
      subSpecialities: [
        ['Adult', 'Child & Adolescent', 'Geriatric'], // inpatient
        ['General', 'Critical Care'], // inpatient only
        ['General', 'Adolescent', 'Geriatric', 'Hospice & Palliative', 'Sports'] // outpatient only
      ],
      noteTemplates: [
        [{name: 'H&P', link: ''}, {name: 'Progress Note', link: ''}, {name: 'Discharge Note', link: ''}, {name: 'After Visit Summary', link: ''}], // Adult
        [{name: 'H&P', link: ''}, {name: 'Progress Note', link: ''}, {name: 'Discharge Note', link: ''}, {name: 'After Visit Summary', link: ''}], // Child & Adolescent
        [{name: 'H&P', link: 'Progress Note'}, {name: 'Discharge Note', link: ''}, {name: 'After Visit Summary', link: ''}], // Geriatric
        [{name: 'H&P', link: ''}, {name: 'Progress Note', link: ''}, {name: 'Discharge Note', link: ''}, {name: 'After Visit Summary', link: ''}], // General
        [{name: 'H&P', link: ''}, {name: 'Progress Note', link: ''}, {name: 'Discharge Note', link: ''}, {name: 'After Visit Summary', link: ''}, {name: 'Procedure Note', link: ''}], // Critical Care
        [{name: 'Initial Evaluation Note', link: ''}, {name: 'Progress Note', link: ''}, {name: 'After Visit Summary', link: ''}, {name: 'Procedure Note', link: ''}], // General
        [{name: 'Initial Evaluation Note', link: ''}, {name: 'Progress Note', link: ''}, {name: 'After Visit Summary', link: ''}, {name: 'Procedure Note', link: ''}], // Adolescent
        [{name: 'Initial Evaluation Note', link: ''}, {name: 'Progress Note', link: ''}, {name: 'After Visit Summary', link: ''}, {name: 'Procedure Note', link: ''}], // Geriatric
        [{name: 'Initial Evaluation Note', link: ''}, {name: 'Progress Note', link: ''}, {name: 'After Visit Summary', link: ''}, {name: 'Procedure Note', link: ''}], // Hospice & Palliative
        [{name: 'Initial Evaluation Note', link: ''}, {name: 'Progress Note', link: ''}, {name: 'After Visit Summary', link: ''}, {name: 'Procedure Note', link: ''}] // Sports

      ]
    }
  },
  methods: {
    expand: function (index) {
      this.index = index
      this.step = 1
    },
    expand2: function (index) {
      if (this.index === 0) {
        index = index + 0
      } else if (this.index === 1) {
        index = index + 3
      } else if (this.index === 2) {
        index = index + 5
      }
      this.index = index
      this.step = 2
    },
    goTo: function (link) {
      window.open(link, '_blank')
    }
  }
}
</script>
