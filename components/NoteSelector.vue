<template>
  <div class='quick-display'>
    <ul class='list'>
      <h3>Note Templates</h3>
      <ul class='list no-padding'>
          <li v-if="step === 0" v-on:click="expand(index)" v-for="(noteTemplate, index) in noteTemplates" :key="index" class='speciality'>{{noteTemplate}}</li>
          <li v-if="step === 1" v-on:click="goTo(speciality.link)" v-for="(speciality, index) in specialities[this.index]" :key="index" class='speciality'>{{speciality.name}}</li>
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
      noteTemplates: ['H&P', 'Inpatient Progress Note', 'Discharge Note', 'After Visit Summary', 'Procedure Note', 'Consultation Note', 'Initial Encounter Note', 'Outpatient Progress Note', 'Other'],
      specialities: [
        [{name: 'Psychiatry', link: ''}, {name: 'Internal Medicine', link: ''}, {name: 'Family Medicine', link: ''}],
        [{name: 'Psychiatry', link: ''}, {name: 'Internal Medicine', link: ''}, {name: 'Family Medicine', link: ''}],
        [{name: 'Psychiatry', link: ''}, {name: 'Internal Medicine', link: ''}, {name: 'Family Medicine', link: ''}],
        [{name: 'Psychiatry', link: ''}, {name: 'Internal Medicine', link: ''}, {name: 'Family Medicine', link: ''}],
        [{name: 'Psychiatry', link: ''}, {name: 'Internal Medicine', link: ''}, {name: 'Family Medicine', link: ''}],
        [{name: 'Psychiatry', link: ''}, {name: 'Internal Medicine', link: ''}, {name: 'Family Medicine', link: ''}],
        [{name: 'Psychiatry', link: ''}, {name: 'Internal Medicine', link: ''}, {name: 'Family Medicine', link: ''}]
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
