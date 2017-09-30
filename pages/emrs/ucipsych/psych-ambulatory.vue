<template>
  <section class="emr-container">
    <h1 class="title">
     Psychiatry Initial Evaluation Note
    </h1>
    <h2 class="info">
      Note Template
    </h2>


        <input v-if="this.editing != true" v-on:click="edit" class="save" type="submit" value="Click to edit" />
        <input v-else v-on:click="saveDiv" class="save" type="submit" value="Save and submit for review" />


    <div id="note-template" contenteditable="true">

      <p>Initial Evaluation Note</p>

      <p>Chief Complaint: Psychiatric initial evaluation</p>

      <p class='header'>Identifying Information:</p>
      <p><span class='data-fill'>[&#60&#60MR_MS&#62&#62] [&#60&#60PATIENT_NAME&#62&#62]</span> is a <span class='data-fill'>[&#60&#60AGE&#62&#62]</span> year old <span class='data-fill'>[&#60&#60MAN_WOMAN_LCASE&#62&#62]</span> who presents today for initial psychiatric evaluation and establishment of care.</p>

      <p class='header'>History of Present Illness:</p>
      <p>[[[Insert details here]]]</p>

      <p class='header'>Review of Systems:</p>
      <p>[[[review 2-9 systems]]]</p>

      <p class='header'>Past Psychiatric History:</p>
      <p>Diagnoses: [[[age when given, context of diagnosis]]]</p>
      <p>Course of Illness: [[[]]]</p>
      <p>Hospitalizations: [[[]]]</p>
      <p>Age at first hospitalization: [[[]]]    Dates of last hospitalization: [[[]]]]</p>
      <p>Suicide Attempts: [[[]]]</p>
      <p>Most recent psychiatrists: [[[]]]</p>
      <p>Therapy: [[[Include frequency, duration, name of therapist, and contact info]]]</p>

      <p class='header'>Psychiatric Medications:</p>
      <p>Current Regimen: [[[]]]</p>
      <p>Past Trials: [[[Doses, dates of trials, why discontinued]]]</p>

      <p class='header'>Current Outpatient Medications:</p>
      <p class='data-fill'>[&#60&#60MEDS_OUTPATIENT&#62&#62]</p>

      <p class='header'>Past Medical and Surgical History:</p>
      <p>[[[Review and update medical issues in Quest]]]</p>
      <p class='data-fill'>[&#60&#60HEALTH_ISSUES_CHRONIC&#62&#62]</p>

      <p class='header'>Reproduction (for female patients):</p>
      <p>Currently pregnant? [[[]]] </p>
      <p>Planning to become pregnant? [[[]]] </p>
      <p>Forms of contraception using, if any: [[[]]]</p>
      <p>Last Menstrual Period: [[[]]]</p>

      <p class='header'>Substance Use: </p>
      <p>Smoking: [[[]]] </p>
      <p>Alcohol: [[[]]] </p>
      <p>Cannabis Use: [[[]]] </p>
      <p>Illicit Drug Use: [[[]]] </p>

      <p>Social History: [[[Can add/subtract categories as appropriate to patient]]]</p>
      <p>Lives with: [[[]]] </p>
      <p>Family/Relationships: [[[]]] </p>
      <p>Employment: [[[]]] </p>
      <p>Development: [[[]]] </p>
      <p>Education: [[[]]] </p>
      <p>Exercise: [[[]]] </p>
      <p>Diet: [[[]]] </p>
      <p>Abuse: [[[]]] </p>
      <p>Legal: [[[]]] </p>
      <p>Religion: [[[]]]  </p>
      <p>Sexual Orientation: [[[]]] </p>
      <p>Sexually Active: [[[yes/no]]]   Forms of contraception using, if any: [[[]]] </p>

      <p class='header'> Family History:</p>
      <p>Psychiatric Illness: [[[]]] </p>
      <p>Substance Abuse: [[[]]] </p>
      <p>Suicide: [[[]]] </p>

      <p class='header'>Vital Signs: </p>
      <p>BP: [[[]]]/[[[]]]	Pulse: [[[]]] </p>
      <p>Weight: [[[]]] </p>

      <p class='header'>Mental Status Examination:</p>
      <p>Appearance: [[[Appears stated age/older/younger, hygiene and grooming, clothing appropriate/inappropriate, features that stand out (hair color, tattoos, etc.)]]]</p>
      <p>Behavior: [[[Psychomotor agitation/retardation, eye contact, etc.]]] </p>
      <p>Gait: Muscle strength/Tone: [[[Atrophy vs no atrophy, any abnormal movements]]] </p>
      <p>Speech: [[[Comment on rate, rhythm, tone]]] </p>
      <p>Mood/Affect: [[[Affect includes appropriateness to situation, congruence to stated mood, quality, intensity, fluctuations, range]]] </p>
      <p>Thought Process: [[[linear, logical and goal-oriented vs disorganized, thought blocking, neologisms]]] </p>
      <p>Associations: [[[intact or loose]]]</p>
      <p>Thought Content: [[[Inquired and observed. Preoccupations, obsessions, ruminations, SI, HI, AH, VH, PI, evidence of delusions]]]</p>
      <p>Attention span and concentration: [[[Good/Fair/Impaired/Poor]]] </p>
      <p>Language: [[[Able to name objects?]]] </p>
      <p>Fund of knowledge: [[[Average?]]] </p>
      <p>Memory: [[[Comment on recent and remote]]] </p>
      <p>Orientation: [[[Intact to person/place/time/situation?]]] </p>
      <p>Insight/Judgment: [[[Good/Fair/Impaired/Poor]]] </p>

      <p>Recent Labs:</p>
      <p class='data-fill'>[&#60&#60CBC_LATEST_1YR&#62&#62]</p>
      <p class='data-fill'>[&#60&#60CMP_LATEST_1YR&#62&#62]</p>
      <p class='data-fill'>[&#60&#60A1C_LATEST_1YR&#62&#62]</p>
      <p class='data-fill'>[&#60&#60T4_FREE_LATEST_1YR&#62&#62] </p>
      <p class='data-fill'>[&#60&#60TSH_LATEST_1YR&#62&#62] </p>
      <p class='data-fill'>[&#60&#60VITAMIN_D_25OH_TOTAL_LATEST_1YR&#62&#62]</p>

      <p>Assessment: <span class='data-fill'>[&#60&#60MR_MS&#62&#62] [&#60&#60PATIENT_NAME&#62&#62]</span> is a <span class='data-fill'>[&#60&#60AGE&#62&#62]</span> year old <span class='data-fill'>[&#60&#60MAN_WOMAN_LCASE&#62&#62]</span> with diagnoses of [[[]]] </p>

      <p>Psychiatric Diagnoses based on DSM 5: [[[]]]</p>

      <p>Medical Problems: [[[]]]</p>

      <p class='header'>Plan:</p>
      <p>1. Not an imminent danger to self, danger to others, or gravely disabled. Continue outpatient. </p>
      <p>2. Psychiatric Medication Management: </p>
      <p>- [[[]]] </p>
      <p>- Discussed the risks, benefits, and treatment alternative with patient, who agrees with the above medication regimen. </p>
      <p>3. Medical Issues: [[[Include problems that you are actively managing or following.]]] </p>
      <p>4. Labs: Initial evaluation labs including CBC, CMP, LFTs, Lipid panel, to rule out medical contributors and assess metabolic risk. </p>
      <p>5. Psychotherapy: Supportive and CBT. </p>
      <p>6. Psychoeducation: [[[May include discussing sleep hygiene, role of diet and exercise, monitoring mood and sleep cycles, etc.]]] </p>
      <p>7. Instructed patient to call 911 or go to the nearest ED if feeling psychiatrically unstable, suicidal, or homicidal. </p>
      
      <p>Outpatient Psychiatry Progress Note</p>

      <p>Chief Complaint: [[[Identify problem being followed]]]</p>

      <p class='header'>Identifying Information:</p>
      <p><span class='data-fill'>[&#60&#60PATIENT_NAME&#62&#62]</span> is a <span class='data-fill'>[&#60&#60AGE&#62&#62]</span> year old <span class='data-fill'>[&#60&#60SEX&#62&#62]</span> who presents today for regularly scheduled follow-up appointment.</p>

      <p class='header'>Interval History:</p>
      <p><span class='data-fill'>[&#60&#60HE_SHE&#62&#62]</span> denies any side effects from current medication regimen. <span class='data-fill'>[&#60&#60HE_SHE&#62&#62]</span> states that <span class='data-fill'>[&#60&#60HE_SHE_LCASE&#62&#62]</span> is adherent with current medication regimen.</p>

      <p>[[[Insert details here]]]</p>


      <p>Smoking: [[[]]]</p>
      <p>Alcohol: [[[]]]</p>
      <p>Cannabis: [[[]]] </p>
      <p>Drugs: [[[]]] </p>
      <p>Exercise: [[[]]]</p>
      <p>Diet: [[[]]] </p>

      <p class='header'>Reproduction:</p>
      <p>Currently Pregnant? [[[]]] </p>
      <p>Planning to become pregnant? [[[]]] </p>
      <p>Forms of contraception using, if any: [[[]]] </p>
      <p>Last Menstrual Period: [[[]]] </p>

      <p class='header'>Review of Systems: </p>
      <p>[[[Review 2-9 systems]]] </p>

      <p class='header'>Vital Signs: </p>
      <p>Weight: [[[]]] </p>
      <p>BP: [[[]]]/[[[]]]    HR: [[[]]]</p>

      <p class='header'>Mental Status Examination:</p>
      <p>Appearance: [[[Appears stated age/older/younger, hygiene and grooming, clothing appropriate/inappropriate, features that stand out (hair color, tattoos, etc.)]]] </p>
      <p>Behavior: [[[Psychomotor agitation/retardation, eye contact, etc.]]] </p>
      <p>Gait: Muscle strength/Tone: [[[Atrophy vs no atrophy, any abnormal movements]]] </p>
      <p>Speech: [[[Comment on rate, rhythm, tone]]]</p>
      <p>Mood/Affect: [[[Affect includes appropriateness to situation, congruence to stated mood, quality, intensity, fluctuations, range]]] </p>
      <p>Thought Process: [[[linear, logical and goal-oriented vs disorganized, thought blocking, neologisms]]] </p>
      <p>Associations: [[[intact or loose]]] </p>
      <p>Thought Content: [[[Inquired and observed. Preoccupations, obsessions, ruminations, SI, HI, AH, VH, PI, evidence of delusions]]] </p>
      <p>Attention span and concentration: [[[Good/Fair/Impaired/Poor]]] </p>
      <p>Language: [[[Able to name objects?]]] </p>
      <p>Fund of knowledge: [[[Average?]]] </p>
      <p>Memory: [[[Comment on recent and remote]]] </p>
      <p>Orientation: [[[Intact to person/place/time/situation?]]]</p>
      <p>Insight/Judgment: [[[Good/Fair/Impaired/Poor]]] </p>

      <p class='header'>Current Outpatient Medications: </p>
      <p class='data-fill'>[&#60&#60MEDS_OUTPATIENT&#62&#62]</p>

      <p class='header'>Recent Labs: </p>
      <p class='data-fill'>[&#60&#60CBC_LATEST_1YR&#62&#62] </p>
      <p class='data-fill'>[&#60&#60CMP_LATEST_1YR&#62&#62] </p>
      <p class='data-fill'>[&#60&#60A1C_LATEST_1YR&#62&#62] </p>
      <p class='data-fill'>[&#60&#60T4_FREE_LATEST_1YR&#62&#62] </p>
      <p class='data-fill'>[&#60&#60TSH_LATEST_1YR&#62&#62] </p>
      <p class='data-fill'>[&#60&#60VITAMIN_D_25OH_TOTAL_LATEST_1YR&#62&#62] </p>

      <p>Assessment: <span class='data-fill'>[&#60&#60MR_MS&#62&#62] [&#60&#60PATIENT_NAME&#62&#62]</span> is a <span class='data-fill'>[&#60&#60AGE&#62&#62]</span> year old <span class='data-fill'>[&#60&#60MAN_WOMAN_LCASE&#62&#62]</span> with diagnoses of [[[]]] </p>

      <p>Psychiatric Diagnoses: <span class='data-fill'>[&#60&#60HEALTH_ISSUES_PSYCH&#62&#62]</span> </p>

      <p>Medical Problems: <span class='data-fill'>[&#60&#60HEALTH_ISSUES_CHRONIC&#62&#62]</span> </p>

      <p class='header'>Plan:</p>
      <p>1. Not an imminent danger to self, danger to others, or gravely disabled. Continue outpatient. </p>
      <p>2. Psychiatric Medication Management: </p>
      <p>- [[[]]] </p>
      <p>- Discussed the risks, benefits, and treatment alternative with patient, who agrees with the above medication regimen. </p>
      <p>3. Medical Issues: [[[Include problems that you are actively managing or following.]]] </p>
      <p>4. Labs: [[[]]] </p>
      <p>5. Psychotherapy: Supportive and CBT. </p>
      <p>6. Psychoeducation: [[[May include discussing sleep hygiene, role of diet and exercise, monitoring mood and sleep cycles, etc.]]] </p>
      <p>7. [[[If discussed this specifically with pt this visit]]] Instructed patient to call 911 or go to the nearest ED if feeling psychiatrically unstable, suicidal, or homicidal.</p>

    </div>
    <p>By: Daniel Kristen MD </p>
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
