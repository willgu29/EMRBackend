<template>
  <section class="emr-container">
    <h1 class="title">
     Psychotherapy Progress Note
    </h1>
    <h2 class="info">
      Note Template
    </h2>


        <input v-if="this.editing != true" v-on:click="edit" class="save" type="submit" value="Click to edit" />
        <input v-else v-on:click="saveDiv" class="save" type="submit" value="Save and submit for review" />


    <div id="note-template" contenteditable="true">

      <p>Outpatient Psychiatry Psychotherapy Progress Note</p>

  <p class='header'>History of Present Illness:</p>
  <p><span class='data-fill'>[&#60&#60MR_MS&#62&#62] [&#60&#60PATIENT_NAME&#62&#62]</span> is a <span class='data-fill'>[&#60&#60AGE&#62&#62]</span> year old <span class='data-fill'>[&#60&#60MAN_WOMAN_LCASE&#62&#62]</span> with diagnoses of [[[]]] who presents to clinic today for regularly scheduled psychotherapy appointment. <span class='data-fill'>[&#60&#60HE_SHE&#62&#62]</span> denies any side effects from current medication regimen. <span class='data-fill'>[&#60&#60HE_SHE&#62&#62]</span> states that <span class='data-fill'>[&#60&#60HE_SHE_LCASE&#62&#62]</span> is adherent with current medication regimen.</p>

  <p>[[[Insert details here]]]</p>

  <p><span class='data-fill'>[&#60&#60HE_SHE&#62&#62]</span> denies current suicidal ideation, homicidal ideation, paranoid ideation, auditory and visual hallucinations.</p>

  <p class='header'>Mental Status Examination:</p>
  <p>Appearance: As stated age, fair grooming/hygiene, wearing appropriate clothing </p>
  <p>Behavior: Cooperative, fair eye contact, no psychomotor agitation or retardation </p>
  <p>Gait: Steady </p>
  <p>Speech: normal rate, rhythm, and volume </p>
  <p>Mood/Affect: "" / </p>
  <p>Thought content: denies suicidal ideation, homicidal ideation, auditory or visual hallucinations, or paranoid ideation </p>
  <p>Thought process: linear, goal-directed </p>
  <p>Associations: Tight </p>
  <p>Attention span: Fair </p>
  <p>Memory: both recent and remote are good </p>
  <p>Language: able to name objects </p>
  <p>Insight/Judgment: Fair </p>

  <p class='header'>Current Outpatient Medications:</p>
  <p class='data-fill'>[&#60&#60MEDS_OUTPATIENT&#62&#62]</p>

  <p><b>Assessment: </b> <span class='data-fill'>[&#60&#60MR_MS&#62&#62] [&#60&#60PATIENT_NAME&#62&#62]</span> is a <span class='data-fill'>[&#60&#60AGE&#62&#62]</span> year old <span class='data-fill'>[&#60&#60MAN_WOMAN_LCASE&#62&#62]</span> with diagnoses of [[[]]]</p>

  <p class='header'>Plan:</p>
  <p>1. Patient denies SI/HI. Continue outpatient.</p>
  <p>2. Psychiatric Medication Management:</p>
  <p>- [[[]]] </p>
  <p>- Discussed the risks, benefits, and treatment alternative with patient, who agrees with the above medication regimen.</p>
  <p>3. Medical Issues: [[[]]] </p>
  <p>4. Labs: None at this time. </p>
  <p>5. Psychotherapy: Supportive and CBT.</p>
  <p>6. Psychoeducation: Encouraged regular exercise and healthy diet. </p>
  <p>7. Instructed patient to call 911 or go to the nearest ED if feeling psychiatrically unstable, suicidal, or homicidal. </p>

    </div>
    <p>By: Kristin Ratz MD</p>
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
      axios.post('/api/curates/psych-hp-lucy', {
        innerHTML: innerHTML
      })
      alert('Your note template has been submitted for review, thank you!')
    },
    legal: function () {
      alert('1. voluntary \n 2. involuntary \n 3. conservatorship  \n 4. 72 hour hold \n5. 14 day \n  6. temporary conservator')
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
