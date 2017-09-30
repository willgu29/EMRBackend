<template>
  <section class="emr-container">
    <h1 class="title">
      Psychiatry Initial ED Consultation Note
    </h1>
    <h2 class="info">
      Note Template
    </h2>


        <input v-if="this.editing != true" v-on:click="edit" class="save" type="submit" value="Click to edit" />
        <input v-else v-on:click="saveDiv" class="save" type="submit" value="Save and submit for review" />


    <div id="note-template" contenteditable="true">

      <p>* * * * * * * RECOMMENDATIONS INCOMPLETE UNTIL THIS BANNER IS REMOVED * * * * * * *</p>

      <p class='header'>History of Present Illness:</p>
      <p><span class='data-fill'>[&#60&#60MR_MS&#62&#62] [&#60&#60PATIENT_NAME&#62&#62]</span> is a <span class='data-fill'>[&#60&#60AGE&#62&#62]</span> year old <span class='data-fill'>[&#60&#60SEX&#62&#62]</span> with previous diagnosis of [[[]]] who presents to ED [[[provide all details of reason for coming into hospital today, who brought it, pertinent + and - psych ROS]]]</p>

      <p>Review of Systems: Patient denies headache, nausea/vomiting.</p>

      <p class='header'>Past Psychiatric History:</p>
      <p>Diagnoses and Course of Illness: [[[when given dx, who gave dx, why given that dx. Comment on previous symptoms of psych disorders here.]]] </p>
      <p>Hospitalizations: [[[dates, hospital name, reason for hospitalization, placed on hold]]] </p>
      <p>Psychiatrist: [[[]]] </p>
      <p>History of Conservatorship: [[[]]] </p>
      <p>Suicide attempts/self-harm behaviors: [[[]]]</p>
      <p>Access to firearms: [[[]]] </p>
      <p>Current providers: [[[]]] </p>

      <p>Depression History: Patient denies changes in sleeping patterns, anhedonia, feelings of guilt, helplessness, or hopelessness, changes in energy, changes in concentration, changes in appetite.</p>

      <p>Mania History: Patient denies distractibility, irritability, grandiosity, racing thoughts, rapid speech, increased goal-oriented activity, impulsivity.</p>

      <p>Psychosis History: Patient denies delusions such as thought insertion, broadcast, IOR, paranoid ideation, communication with god</p>

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
      <p>Religion: [[[]]] </p>
      <p>Legal: [[[]]] </p>
      <p>Abuse: Patient denies any history of sexual or physical abuse. Patient does not show signs of sexual or physical abuse or neglect. They report they have never felt unsafe at home. They report they have never been harmed, threatened or inappropriately touched by someone close to them.</p>
      <p>Sexual History: Patient states their sexual preference is [[[]]] and they [[[are/are not]]] currently sexually active. They [[[do/do not]]] use contraception ([[[type]]]). They [[[have/have not]]] had an STI.</p>

      <p class='header'>Substance Abuse History:</p>
      <p>Tobacco: [[[]]]</p>
      <p>EtOH: <span class='data-fill'>[[[DUI/blackouts/withdrawal symptoms/szs/DT/rehab]]]</span></p>
      <p>Illicit: <span class='smart-list'>[[[mj/meth/cocaine/ecstasy/IV/rehab]]]</span> </p>

      <p class='header'>Family History:</p>
      <p>Psychiatric Illness: [[[]]] </p>
      <p>Suicide: [[[]]] </p>
      <p>Substance Abuse: [[[]]] </p>

      <p class='header'>Most Recent Vital Signs:</p>
      <p class='data-fill'>[&#60&#60VITALS_CURRENT&#62&#62]</p>

      <p class='header'>Physical Examination on Evaluation in ED:</p>
      <p>General: NAD </p>
      <p>HEENT: EOMI, moist mucous membranes, clear OP </p>
      <p>Neck:  FROM </p>
      <p>Respiratory: breathing comfortably on room air </p>
      <p>C/V: RRR </p>
      <p>Abdomen:  Soft, nontender  </p>
      <p>Extremity:  no c/c/e  </p>
      <p>Neurological:  Grossly intact motor and sensory exam; AOx3 </p>

      <p class='header'>Mental Status Examination: </p>
      <p>Appearance: Patient appears their stated age, has fair grooming and hygiene, and is wearing [[[]]]. Normal muscle tone.</p>
      <p>Behavior: No psychomotor agitation or retardation. No abnormal movements. [[[]]] </p>
      <p>Speech: Normal rate, rhythm, and tone. </p>
      <p>Mood: [[[]]] </p>
      <p>Affect: [[[]]] </p>
      <p>Thought content: Denies suicidal ideations and homicidal ideations.  Denies auditory and visual hallucinations and paranoid ideations. </p>
      <p>Thought processes: logical and goal-directed with linear associations </p>
      <p>Insight: [[[]]] </p>
      <p>Judgment: [[[]]] </p>
      <p>Attention and Concentration: [[[]]]</p>
      <p>Gait: stable, narrow base </p>

      <p class='header'>Cognitive Examination</p>
      <p>Memory: <span class='smart-list'>[[[Intact/Impaired]]]</span> - able to recall [[[]]] objects after 5 min.</p>
      <p>Attention: Intact, as tested by asking pt to spell "WORLD" backwards.</p>
      <p>Concentration: Intact, as tested by asking patient to perform months of year backwards.</p>
      <p>Fund of knowledge: Intact, as tested by asking patient to name the current president. </p>
      <p>Ability to name common objects: Intact. </p>

      <p class='header'>Laboratory Studies:</p>
      <p>Urinalysis: <span class='data-fill'>[&#60&#60UA&#62&#62]</span></p>
      <p>Urine Drug Screen: [[[]]]</p>
      <p>Urine Pregnancy Test: [[[]]] </p>

      <p>Assessment: [[[age]]] year old [[[m/f]]] BIB [[[]]] for [[[]]]. [[[Explain why you are recommending the following]]]</p>

      <p>.silow</p>
      <p>.high</p>
      <p>.hot</p>

      <p>Primary Medical Diagnosis: [[[ Diagnosis ]]]</p>

      <p>DSM-5 Diagnosis: [[[Diagnosis]]]</p>
      <p>Psychosocial issues: poor coping skills, poor social and occupational functioning, lack of primary support system, [[[substance use]]].</p>

      <p class='header'>Recommendations:</p>
      <p>1. Safety: Patient meets criteria for inpatient psychiatric hospitalization as they are an imminent danger to self, danger to others, or gravely disabled due to a mental illness.</p>
      <p>2. LEGAL: Patient is currently on an involuntary psychiatric 5150 hold started [[[]]]/[[[]]]/16 @ [[[]]] for [[[]]] OR amenable to voluntary admission. Patient should be evaluated for legal hold if requesting to leave.</p>
      <p>3. Please coordinate with case manager to facilitate transfer to accepting, contracted, designated inpatient psychiatric facility.</p>
      <p>4. Psychiatric Medication Management: [[[]]]</p>

      <p>Risk, benefits, and alternatives for the below medications were discussed with the patient, who appears to understand.</p>

      <p>5. Medical Issues: [[[]]]</p>

      <p>******************************************************************************</p>
      <p class='header'>Recommendations if patient is admitted to UCI:<p>
      <p>If the patient is admitted to UCI, recommend the following plan:</p>
      <p>1. Admit the patient to [[[1N/2S/2N]]] on involuntary hold started at [[[time]]] for [[[DTS/DTO/GD]]] OR amenable to voluntary admission - if requesting to leave, page 5150 to evaluate for involuntary hold.</p>
      <p>2. Begin q15 minute safety checks. No 1:1 is needed at this time as patient can contract for safety.
      <p>Precautions: [[[]]] </p>
      <p>3. For the treatment of psychiatric symptoms: </p>

      <p>4. Medical Issues:</p>

      <p>5. We will attempt to increase collateral information contacting prior providers and family as well.</p>
      <p>6. We will follow up on routine admission laboratory assessments.</p>
      <p>7. Begin individual group, milieu, and allied health therapies. </p>
      <p>8. Disposition: To be determined when once psychiatrically stable. Appreciate social work and case management assistance regarding arranging aftercare.</p>

      <p class='header'>Recommendations:<p>
      <p>1. Patient does not meet criteria for inpatient psychiatric hospitalization as they are not a DTS, DTO, or GD. Pt adamantly denies thoughts of self harm or SI. Denies feeling unsafe outside of the hospital and agrees to alert staff about impulses toward self-harm or suicide. </p>
      <p>2. Patient's collateral ([[[]]]) [[[present/called]]] and agrees that the patient will be safe outside of the hospital. </p>
      <p>3. Recommend follow-up with outpatient psychiatrist as soon as possible. </p>
      <p>4. Continue home psychiatric medications </p>
      <p>5. Provided with contact information for UCI outpatient psychiatry 714-456-5902. Provided pt with packets of information including [[[]]]. </p>
      <p>6. Strict ED return precautions given with teach back- patient informed that if worsening/developing thoughts of self harm, suicide, homicide, hallucinations or paranoid ideations, unable to care for self due to mental health conditions, pt is to return to nearest emergency room immediately.</p>

      <p>Above case discussed with on-call attending Dr. [[[]]] who agrees with the above assessment and recommendations. Discussed with ED physician at [[[]]]</p>

    </div>
    <p>By: Jessica Cvetko MD </p>
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
