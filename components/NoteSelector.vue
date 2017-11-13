<template>
  <div class='quick-display'>
    <ul class='list'>
      <h3>Note Templates</h3>
      <ul class='list no-padding'>
          <li v-if="step === 0" v-on:click="expand(index)" v-for="(noteTemplate, index) in noteTemplates" :key="index" class='speciality'>{{noteTemplate}}</li>
          <p class='back-header' v-if="step === 1"><img class='back-arrow' src="~/assets/img/arrow-left2.svg" /> {{this.noteType}}</p>
          <li v-if="step === 1" v-on:click="goTo(specialty.link)" v-for="(specialty, index) in specialties[this.index]" :key="index" class='speciality'>{{specialty.name}}</li>
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
.back-header {

}
.back-header:hover {
  color: white;
  cursor: pointer;
}
.back-arrow {
  width: 20px;
}
.back-arrow:hover {
  cursor: pointer;
}
</style>

<script>

export default {
  name: 'noteSelector',
  data () {
    return {
      step: 0,
      index: -1,
      noteType: '',
      noteTemplates: ['H&P', 'Inpatient Progress Note', 'Discharge Note', 'After Visit Summary', 'Procedure Note', 'Consultation Note', 'Initial Encounter Note', 'Outpatient Progress Note'],
      specialties: [
        [{name: 'Psychiatry', link: ''}, {name: 'Internal Medicine', link: ''}, {name: 'Family Medicine', link: ''}],
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
      this.noteType = this.noteTemplates[index]
      this.step = 1
    },
    goTo: function (link) {
      window.open(link, '_blank')
    }
  }
}
</script>
