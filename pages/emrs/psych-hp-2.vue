<template>
  <section class="emr-container">
    <h1 class="title">
      Inpatient Psychiatry H&P
    </h1>
    <h2 class="info">
      Note Template
    </h2>

    <input v-if="this.editing != true" v-on:click="edit" class="save" type="submit" value="Click to edit" />
    <input v-else v-on:click="saveDiv" class="save" type="submit" value="Save and submit for review" />

    <div id="note-template" contenteditable="true">

<p>* * * * * * * RECOMMENDATIONS INCOMPLETE UNTIL THIS BANNER IS REMOVED * * * * * * *</p>

<p class='header'>History of Present Illness: </p>
<p><span class='data-fill'>[&#60&#60MR_MS&#62&#62]  [&#60&#60PATIENT_NAME&#62&#62]</span> is a <span class='data-fill'>[&#60&#60AGE&#62&#62]</span> year old <span class='data-fill'>[&#60&#60SEX&#62&#62]</span> with previous diagnosis of [[[]]] who presents to ED <span class='smart-list'>[[[provide all details of reason for coming into hospital today, who brought it, pertinent + and - psych ROS]]]</span> </p>
<p><b>Depression History:</b> Patient denies changes in sleeping patterns, anhedonia, feelings of guilt, helplessness, or hopelessness, changes in energy, changes in concentration, changes in appetite.</p>
<p><b>Mania History:</b> Patient denies distractibility, irritability, grandiosity, racing thoughts, rapid speech, increased goal-oriented activity, impulsivity.</p>
<p><b>Psychosis History:</b> Patient denies delusions such as thought insertion, broadcast, IOR, paranoid ideation, communication with god</p>
<p><b>Review of Systems:</b> Does not endorse shortness of breath, chest pain, nausea vomiting, constipation, or headache.</p>

<p class='header'>Past Psychiatric History:</p>
<p>Diagnoses and Course of Illness: <span class='smart-list'>[[[when given dx, who gave dx, why given that dx. Comment on previous symptoms of psych disorders here.]]]</span></p>
<p>Hospitalizations: <span class='smart-list'>[[[dates, hospital name, reason for hospitalization, placed on hold]]]</span></p>
<p>Psychiatrist: [[[]]] </p>
<p>History of Conservatorship: [[[]]] </p>
<p>Suicide attempts/self-harm behaviors: [[[]]] </p>
<p>Access to firearms: [[[]]] </p>
<p>Current providers: [[[]]] </p>


<p class='header'>Current and Past Psychiatric Medication Trials:</p>
<p>Current: <span class='data-fill'>[&#60&#60MEDS_OUTPATIENT&#62&#62]</span></p>

<p>Past Trials: <span class='smart-list'>[[[names, dates, length of time tried, response, adverse effects]]]</span></p>

<p class='header'>Allergies:</p>
<p><span class='data-fill'>[&#60&#60ALLERGIES&#62&#62]</span></p>

<p class='header'>Past Medical History and Past Surgical History:</p>
<p><span class='data-fill'>[&#60&#60AMB_INTAKE_PAST_MED_HX&#62&#62]</span></p>
<p><span class='data-fill'>[&#60&#60AMB_INTAKE_PAST_SURG_HX&#62&#62]</span></p>


<p class='header'>Social History:</p>
<p><b>Developmental:</b> Patient born full-term, does not recall any complications of pregnancy or birth. Met all developmental milestones as expected</p>
<p>Lives with [[[]]] in a <span class='smart-list'><b>[[[apt/house]]]</b> (1. home 2. B&C 3. TRC 4. SNF 5. homeless 6. ***)</span> in <span class='smart-list'>[[[city]]]</span></p>
<p><b>Marriage Status:</b> <span class='smart-list'><b>[[[single/married/divorced]]]</b> (1. single 2. married 3. divorced 4. ***)</span></p>
<p><b>Children:</b> [[[]]]</p>
<p><b>Highest Level of Education:</b> [[[]]]</p>
<p><b>Employment:</b> [[[]]]</p>
<p><b>Financial Support:</b> [[[]]] </p>
<p><b>Religion:</b> [[[]]] </p>
<p><b>Legal:</b> [[[]]] </p>
<p><b>Abuse:</b> Patient denies any history of sexual or physical abuse. Patient does not show signs of sexual or physical abuse or neglect. They report they have never felt unsafe at home. They report they have never been harmed, threatened or inappropriately touched by someone close to them.</p>
<p><b>Sexual History:</b> Patient states their sexual preference is [[[]]] and they <span class='smart-list'><b>[[[are/are not]]]</b> (1. are 2. are not 3. ***)</span> currently sexually active. They <span class='smart-list'>[[[do/do not]]]</span> use contraception ([[[type]]]). They [[[have/have not]]] had an STI.</p>

<p class='header'>Substance Abuse History:</p>
<p><b>Tobacco:</b> [[[]]]</p>
<p><b>EtOH:</b> <span class='smart-list'>[[[DUI/blackouts/withdrawal symptoms/szs/DT/rehab]]]</span></p>
<p><b>Illicit:</b> <span class='smart-list'>[[[mj/meth/cocaine/ecstasy/IV/rehab]]]</span></p>

<p class='header'>Family History:</p>
<p><b>Psychiatric Illness:</b> [[[]]]</p>
<p><b>Suicide:</b> [[[]]] </p>
<p><b>Substance Abuse:</b> [[[]]]</p>

<p class='header'>Most Recent Vital Signs:</p>
<p><span class='data-fill'>[&#60&#60VITALS_CURRENT&#62&#62]</span></p>


<p class='header'>Physical Examination on Evaluation in ED:</p>
<p><b>GEN:</b> Awake, Alert, No apparent distress </p>
<p><b>HEENT:</b> NC/AT. Pupils equally round and reactive to light, moist mucous membranes.</p>
<p><b>Neck:</b>  Supple, FROM.</p>
<p><b>CVS:</b> Regular rate and rhythm, normal S1 and S2, no murmurs, gallops, or rubs. PMI non-displaced.</p>
<p><b>RESP:</b> Clear to auscultation bilaterally. No wheezes, rales, or rhonchi. </p>
<p><b>ABD:</b>  Soft, nontender, non-distended. Normoactive bowel sounds.</p>
<p><b>EXT:</b>  no cyanosis, clubbing, or edema </p>
<p><b>SKIN: </b> No rash. Skin intact. </p>
<p><b>NEURO:</b> Cranial nerves II-XII are intact. Motor System: 5/5 strength throughout. The patient has tabel gait on narrow base. No tremor or pronator drift. Sensory system: Intact throughout to light touch. Reflexes: 2+ and symmetric throughout.</p>

<p class='header'>Mental Status Examination:</p>
<p><span class='smart-list'><b>[[[ MSE ]]]</b> (1. .mse 2. .msenorm 3. .msedepr 4. .msemanic 5. .msepsychosis 6. .msesleep 7. msemute)</span>
<p><b>Appearance:</b> Patient appears their stated age, has fair grooming and hygiene, and is wearing [[[]]]. Normal muscle tone.</p>
<p><b>Behavior:</b> No psychomotor agitation or retardation. No abnormal movements. [[[]]] </p>
<p><b>Speech:</b> Normal rate, rhythm, and tone. </p>
<p><b>Mood:</b> [[[]]] </p>
<p><b>Affect:</b> [[[]]] </p>
<p><b>Thought content:</b> Denies suicidal ideations and homicidal ideations.  Denies auditory and visual hallucinations and paranoid ideations. </p>
<p><b>Thought processes:</b> logical and goal-directed with linear associations </p>
<p><b>Insight:</b> [[[]]]</p>
<p><b>Judgment:</b> [[[]]] </p>
<p><b>Attention and Concentration:</b> [[[]]]</p>
<p><b>Gait:</b> stable, narrow base</p>

<p class='header'>Cognitive Examination</p>
<p><b>Memory:</b> <span class='smart-list'>[[[Intact/Impaired]]]</span> - able to recall [[[]]] objects after 5 min.</p>
<p><b>Attention:</b> Intact, as tested by asking pt to spell "WORLD" backwards.</p>
<p><b>Concentration:</b> Intact, as tested by asking patient to perform months of year backwards.</p>
<p><b>Fund of knowledge:</b> Intact, as tested by asking patient to name the current president.</p>
<p><b>Ability to name common objects:</b> Intact.</p>

<p class='header'>Laboratory Studies:</p>
<p><b>Urinalysis:</b></p>
<p><b>Urine Drug Screen:</b> [[[]]]</p>
<p><b>Urine Pregnancy Test:</b> [[[]]]</p>


<p><b>Assessment:</b> <span class='smart-list'>[[[age]]]</span> year old <span class='smart-list'>[[[m/f]]]</span> BIB [[[]]] for [[[]]]. <span class='smart-list'>[[[Explain why you are recommending the following]]]</span></p>

<p>Biological Factors:</p>
<p>Psychological Factors:</p>
<p>Social Factors:</p>

<p class='header'>DSM-5 Diagnosis: <span class='smart-list'>[[[Diagnosis]]]</span></p>
<p><b>Differential Diagnosis:</b></p>
<p><b>Psychosocial issues:</b> poor coping skills, poor social and occupational functioning, chronic untreated mental illness, lack of primary support system, <span class='smart-list'>[[[substance use]]]</span>.</p>

<p class='header'>Recommendations:</p>
<p><b>1. Safety:</b> Patient meets criteria for inpatient psychiatric hospitalization as they are an imminent danger to self, danger to others, or gravely disabled due to a mental illness.</p>
<p><b>2. LEGAL STATUS:</b> Patient is currently <span class='smart-list'>[[on an involuntary psychiatric 5150 hold started [[[]]]/[[[]]]/16 @ [[[]]] for [[[]]]  ]] </span>  OR amenable to voluntary admission. Patient should be evaluated for legal hold if requesting to leave.</p>
<p><b>3.</b> Please coordinate with case manager to facilitate transfer to accepting, contracted, designated inpatient psychiatric facility once ED detmines patient to be medically stable.</p>
<p><b>4. Psychiatric Medication Management:</b> [[[]]]</p>

<p>Risk, benefits, and alternatives for the below medications were discussed with the patient, who appears to understand.</p>

<p><b>5. Medical Issues: [[[]]]</b></p>

<p>******************************************************************************</p>
<p class='header'>Recommendations if patient is admitted to UCI:</p>
<p>1. Admit the patient to <span class='smart-list'>[[[1N/2S/2N]]]</span></p>
<p><b>    Legal Status:</b></p>
<p>2. Begin q15 minute safety checks. No 1:1 is needed at this time as patient can contract for safety.</p>
<p><b>Precautions: [[[]]] </b></p>
<p>3. Psychiatric Medication management: as above </p>
<p>4. Medical Issues: </p>

<p>5. We will attempt to increase collateral information contacting prior providers and family as well. </p>
<p>6. We will follow up on routine admission laboratory assessments. </p>
<p>7. Begin individual group, milieu, and allied health therapies. </p>
<p>8. Disposition: To be determined when once psychiatrically stable. Appreciate social work and case management assistance regarding arranging aftercare. </p>

<p class='header'>Recommendations:</p>
<p>1. Patient does not meet criteria for inpatient psychiatric hospitalization as they are not a DTS, DTO, or GD. Pt adamantly denies thoughts of self harm or SI. Denies feeling unsafe outside of the hospital and agrees to alert staff about impulses toward self-harm or suicide. </p>
<p>2. Patient's collateral ([[[]]]) <span class='smart-list'>[[[present/called]]]</span> and agrees that the patient will be safe outside of the hospital. </p>
<p>3. Recommend follow-up with outpatient psychiatrist as soon as possible.</p>
<p>4. Continue home psychiatric medications </p>
<p>5. Provided with contact information for UCI outpatient psychiatry 714-456-5902. Provided pt with packets of information including [[[]]].</p>
<p>6. Strict ED return precautions given with teach back- patient informed that if worsening/developing thoughts of self harm, suicide, homicide, hallucinations or paranoid ideations, unable to care for self due to mental health conditions, pt is to return to nearest emergency room immediately.</p>

<p>Above case discussed with on-call attending Dr. [[[]]] who agrees with the above assessment and recommendations. Discussed with ED physician at [[[]].</p>

    </div>
    <p>By: Chris Cho MD </p>
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
      axios.post('/api/curates/psych-hp-2', {
        innerHTML: innerHTML
      })
      alert('Your note template has been submitted for review, thank you!')
    },
    edit: function () {
      document.getElementById('note-template').focus()
      this.editing = true
    }
  }
}
</script>

<style scoped>
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
.macro {
  color: red;
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
.save {
  border-radius: 28px;
  font-size: 20px;
  border-color: blue;
  margin-bottom: 18px;
  background-color: #6093e5;
  color: white;
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
