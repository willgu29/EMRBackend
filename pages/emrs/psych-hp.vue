<template>
  <section class="emr-container">
    <h1 class="title">
      IP PSY NBMU PSYCHIATRY HISTORY AND PHYSICAL
    </h1>
    <h2 class="info">
      Note Template
    </h2>


        <input v-if="this.editing != true" v-on:click="edit" class="save" type="submit" value="Click to edit" />
        <input v-else v-on:click="saveDiv" class="save" type="submit" value="Save and submit for review" />


    <div id="note-template" contenteditable="true">
      <p><b>Chief Complaint:</b> ***</p>
      <p><b>Legal Status:</b> <span class="smart-list"><b>{Legal Status:13913}</b> <br/> (1. voluntary <br/>
                                                                            2. involuntary <br/>
                                                                            3. conservatorship <br/>
                                                                            4. 72 hour hold <br/>
                                                                            5. 14 day <br/>
                                                                            6. temporary conservator)</span></p>
      <p><b>Hold Expiration:</b> ***</p>
      <p class="header">History of Present Illness: </p>
      <p>***</p>
      <p class="header">Past Psychiatric History: </p>
      <p>- Diagnoses: ***</p>
      <p>- Hospitalizations: ***</p>
      <p>- Suicide attempts: ***</p>
      <p>- Outpatient therapy: ***</p>
      <p>- Medication trials: ***</p>
      <p>- Psychological Trauma History (including sexual, emotional or physical abuse):
        <span class="smart-list"><b>{Psychological Trauma:15341}</b> <br />(1. No history of psychological trauma. <br />
                                                               2. There is a history of psychological trauma; specifically, *** <br />
                                                               3. The patient is unable to answer questions regarding psychological trauma. <br />
                                                               4. The patient is unwilling to answer questions regarding psychological trauma.)</span> </p>
      <p>- Current medications: ***</p>

      <p class="header">Substance Use / Treatment History:</p>
      <p>***</p>

      <p class="header">Allergies:</p>
      <p class="data-fill">@ALLERGY@</p>

      <p class="header">Past Medical and Surgical History:</p>
      <p>***</p>

      <p class="header">-Medications:</p>
      <p class="data-fill">@PTAMEDS@</p>
      <p>- Medication compliance: ***</p>

      <p class="header">Family History:</p>
      <p>- Psychiatric family history: ***</p>

      <p class="header">Social History:</p>
      <p>***</p>

      <p class="header">Legal History:</p>
      <p>***</p>

      <p class="header">Review of Systems:</p>
      <p>Review of Systems - <span class="smart-list"><b>{Review of Systems:10510}</b> (non-editable currently)</span></p>
      <p>Pain assessment: <span class="smart-list"><b>{H&P Pain Assessment:13953}</b> <br />(1. The patient denies any pain. <br/>
                                                                                      2. The patient endorses pain as *** out of 10, located ***, and described as ***. <br/>
                                                                                      3. {H&P PAIN ASSESSMENT NURSING LINK:TXT,12520})</span></p>

      <p class="header">Physical Exam:</p>
      <p class="data-fill">@VS@</p>
      <span class='smart-list'><b>{General Physical Assessment:10547}</b> (non-editable currently)</span>

      <p class="header">Mental Status Examination:</p>
      <p>Appearance: ***</p>
      <p>Behavior: ***</p>
      <p>Motor/Abnormal Involuntary Movements: ***</p>
      <p>Gait: ***</p>
      <p>Speech: ***</p>
      <p>Mood: ***</p>
      <p>Affect: ***</p>
      <p>Thought Process: <span class="smart-list"><b>{Coherent / Incoherent:15656}</b> (1. coherent 2. incoherent)</span>, <span class="smart-list">{Logical / Illogical:15657} (1. logical 2. illogical)</span></p>
      <p>Associations: <span class="smart-list"><b>{Associations:15658}</b> <br />(-linear <br/>
                                                                      -goal-directed <br/>
                                                                      -circumstantial <br/>
                                                                      -tangential <br/>
                                                                      -loose)</span></p>
      <p>Thought Content: ***</p>
      <p>Perceptions: <span class="smart-list"><b>{Perceptions:15659}</b> <br />(-illusions <br/>
                                                                   -auditory hallucinations <br/>
                                                                   -visual hallucinations <br/>
                                                                   -tactile hallucinations <br/>
                                                                   -no abnormal perceptions)</span></p>
      <p>Insight/Judgment: ***</p>
      <p>Sensorium: Level of consciousness <span class="smart-list"><b>{LOC MS:17734}</b> (1. awake 2. sedated 3. fluctuating)</span>; <span class="smart-list"><b>{sensory LOC:17736}</b> (1. attentive 2. inattentive)</span>; recent memory <span class="smart-list"><b>{intact/not intact:17735}</b> (1. intact 2. not intact)</span>; remote memory <span class="smart-list"><b>{intact/not intact:17735}</b> (1. intact 2. not intact)</span></p>
      <p>Orientation: Patient is oriented to <span class="smart-list"><b>{Orientation:17737}</b> <br/> (-person <br/>
                                                                                           -place <br/>
                                                                                           -time <br/>
                                                                                           -situation)</span></p>
      <p>Intellectual Functions: Fund of knowledge <span class="smart-list"><b>{average:17750}</b> (-below average -average -above average)</span> based on grammar and vocabulary; Interpretations <span class="smart-list"><b>{Interpretations:17764}</b> (-concrete -abstract)</span></p>

      <p class="header">Lab Results:</p>
      <p>***</p>

      <p class="header">Narrative Assessment:</p>
      <p>***</p>

      <p>A comprehensive suicide risk assessment was performed and the patient was assessed to be at a <span class="smart-list"><b>{low / intermediate / high:15294}</b> (1. low 2. intermediate 3. high)</span> acute risk of self-harm. Modifiable risk factors include <span class="smart-list"><b>{Modifiable Risk Factors:15295}</b> (-intoxication -psychotic symptoms with loss of reality testing -impaired impulse control -access to a firearm or other weapon)</span>. Non-modifiable risk factors include <span class="smart-list"><b>{Non- Modifiable Risk Factors:15298}</b> (-prior violent acts -prior diagnosis of antisocial personality disorder)</span>. The patient also has protective factors of <span class="smart-list"><b>{Protective Factors:15299}</b> <br/> (-future life plans <br/>
                                                                                                                                                                                                                                                      -coping skills  <br/>
                                                                                                                                                                                                                                                      -religious beliefs  <br/>
                                                                                                                                                                                                                                                      -therapeutic relationships  <br/>
                                                                                                                                                                                                                                                      -responsibility to children  <br/>
                                                                                                                                                                                                                                                      -responsibility to pets  <br/>
                                                                                                                                                                                                                                                      -access to health care  <br/>
                                                                                                                                                                                                                                                      -***)</span>.</p>

      <p>A comprehensive violence risk assessment was also performed. The patient was assessed to be at <span class="smart-list"><b>{low / intermediate / high:15294}</b> (1. low 2. intermediate 3. high)</span> acute risk of violence toward others. Modifiable risk factors for violence include <span class="smart-list"><b>{violent risks:17733}</b> (-intoxication -psychotic symptoms with loss of reality testing -impaired impulse control -access to a firearm or other weapon)</span>. Non-modifiable risk factors for violence include <span class="smart-list"><b>{non mod risk factor:17728}</b> (-prior violent acts -prior diagnosis of antisocial personality disorder)</span>.</p>

      <p>Clinical Global Impression - Severity: <span class="smart-list"><b>{IP CGI-S:17765}</b> <br /> (1= Normal, not at all ill <br/>
                                                                                                  2= Borderline mentally ill :Suggested Guidelines= Subtle or suspected pathology <br />
                                                                                                  3= Mildly ill :Suggested Guidelines= Clearly established symptoms with minimal, if any, difficuly in social and occupational function. <br />
                                                                                                  4= Moderately ill :Suggested Guidelines= Overt symptomatology causing noticeable, but modest, functional impairment. <br />
                                                                                                  5= Markedly ill :Suggested Guidelines= Intrusive symptomatology that distinctly impairs social/occupation funtion. <br />
                                                                                                  6= Severely ill :Suggested Guidelines= Disruptive patholgy; behavior and function are frequetnly influenced by symptomatology and often requires assistance <br />
                                                                                                  7= Among the most extremely ill patients :Suggested Guidelines= Pathology dreastically interferes in many life functions.)</span></p>

      <p class="header">Active Problem List:</p>
      <p>***</p>

      <p class="header">Plan:</p>
      <p>A. Psychiatric: ***</p>
      <p>B. Medical: ***</p>
      <p>C. Psychosocial: ***</p>
      <p>D. Legal: ***</p>
      <p>E. Disposition: ***</p>

      <p class="header">Decision Making Capacity:</p>
      <p>This patient <span class="smart-list"><b>{Is/Is Not:129054}</b> (1. is 2. is not)</span> capable of making his or her own healthcare decisions during this hospitalization.</p>

      <p>Code Status:</p>
      <p class="data-fill">@DNR@</p>

      <p>Outcome of Discussion of Plan and Alternatives With Patient/Surrogate:</p>
      <p>Patient agrees with the plan above: <span class="smart-list"><b>{Yes/No:63}</b> (1. yes 2. no)</span></p>
      <p>Patient agrees with the plan above with the following exceptions: ***</p>

      <p>Primary Care Physician:<span class="data-fill">@PCP@</span></p>

      <p>Note Author: <span class='data-fill'>@UCSIGNATURE@</span>,<span class='data-fill'>@UCTODAYDATE@</span>, <span class='data-fill'>@NOW@</span></p>


    </div>
    <p>By: University of California San Diego (Lucy) </p>
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
