<template>
  <section class="emr-container">
    <h1 class="title">
     Psychiatry Initial Inpatient Floor Consultation Note
    </h1>
    <h2 class="info">
      Note Template
    </h2>


        <input v-if="this.editing != true" v-on:click="edit" class="save" type="submit" value="Click to edit" />
        <input v-else v-on:click="saveDiv" class="save" type="submit" value="Save and submit for review" />


    <div id="note-template" contenteditable="true">

    <p>  ****RECOMMENDATIONS ARE INCOMPLETE UNTIL THIS BANNER IS REMOVED****  </p>

  <p class='header'> History of Present Illness:   </p>
  <p><span class='data-fill'>[&#60&#60MR_MS&#62&#62] [&#60&#60PATIENT_NAME&#62&#62]</span> is a <span class='data-fill'>[&#60&#60AGE&#62&#62]</span> year old <span class='data-fill'>[&#60&#60SEX&#62&#62]</span> with previous diagnosis of [[[]]]</p>
  <p>Review of Systems: Patient denies shortness of breath, chest pain, headache, nausea/vomiting, and the rest of the review of systems is negative.</p>

<p class='header'>Past Psychiatric History: </p>
<p>Diagnoses and Course of Illness: </p>
<p>- [[[when given dx, who gave dx, why given that dx. Comment on previous symptoms of psych disorders here.]]] </p>
<p>Hospitalizations: </p>
<p>- [[[dates, hospital name, reason for hospitalization, placed on hold]]] </p>
<p>Psychiatrist: </p>
<p>- [[[]]] </p>
<p>History of Conservatorship: [[[]]] </p>
<p>Suicide attempts/self-harm behaviors: [[[]]] </p>
<p>Access to firearms: [[[]]] </p>

<p class='header'>Current and Past Psychiatric Medication Trials:</p>
<p>Current: <span class='data-fill'>[&#60&#60MEDS_OUTPATIENT&#62&#62]</span></p>

<p>Past Trials: [[[names, dates, length of time tried, response, adverse effects]]]</p>

<p class='header'>Allergies:</p>
<p>[<span class='data-fill'>&#60&#60ALLERGIES&#62&#62]</span></p>


<p class='header'>Past Medical History and Past Surgical History:</p>
<p class='data-fill'>[&#60&#60AMB_INTAKE_PAST_MED_HX&#62&#62]</p>
<p class='data-fill'>[&#60&#60AMB_INTAKE_PAST_SURG_HX&#62&#62]</p>

<p class='header'>Social History: </p>
<p>Developmental: Patient born full-term, does not recall any complications of pregnancy or birth. Met all developmental milestones as expected </p>
<p>Lives with [[[]]] in a [[[apt/house]]] in [[[city]]] </p>
<p>Marriage Status: [[[single/married/divorced]]] </p>
<p>Children: [[[]]] </p>
<p>Highest Level of Education: [[[]]] </p>
<p>Employment: [[[]]] </p>
<p>Financial Support: [[[]]] </p>
<p>Legal: [[[]]] </p>
<p>Abuse: Patient denies any history of sexual or physical abuse. Patient does not show signs of sexual or physical abuse or neglect.</p>

<p class='header'>Substance Abuse History:</p>
<p>Tobacco: [[[]]] </p>
<p>EtOH: [[[DUI/blackouts/withdrawal symptoms/szs/DT/rehab]]]</p>
<p>Illicit: [[[mj/meth/cocaine/ecstasy/IV/rehab]]]</p>

<p class='header'>Family History:</p>
<p>Psychiatric Illness: [[[]]] </p>
<p>Suicide: [[[]]] </p>
<p>Substance Abuse: [[[]]] </p>

<p class='header'>Most Recent Vital Signs:</p>
<p class='data-fill'>[&#60&#60VITALS_CURRENT&#62&#62]</p>

<p class='header'>Physical Examination on Evaluation:</p>
<p>General: NAD </p>
<p>HEENT: EOMI, moist mucous membranes, clear OP </p>
<p>Neck:  FROM </p>
<p>Respiratory: breathing comfortably on room air </p>
<p>C/V: RRR </p>
<p>Abdomen:  Soft, nontender </p>
<p>Extremity:  no c/c/e </p>
<p>Neurological:  Grossly intact motor and sensory exam; AOx3 </p>

<p class='header'>Mental Status Examination:</p>
<p>Appearance: Patient appears their stated age, has fair grooming and hygiene, and is wearing [[[]]]. Normal muscle tone. </p>
<p>Behavior: No psychomotor agitation or retardation. No abnormal movements. [[[]]] </p>
<p>Speech: Normal rate, rhythm, and tone. </p>
<p>Mood: '[[[]]]' </p>
<p>Affect: [[[]]] </p>
<p>Thought content: Denies suicidal ideations and homicidal ideations.  Denies auditory and visual hallucinations and paranoid ideations. </p>
<p>Thought processes: logical and goal-directed with linear associations </p>
<p>Insight: [[[]]] </p>
<p>Judgment: [[[]]] </p>
<p>Attention and Concentration: [[[]]] </p>
<p>Gait: stable, narrow base </p>

<p class='header'>Cognitive Examination </p>
<p>.cogimpair[[[]]]</p>
<p>.cogintact[[[]]]</p>

<p class='header'>Laboratory Studies:</p>
<p class='data-fill'>[&#60&#60LABS_COMMON_72&#62&#62]</p>
<p class='data-fill'>[&#60&#60UA&#62&#62]</p>

<p class='header'>Primary Medical Diagnosis:</p>
<p>[[[]]]</p>

<p>Assessment:  [[[]]]</p>

<p>Diagnosis: [[[X]]]</p>
<p>Differential: [[[x]]]</p>
<p>Psychosocial stressors: [[[x]]]</p>

<p class='header'>Recommendations:</p>
<p>1. Safety: From a psychiatric perspective, patient does not require a 1:1 sitter or a 5150 legal hold. Patient [[[does/does not]]] meet criteria for inpatient psychiatric hospitalization as they [[[are/are not]]] an imminent danger to self, danger to others, or gravely disabled due to a mental illness. </p>
<p>2. For the treatment of psychiatric symptoms: </p>
<p>[[[]]] </p>
<p>3. Medical: Defer medical treatment to primary team. </p>
<p>4. Disposition: Patient [[[is/is not]]] psychiatrically stable for discharge at this time. Please alert when medically stable to evaluate for need for inpatient psychiatric admission. Psychiatry C&L will continue to follow, please page 7143 with any questions or concerns. </p>

<p>Case was discussed with and supervised by attending psychiatrist Dr. [[[]]] who agrees with the above assessment and recommendations.</p>

<p>****RECOMMENDATIONS ARE INCOMPLETE UNTIL THIS BANNER IS REMOVED****</p>

    </div>
    <p>By: Jessica Kim MD </p>
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
