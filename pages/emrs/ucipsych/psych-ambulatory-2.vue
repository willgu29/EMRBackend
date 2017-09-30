<template>
  <section class="emr-container">
    <h1 class="title">
     Psychiatry Progress Note
    </h1>
    <h2 class="info">
      Note Template
    </h2>


        <input v-if="this.editing != true" v-on:click="edit" class="save" type="submit" value="Click to edit" />
        <input v-else v-on:click="saveDiv" class="save" type="submit" value="Save and submit for review" />


    <div id="note-template" contenteditable="true">

      <p>Outpatient Psychiatry Progress Note</p>

      <p>Chief Complaint: Regularly scheduled follow-up appointment</p>

      <p class='header'>Identifying Information:</p>
      <p>[&#60&#60PATIENT_NAME&#62&#62] is a [&#60&#60AGE&#62&#62] [&#60&#60SEX&#62&#62] who presents today for a regularly scheduled follow-up appointment.</p>

      <p class='header'>Interval History:</p>
      <p>[&#60&#60PATIENT_NAME&#62&#62] was last seen in clinic on [[[]]] by Dr. [[[]]], during which visit [[[]]]</p>

      <p>[&#60&#60HE_SHE&#62&#62] denies any side effects from current medication regimen. [&#60&#60HE_SHE&#62&#62] states that [&#60&#60HE_SHE_LCASE&#62&#62] is adherent with current medication regimen.</p>

      <p>[[[Insert details here]]]</p>

      <p class='header'>Social History:</p>
      <p>Smoking: [[[]]] </p>
      <p>Alcohol: [[[]]] </p>
      <p>Cannabis: [[[]]] </p>
      <p>Other Drug Use: [[[]]] </p>
      <p>Exercise: [[[]]] </p>
      <p>Diet: [[[]]] </p>

      <p class='header'>Reproduction:</p>
      <p>Currently pregnant? [[[]]]</p>
      <p>Planning to become pregnant? [[[]]] </p>
      <p>Forms of contraception using, if any: [[[]]]</p>
      <p>Last Menstrual Period: [[[]]] </p>

      <p class='header'>Review of Systems:</p>
      <p>Patient reports no current headache, nausea, constipation, or diarrhea.</p>

      <p class='header'>Vital Signs:</p>
      <p>Weight: [[[]]]</p>
      <p>BP: [[[]]]/[[[]]]    HR: [[[]]]</p>

      <p class='header'>Mental Status Examination:</p>
      <p>Appearance: Appears stated age, has fair grooming and hygiene, and is dressed appropriately to weather and circumstance. [[[features that stand out (hair color, tattoos, etc.)]]] </p>
      <p>Behavior: Calm and cooperative. Makes appropriate eye contact. No overt PMA or PMR observed. </p>
      <p>Gait: Stable on narrow base. </p>
      <p>Muscle Strength/Tone: No atrophy or abnormal movements noted. </p>
      <p>Speech: [[[Appropriate rate and volume. No speech latency. Fluent and spontaneous speech.]]] </p>
      <p>Mood/Affect: [[[Euthymic, mood congruent]]] </p>
      <p>Thought Process: [[[Linear, logical, and goal-oriented]]] [[[Disorganized, thought blocking, neologisms]]] </p>
      <p>Associations: Intact </p>
      <p>Thought Content: [[[Reports no suicidal thoughts/intent/plan, no homicidal thoughts/intent/plan, no auditory hallucinations, or no visual hallucinations. No overt evidence suggestive of delusional thinking.]]] </p>
      <p>Attention span and concentration: Patient does not appear distracted during conversation </p>
      <p>Fund of Knowledge: Appropriate </p>
      <p>Memory: No apparent deficits in remote or recent memory </p>
      <p>Orientation: [[[Intact to person/place/time/situation]]] </p>
      <p>Insight/Judgment: [[[Good/Fair/Impaired/Poor]]] </p>

      <p class='header'>Current Outpatient Medications: </p>
      <p class='data-fill'>[&#60&#60MEDS_OUTPATIENT&#62&#62]</p>

        <p class='header'>Recent Labs:</p>
        <p class='data-fill'>[&#60&#60CBC_LATEST_1YR&#62&#62]</p>
        <p class='data-fill'>[&#60&#60CMP_LATEST_1YR&#62&#62]</p>
        <p class='data-fill'>[&#60&#60A1C_LATEST_1YR&#62&#62]</p>
        <p class='data-fill'>[&#60&#60T4_FREE_LATEST_1YR&#62&#62] </p>
        <p class='data-fill'>[&#60&#60TSH_LATEST_1YR&#62&#62] </p>
        <p class='data-fill'>[&#60&#60VITAMIN_D_25OH_TOTAL_LATEST_1YR&#62&#62]</p>

      <p>Assessment: [&#60&#60MR_MS&#62&#62] [&#60&#60PATIENT_NAME&#62&#62] is a [&#60&#60AGE&#62&#62] [&#60&#60MAN_WOMAN_LCASE&#62&#62] with [[[]]] </p>

      <p>[[[Patient has been advised that refills will not be provided for missed appointments unless in exceptional circumstances.]]] </p>

      <p>Psychiatric Diagnosis/Diagnoses based on DSM 5: [&#60&#60HEALTH_ISSUES_PSYCH&#62&#62] </p>

      <p class='header'>Medical Problems:</p>
      <p class='data-fill'>[&#60&#60HEALTH_ISSUES_CHRONIC&#62&#62]</p>

      <p class='header'>Plan:</p>
      <p>1. Psychiatric Medication Management: </p>
      <p>- [[[]]] </p>
      <p>- Discussed the risks, benefits, and treatment alternative with patient, who agrees with the above medication regimen. </p>
      <p>2. Medical Issues: Continue outpatient follow-up with PCP. </p>
      <p>3. Labs: [[[]]] </p>
      <p>4. Psychotherapy: Supportive </p>
      <p>5. Psychoeducation: [[[Discussed importance of proper sleep hygiene, exercising regularly, and maintaining a well-balanced diet.]]] </p>
      <p>6. Instructed patient to call 911 or go to the nearest ED if feeling psychiatrically unstable, suicidal, or homicidal. </p>
      <p>7. RTC [[[]]] months or sooner PRN </p>

      <p>Patient seen and discussed with attending physician Dr. [[[]]], who agrees with the above assessment and plan. </p>


    </div>
    <p>By: Chris Cho MD</p>
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
