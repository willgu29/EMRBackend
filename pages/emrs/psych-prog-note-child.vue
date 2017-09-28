<template>
  <section class="emr-container">
    <h1 class="title">
      PSY UCH OP PROGRESS NOTE CHILD
    </h1>
    <h2 class="info">
      Note Template
    </h2>


        <input v-if="this.editing != true" v-on:click="edit" class="save" type="submit" value="Click to edit" />
        <input v-else v-on:click="saveDiv" class="save" type="submit" value="Save and submit for review" />


    <div id="note-template" contenteditable="true">
      <p>Date of Service: <span class='data-fill'>@ED@</span></p>

      <p><b>Brief Clinical Summary:</b> <em>(As per previous note with edits as necessary. Note to Clinician: 1-2 sentences, comment on psychiatric diagnosis, bio-psycho-social-cultural history including household composition and educational status, and significant events.)</em></p>

      <p>***</p>

      <p class='header'>ASSESSMENT AND PLAN</p>
      <p><b>Assessment:</b></p>
      <p><span class='data-fill'>@NAME@</span> is a <span class='data-fill'>@AGE@</span> <span class='data-fill'>@SEX@</span> with ***</p>

      <p class='header'>Visit Diagnoses:</p>
      <p><em>Note To Clinician: For each problem, describe any information, education, or discussion of diagnosis, symptoms, problems, or labs discussed during the visit.</em></p>

      <p class='data-fill'>@DIAGWILDCARD3@</p>

      <p class='header'>Primary Diagnosis Problem Type:</p>
      <p><span class='smart-list'><b>{AMB PSY UCH PROBLEM TYPE:2107001015}</b> (non-editable currently)</span></p>

      <p class='header'>Primary Diagnosis Medical Decision Making Problem Risk:</p>
      <p><span class='smart-list'><b>{AMB PSY UCH MED DECISION MAKING:2107001021}</b> (non-editable currently)</span></p>


      <p><em>Intake screens must be completed within one month of initial visit.</em></p>
      <p><em>The Comprehensive Treatment Plan (.psytreatmentplan) must be completed within the first month of treatment and revised as needed or at a minimum of every six months.</em></p>

      <p><em>Date of last Comprehensive Treatment Plan: <span class='data-fill'>@REVFS(203)@</span></em></p>

      <p class='header'>Psychiatric Safety Assessment:</p>
      <p>At this point in time I estimate this patient’s <b>imminent</b> safety risk to be <span class='smart-list'><b>{PSY UCH OP MIN LOW MOD HIGH:2103440924}</b>(1. Minimal 2. Low 3. Moderate 4. High 5. N/A)</span>. I estimate this patient’s chronic safety risk to be <span class='smart-list'><b>{PSY UCH OP MIN LOW MOD HIGH:2103440924}</b>(1. Minimal 2. Low 3. Moderate 4. High 5. N/A)</span> based on the following factors:</p>
      <p>Risk factors: ***</p>
      <p>Protective factors: ***</p>

      <p class='header'>Clinical Global Impression (CGI):</p>
      <p class='data-fill'>@FLOW(6715:last)@</p>

      <p class='header'>Psychotherapy note:</p>
      <p>Type of service:</p>
      <p><span class='smart-list'><b>{PSYCHOTHERAPY SERVICES:2103440385}</b> (-Individual -Group -Family -Interactive -Multifamily -***) </span> <span class='smart-list'><b>{PSYCHOTHERAPY SERVICES2:2103440386}</b> <br/> (-Psychodynamic psychotherapy <br/>
                                                                                                                                                                                                                     -Cognitive Behavioral Therapy <br/>
                                                                                                                                                                                                                     -Dialectic Behavior Therapy <br/>
                                                                                                                                                                                                                     -Supportive psychotherapy <br/>
                                                                                                                                                                                                                     -Crisis intervention;*** <br/>
                                                                                                                                                                                                                     -Systemic Therapy <br/>
                                                                                                                                                                                                                     -N/A <br/>
                                                                                                                                                                                                                     -***)</span></p>

      <p class='header'>Goals of Psychotherapy</p>
      <p><span class='smart-list'><b>{PSY UCH PSYCHOTHERAPY GOALS:2103440387}</b> <br/> (-Reduction of symptoms including ***. <br/>
                                                                                         -Improved ability to maintain interpersonal relationship with, {INTERPERSONAL RELATIONSHIPS:2103440388} (non-editable currently) <br/>
                                                                                         -Improved self-esteem. <br/>
                                                                                         -Reduced impairment in social functioning including ***. <br/>
                                                                                         -Reduced impairment in occupational functioning including ***. <br/>
                                                                                         -Reduced impairment in other areas of life including ***. <br/>
                                                                                         -Improved ability to resolve maladaptive cognitive thoughts. <br/>
                                                                                         -Improved stress resilience related to ***. <br/>
                                                                                         -Remission of psychiatric disorder or symptoms including ***.)</span></p>

      <p class='header'>Psychotherapeutic interventions, techniques, and approaches include:</p>
      <p><span class='smart-list'><b>{PSY PSYCHOTHERAPUTIC INTERVENTIONS INCLUDE:2103440949}</b> <br/>(-N/A <br/>
                                                                                                       -Building the therapeutic alliance <br/>
                                                                                                       -Confrontation, clarification. and interpretation of patient's understanding related to *** <br/>
                                                                                                       -Strengthening patient's defense mechanisms to sustain effective coping with *** <br/>
                                                                                                       -Strengthening patient's defense mechanisms to sustain effective coping with *** <br/>
                                                                                                       -Improving patient's coping style *** <br/>
                                                                                                       -Fostering an improved relation to reality of *** <br/>
                                                                                                       -Cognitive therapy tactics *** of examining pathological thoughts *** <br/>
                                                                                                       -Use of pro/ con list to help patient get more balance thoughts related to *** <br/>
                                                                                                       -Used behavioral tactics including diary keeping, behavioral assignments <br/>
                                                                                                       -Behavioral activation to solve *** <br/>
                                                                                                       -Helping patient to improve emotional self-regulation of *** through DBT activities. <br/>
                                                                                                       -Helping patient to set more effective boundaries with *** <br/>
                                                                                                       -Helping patient to set more realistic goals or expectations related to *** <br/>
                                                                                                       -Helping patient improve interpersonal communication with *** <br/>
                                                                                                       -Problem solving related to *** <br/>
                                                                                                       -Solution oriented discussion related to *** <br/>
                                                                                                       -Use of relaxation techniques *** <br/>
                                                                                                       -Use of mindfulness techniques *** <br/>
                                                                                                       -Use of exposure techniques *** <br/>
                                                                                                       -Other ***)</span></p>

      <p class='header'>Plan:</p>
      <p>- Recommended frequency of psychotherapy: ***</p>
      <p>- Expected duration of psychotherapy services: ***</p>

      <p>I spent a total of <span class='smart-list'><b>{PSYCH TIME STATEMENT OPTIONS (DO NOT EDIT):20972}</b> <br />(1. 30 minutes (range 16-37min) <br/>
2. 45 minutes (range 38-52min) <br/>
3. 60 minutes (range >52 minutes) <br/>
4. 90 Minutes (Add 30 minutes code (90832) to the 60 minute code) <br/>
5. ***)</span> doing psychotherapy.</p>

      <p class='header'>SUBJECTIVE</p>

      <p>Patient Identification: <span class='data-fill'>@NAME@</span> is a <span class='data-fill'>@AGE@</span> <span class='data-fill'>@SEX@</span> who presents to <span class='data-fill'>@APPTDEP@</span> for <span class='data-fill'>@CHIEFCOMPLAINTN@.</span></p>

      <p class='header'>History of Present Illness:</p>
      <p>To clinician: content of HPI must correlate with visit diagnoses.</p>
      <p>***</p>

      <p class='header'>Content of psychotherapy session:</p>
      <p><span class='smart-list'><b>{PSY PT DISCUSSED THE FOLLOWING:2103440948}</b> (non-editable currently)</span></p>

      <p class='header'>Medications:</p>
      <p class='data-fill'>@CMED2@</p>

      <p class='header'>Allergies:</p>
      <p class='data-fill'>@ALG@</p>

      <p class='header'>Current problem list:</p>
      <p>Current PCP: <span class='data-fill'>@PCP@</span></p>
      <p><span class='data-fill'>@PROB@</span></p>

      <p class='header'>Past Medical History:</p>
      <p class='data-fill'>@MEDICALHX@</p>
      <p class='data-fill'>@SURGICALHX@</p>

      <p class='header'>Medical Review of Systems:</p>
      <p>*** (if performed)</p>

      <p class='header'>OBJECTIVE</p>

      <p class='header'>Examination:</p>
      <p>Constitutional:</p>
      <p class='data-fill'>@VS@</p>

      <p class='header'>Mental Status Exam:</p>
      <p class='data-fill'>@FLOW(4264:LAST)@</p>
      <p class='data-fill'>@FLOW(304600070:LAST)@</p>
      <p class='data-fill'>@FLOW(304600077:LAST)@</p>

      <p class='header'>Musculoskeletal Examination:</p>
      <p><span class='smart-list'><b>{PSY PHYS EXAM MUSCULOSKELETAL:2103440865}</b><br/> (-Gait and station normal <br/>
                                                                                          -No tremor <br/>
                                                                                          -station <br/>
                                                                                          -gait tremor <br/>
                                                                                          -cog wheeling <br/>
                                                                                          -other parkinson's symptoms <br/>
                                                                                          -dystonia <br/>
                                                                                          -akathisia <br/>
                                                                                          -rabbit syndrome <br/>
                                                                                          -tardive dyskinesia <br/>
                                                                                          -Gait and station abnormal: *** <br/>
                                                                                          -No kyphosis <br/>
                                                                                          -Kyphosis <br/>
                                                                                          -No scoliosis <br/>
                                                                                          -Scoliosis <br/>
                                                                                          -Muscle mass normal <br/>
                                                                                          -Muscle mass diminished: *** <br/>
                                                                                          -Other ***)</span></p>

      <p class='header'>Additional neurologic/physical examination (not included above):</p>
      <p>Neurologic examination:<span class='smart-list'><b>{Exam; neuro:17854}</b> (non-editable currently)</span></p>

      <p class='header'>Rating Scales:</p>
      <p><span class='smart-list'><b>{RATINGS SCALES:2103440999}</b> (non-editable currently)</span></p>
      <p class='data-fill'>@REVFS(1082,1083,1087,1088,1089,1091,1100,1101,1093,1094:1:1:0:0)@</p>

      <p class='header'>Laboratory Data:</p>
      <p>Reference ranges reflect adult normative values.</p>
      <p class='data-fill'>@LASTLABG(30D,1)@</p>

      <p class='header'>Metabolic Monitoring Data:</p>
      <p>Reference ranges reflect adult normative values.</p>
      <p><span class='smart-list'><b>{UCH AMB PSY METABOLIC MONITORING:2103440211}</b>(1. Yes {UCH AMB PSY METABOLIC MONITORING:TXT,2103440212} 2. No)</span></p>

      <p><span class='smart-list'><b>{TREATMENT PLAN MED NEC:2103007000}</b> <br/>(-Treatment is required to relieve persistent symptoms.<br/>
                                                                                   -Treatment is required to improve functional capacity at work, school, family life, interpersonal realtions, social interaction, and/or use of free time.<br/>
                                                                                   -Treatment is required to address a specific psychiatric problem. <br/>
                                                                                   -Psychotherapy is necessary to address symptoms, functioning, or specific problem. <br/>
                                                                                   -Medication management is required to address specific symptoms, functioning or specific problem. <br/>
                                                                                   -Chronic psychiatric disability requires regular monitoring of clinical status and or chronic medication maintenance.)</span></p>

      <p class='data-fill'>@MEMD@</p>


      <p class='header'>Complexity of Medical Decision Making (need 2/3):</p>
      <p>Problem points: The number of problem points for this visit is *** (sum of problem points above).</p>
      <p>Data points: The number of data points reviewed for this visit is ***.</p>
      <p>Risk: The overall risk for this visit is <span class='smart-list'><b>{PSY UCH OP MIN LOW MOD HIGH:2103440924}</b> (1. Minimal 2. Low 3. Moderate 4. High 5. N/A)</span> (highest of the three risk levels selected below).</p>
      <p>Educational note: The assessment of risk is based on the risk related to the disease process anticipated between the present encounter and the next encounter. Refer to Table of Risk to complete the items below.</p>
      <p>            -  The risk of this visit’s presenting problems is <span class='smart-list'><b>{PSY UCH OP MIN LOW MOD HIGH:2103440924}</b> (1. Minimal 2. Low 3. Moderate 4. High 5. N/A)</span>.</p>
      <p>            -  The risk of diagnostic procedures is <span class='smart-list'><b>{PSY UCH OP MIN LOW MOD HIGH:2103440924}</b> (1. Minimal 2. Low 3. Moderate 4. High 5. N/A)</span>.</p>
      <p>            -  The risk of management options selected is <span class='smart-list'><b>{PSY UCH OP MIN LOW MOD HIGH:2103440924}</b> (1. Minimal 2. Low 3. Moderate 4. High 5. N/A)</span>.</p>

<p>See chart at end of note to determine Complexity of Medical Decision Making.</p>

<p><em>To clinician:</em></p>
<p>Complexity of Medical Decision Making Chart</p>
<table>
  <tr>
    <th rowspan="5">2/3 elements must be or exceeded:</th>
    <th>Problem Points</th>
    <th>Data Points</th>
    <th>Risk of Management Options</th>
    <th>Complexity of Medical Decision Making</th>
  </tr>
  <tr>
    <td>0-1</td>
    <td>0-1</td>
    <td>Minimal</td>
    <td>Straightforward</td>
  </tr>
  <tr>
    <td>2</td>
    <td>2</td>
    <td>Low</td>
    <td>Low</td>
  </tr>
  <tr>
    <td>3</td>
    <td>3</td>
    <td>Moderate</td>
    <td>Moderate</td>
  </tr>
  <tr>
    <td>4</td>
    <td>4</td>
    <td>High</td>
    <td>High</td>
  </tr>
</table>


    </div>
    <p>By: University of Colorado Health (Lucy)  </p>
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
      axios.post('/api/curates/psych-prog-note-child-lucy', {
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
