<template>
  <section class="emr-container">
    <h1 class="title">
      IP PSYCH PROGRESS NOTE
    </h1>
    <h2 class="info">
      Note Template
    </h2>

    <input v-if="this.editing != true" v-on:click="edit" class="save" type="submit" value="Click to edit" />
    <input v-else v-on:click="saveDiv" class="save" type="submit" value="Save and submit for review" />


    <div id="note-template" contenteditable="true">
      <p>Date:  <span class='data-fill'>@TD@</span></p>
      <p>Patient's Name: <span class='data-fill'>@NAME@</span></p>
      <p>Medical Record Number: <span class='data-fill'>@MRN@</span></p>

      <span class='data-fill'>@CURMED@</span>
      <p>Legal Status: <span class='smart-list'><b>{LEGAL STATUS:30415468})</b> <br />(1. Voluntary <br/>
                                                                                 2. 5150 <br/>
                                                                                 3. Conserved <br/>
                                                                                 4. ***)</span></p>

      <p class="header">Interval Events/History:</p>
      <p><span class='smart-list'><b>{PSYCH INTERVAL EVENTS:30415495}</b> <br/>(-Symptoms: *** <br/>
                                                                                -Medication side effects: *** <br/>
                                                                                -Collateral history: *** <br/>
                                                                                -Family involvement: *** <br/>
                                                                                -Psychosocial functioning: *** <br/>
                                                                                -Attending groups: *** <br/>
                                                                                -Interval review of systems: *** <br/>
                                                                                -***)</span></p>

      <p class="header">Mental Status Evaluation</p>
      <p><span class='smart-list'><b>{MENTAL STATUS EVALUATION:30415492}</b> (non-editable currently)</span></p>

      <p class="header">Physical Exam</p>
      <p>Vital Signs in the last 24 hours:</p>
      <p class='data-fill'>@FLOWSTAT(6,8,5,9,10,30401708:24)@</p>
      <p class='data-fill'>@SBPMAX(24)@</p>
      <p class='data-fill'>@DBPMAX(24)@</p>

      <p class='header'>Labs</p>
      <p class='data-fill'>@LAB24@</p>


      <p class='header'>Assessment</p>
      <p>***</p>
      <p class='header'>Clinical Formulation</p>
      <p>***</p>
      <p>Hospital Principal Diagnosis (update in Problem List, mark "principal"): <span class='data-fill'>@PRINCIPALPROBLEM@</span></p>

      <p class='header'>Diagnoses</p>
      <p>Axis I:  <span class='smart-list'><b>{SHC IP PSY PSYCHAXIS:30415426}</b> (non-editable currently)</span></p>
      <p>Axis II : <span class='smart-list'><b>{SHC IP PSY PSYCHAXIS2:30414527}</b> (non-editable currently)</span</p>
      <p>Axis III: ***</p>
      <p>Axis IV: <span class='smart-list'><b>{SHC IP PSY PSYCHAXISIV:30415428}</b> (non-editable currently)</span></p>
      <p>Axis V: <span class='smart-list'><b>{SHC IP PSY PSYCH AXIS V SCORE:30415429}</b>  <br/> (1. 61-70 MILD symptoms <br/>
                                                                                           2. 51-60 moderate symptoms <br/>
                                                                                           3. 41-50 serious symptoms <br/>
                                                                                           4. 31-40 impairment in reality testing <br/>
                                                                                           5. 21-30 behavior considerably influenced by delusions or hallucinations OR serious impairment in judgment, communication OR inability to function in almost all areas <br/>
                                                                                           6. 11-20 some danger of hurting self or others possible OR occasionally fails to maintain minimal personal hygiene OR gross impairment in communication <br/>
                                                                                           7. 1-10 persistent dangerousness to self and others present)</span></p>

      <p class='header'>PLAN</p>
      <p class='smart-list'><b>{PSYCH PLAN:30415496}</b> <br/> (-Medication plan: *** <br/>
                                                          -Medication education: *** <br/>
                                                          -Medical work-up plan/testing: *** <br/>
                                                          -Plan for family involvement: *** <br/>
                                                          -Aftercare plan: *** <br/>
                                                          -***)</p>

      <p>Patient directed care/quality indicators:<span class='smart-list'><b>{YES/NO(FT):19286}</b> (1. yes 2. no ***)</span></p>
      <p>Other Providers Contact Information and Dates Contacted: <span class='smart-list'><b>{YES NO 1:19232}</b> (1. yes 2. no 3. not applicable 4. ***)</span></p>

      <p>On this admission patient educated about and provided input into their treatment plan.  Patient understands potential risks and benefits of proposed treatment plan: <span class='smart-list'><b>{YES/NO(FT):19286}</b> (1. yes 2. no ***)</span></p>

      <p class='data-fill'>@ME@ @NOW@. @TD@</p>

    </div>
    <p>By: Stanford Health Care (Lucy) </p>
    <input v-on:click="saveDiv" class="save" type="submit" value="Save and submit for review" />
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
  data () {
    return {
      editing: false
    }
  },
  methods: {
    saveDiv: function () {
      var node = document.getElementById('note-template')
      var innerHTML = node.innerHTML
      axios.post('/api/curates/psych-prog-note-lucy', {
        innerHTML: innerHTML
      })
      alert('Your note template has been submitted for review, thank you!')
    }
  }
}
</script>

<style scoped>
.save {
  border-radius: 28px;
  font-size: 20px;
  border-color: blue;
  margin-bottom: 18px;
  background-color: #6093e5;
  color: white;
}
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
