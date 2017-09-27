<template>
  <section class="emr-container">
    <h1 class="title">
      CP PSYCH PROGRESS NOTES
    </h1>
    <h2 class="info">
      Note Template
    </h2>
    <div id="note-template" contenteditable="true">
      <p><span class='data-fill'>@name@</span></p>
      <p><span class='data-fill'>@MRN@</span></p>
      <p><span class='data-fill'>@td@</span></p>

      <p>Modality: <span class='smart-list'><b>{W HPSYCHL MODALITIES:5143}</b> <br/> (1. Individual Therapy <br/>
                                                                                      2. Couple Therapy <br/>
                                                                                      3. Family Therapy <br/>
                                                                                      4. Group Therapy <br/>
                                                                                      5. Phone Contact <br/>
                                                                                      6. Other***)</span></p>

      <p>Length of Session: <span class='smart-list'><b>{W HPSYCHL LENGTH OF SESSION:5144}</b> <br /> (1. 30 Minutes <br/>
                                                                                               2. 45-60 Minutes <br/>
                                                                                               3. 90 Minutes <br/>
                                                                                               4. Other: ***)</span></p>

      <p>Session Content: <span class='data-fill'>@name@</span> is a <span class='data-fill'>@age@ </span> <span class='data-fill'>@gender@</span> who presents with the following issues:</p>

      <p class="header">Review of Systems:</p>
      <p class='smart-list'><b>{W HPSYCHROS:5326}</b> <br/> (-Negative for sleep disturbance or new psychosocial stressors. <br/>
                                                       -Negative for {negatives:239} (non-editable currently) <br/>
                                                       -Positive for {positives:240} (non-editable currently) <br/>
                                                       -See HPI <br/>
                                                       -***)</p>
      <p>***</p>

      <p>Interventions: <span class='smart-list'><b>{W HPSYCHL INTERVENTIONS:5145}</b> <br/>(-History Taking Only <br/>
                                                                                        -Cognitive Restructuring <br/>
                                                                                        -Behavior Therapy <br/>
                                                                                        -Psycodynamic Therapy <br/>
                                                                                        -Education <br/>
                                                                                        -Testing Feedback <br/>
                                                                                        -Communication Training <br/>
                                                                                        -Problem Solving <br/>
                                                                                        -Relaxation Training <br/>
                                                                                        -Stress Management <br/>
                                                                                        -Psychological Testing <br/>
                                                                                        -Play Therapy <br/>
                                                                                        -Reassurance/Support <br/>
                                                                                        -Treatment Planning <br/>
                                                                                        -Verbal Reinforcement <br/>
                                                                                        -Other - ***)</span></p>

      <p>Brief Mental Status: <span class='smart-list'><b>{W HPSYCHL BRIEF MENTAL STATUS:5146}</b> <br /> (-Mood/Affect: {Affect/Mood :154} (non-editable currently) <br />
                                                                                                   -Suicidal/Homicidal Ideation/Intention <br />
                                                                                                   -***)</span></p>

      <p>Diagnosis: <span class='data-fill'>@LAB24@</span></p>


      <p>Plan: <span class='smart-list'><b>{W HPSYCHL PLAN:5147}</b> <br/> (-Follow-up in {numbers:4927} {units:5153} <br/>
                                                                     -Referral: *** <br/>
                                                                     -Termination <br/>
                                                                     -Materials given: *** <br/>
                                                                     -***)</span></p>

      <p class='data-fill'>@me@</p>

    </div>
    <p>By: Cleveland Clinic (Epic 2010)  </p>
    <input v-on:click="saveDiv" class="submit" type="submit" value="Save and submit for review" />
    <br />

  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  layout: 'emr',
  head () {
    return {
      title: 'EMR Worx: Psych Note'
    }
  },
  methods: {
    saveDiv: function () {
      var node = document.getElementById('note-template')
      var innerHTML = node.innerHTML
      axios.post('/api/curates/psych-prog-note-2', {
        innerHTML: innerHTML
      })
      alert('Your note template has been submitted for review, thank you!')
    }
  }
}
</script>

<style scoped>
.submit {
  margin-bottom: 20px;
}
#note-template {
  margin: 0 auto;
  text-align: left;
  max-width: 600px;
  outline-color: black;
  outline-width: 1;
  outline-style: double;
}
.header {
  font-weight: bold;
  margin-top: 40px;
}
.bold {
  font-weight: bold;
}
.data-fill {
  color: blue;
}
.smart-list {
  background-color: yellow;
}
.title
{
  margin: 0 auto;
  width: 75%;
}
.emr-container {
  display: inline-block;
  margin: 0 auto;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
