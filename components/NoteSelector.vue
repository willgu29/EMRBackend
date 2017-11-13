<template>
  <div class='quick-display'>
    <ul class='list'>
      <h3>Note Templates</h3>
      <ul class='list no-padding'>
          <li v-if="step === 0" v-on:click="expand(index)" v-for="(noteTemplate, index) in noteTemplates" :key="index" class='speciality'>{{noteTemplate}}</li>
          <p class='back-header' v-on:click="back()" v-if="step === 1"><img ref="backArrow" class='back-arrow' src="~/assets/img/arrow-left2.svg" /> {{this.noteType}}</p>
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

</style>

<script>

export default {
  name: 'noteSelector',
  data () {
    return {
      step: 0,
      index: -1,
      noteType: '',
      noteTemplates: ['H&P', 'Inpatient Progress Note', 'Discharge Note', 'Procedure Note', 'Consultation Note', 'Initial Encounter Note', 'Outpatient Progress Note'],
      specialties: [
        [{name: 'Psychiatry', link: 'https://docs.google.com/document/d/15CYu12DgWf8Yeko33QZHRE31s4vMbXPy8fIlOrGOb94/edit?usp=sharing'}, {name: 'Internal Medicine', link: 'https://docs.google.com/document/d/1PYXpGntyuMZ6KKuw8URYvphDh40-SpndQ38Ev4wnKOg/'}, {name: 'Family Medicine', link: 'https://drive.google.com/open?id=1vOgMSJ4FO16-iGjsteghl1sIfGxrF0NPsBs33eb9i6k'}],
        [{name: 'Psychiatry', link: 'https://docs.google.com/document/d/14-ScaHDWttFHJR01QJhleLG36SQzf-4t7SEKlIPFyEQ/'}, {name: 'Internal Medicine', link: 'https://docs.google.com/document/d/1ACNxwj-TvNzmXoIg5x9FW2qsgadlr0mobviPAJfvneE/'}, {name: 'Family Medicine', link: 'https://drive.google.com/open?id=1-T331-LoKDGb6_Sd0ucr1vwaOPN2vHmrfdZnkK4KkZE'}],
        [{name: 'Psychiatry', link: 'https://docs.google.com/document/d/1F7sOGTEzZxD_S_IYwvOZDljmmVBtToegRiG8kmqVbGA/'}, {name: 'Internal Medicine', link: 'https://drive.google.com/open?id=12NoK5NrP9H7ADEzpPiGLSEZVYCufUaGHpYQMXFLb0zg'}, {name: 'Family Medicine', link: 'https://docs.google.com/document/d/1c_4PdubfHkwNqBESv8DyUNPxFOKnzOTNtqb5RXI9KpM/'}],
        [{name: 'Psychiatry', link: 'https://www.emrworx.com/not-found/'}, {name: 'Internal Medicine', link: 'https://docs.google.com/document/d/1xEx7mrzYlpGFUk_gaY-mC7wn6nFHipjaWalO3iNro20/'}, {name: 'Family Medicine', link: 'https://drive.google.com/open?id=1bDYoLv0jnghSe60WEgWOW6zzCpD3CNPveAC0kkhZeHg'}],
        [{name: 'Psychiatry', link: 'https://docs.google.com/document/d/1j54jwmogjTT575-ksHrTYoqUij9jRox-iqa9l2I4BDs/'}, {name: 'Internal Medicine', link: 'https://docs.google.com/document/d/1YjTBQtWAIWSEITD1ZHhbPCRxfWGNgMh405P5w5J3eJw/'}, {name: 'Family Medicine', link: 'https://drive.google.com/open?id=16tZqT_Nlxu2gZ5NVxmK5IKYptZjQhlT8-JxxsJiWXIY'}],
        [{name: 'Psychiatry', link: 'https://docs.google.com/document/d/1ZCfYV_TFMgz-G1QPdBU32yt1SdpyZk5RPLs-L0wpJI4/'}, {name: 'Internal Medicine', link: 'https://docs.google.com/document/d/1VqJfCqsHtYs8gDROg53SjsMfLmPJH6idD1Lrrvl_kZE/'}, {name: 'Family Medicine', link: 'https://docs.google.com/document/d/1BxIPQThV_CZyP8VAdCWw4mj7BWvdM8g4ysTNsvurv3E/'}],
        [{name: 'Psychiatry', link: 'https://docs.google.com/document/d/1b427FedYaywWoAlV3mCHWwrHrnRgr__JOdXYYnvq3P8/'}, {name: 'Internal Medicine', link: 'https://docs.google.com/document/d/1lSO8LSehbAioo1pBPn6Cj1QyBKiDsHt7o3UFz0b9KvI/'}, {name: 'Family Medicine', link: 'https://drive.google.com/open?id=1SE6Gcua5pr3oK3vEIyiY8N_dBSyohrVCcjvF4MWdXR4'}]
      ]
    }
  },
  methods: {
    expand: function (index) {
      this.index = index
      this.noteType = this.noteTemplates[index]
      this.step = 1
    },
    back: function () {
      this.index = -1
      this.noteType = ''
      this.step = 0
    },
    goTo: function (link) {
      window.open(link, '_blank')
    }
  }
}
</script>
