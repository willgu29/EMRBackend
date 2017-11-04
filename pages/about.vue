<template>
  <section class="about-container">
    <div class='flex-2'>
      <h2 class='list-title'>Why use EMR Worx?</h2>
    <ul class='list'>
      <li v-on:click="display(0)" class="about-item" v-bind:class="{ active: isActive[0] }">{{titles[0]}}<img class='arrow' src="~/assets/img/arrow-right.svg" /></li>
      <hr />
      <li v-on:click="display(1)" class="about-item" v-bind:class="{ active: isActive[1] }">{{titles[1]}}<img class='arrow' src="~/assets/img/arrow-right.svg" /></li>
      <hr />
      <li v-on:click="display(2)" class="about-item" v-bind:class="{ active: isActive[2] }">{{titles[2]}}<img class='arrow' src="~/assets/img/arrow-right.svg" /></li>
      <hr />
      <li v-on:click="display(3)" class="about-item" v-bind:class="{ active: isActive[3] }">{{titles[3]}}<img class='arrow' src="~/assets/img/arrow-right.svg" /></li>

    </ul>
    </div>
    <div class='flex-2'>
      <div class='about-text'>
        <h2>{{title}}</h2>
        <div class="explainer" v-html="body"></div>
      </div>
    </div>

  </section>
</template>

<script>
import converter from '~/plugins/showdown.js'
var descriptions = [
  `Better patient care starts with better documentation.

  EMR Worx brings the most essential note templates to your practice so you can spend less time worrying about your notes and more time being a doctor.`,
  `Templates marked with a <img src="https://emrworx.com/public/assets/clipboard.svg" width="20px" /> are verified by a certified AAPC coder and billing specialist.

  We've included recommendations and best-practice guidelines when filling out your notes to make sure diagnoses and procedures are accurately found and your practice is reimbursed properly.`,
  `We know how much time and energy you put into patient care, that's why we've marked our templates with a completion metric to guide you on how much more of the note you'll have to fill out.

  A higher percentage means more of the note is filled out, however, please double check to make sure the information is accurate based upon your patient's specific care needs before you go on a <img src="https://emrworx.com/public/assets/coffee.svg" width="25px" /> break.`,
  '<a class="cta" href="/finder">Click here</a> to find your first note templates!'
]
export default {
  head () {
    return {
      title: 'About EMR Worx',
      meta: [
        {
          hid: `keywords`,
          name: 'keywords',
          keywords: 'about, emr, worx, emrworx, note templates'
        }
      ]
    }
  },
  data () {
    return {
      titles: ['Better Clinical Documentation', 'Billing Verified', 'Finish Faster', 'Get Started'],
      title: 'Better Clinical Documentation',
      body: 'Loading...',
      isActive: [true, false, false, false]
    }
  },
  mounted () {
    converter.setOption('simpleLineBreaks', true)
    var html = converter.makeHtml(descriptions[0])
    this.body = html
  },
  methods: {
    display: function (index) {
      console.log(this.cla)
      this.title = this.titles[index]
      this.isActive = [false, false, false, false]
      this.isActive[index] = true

      converter.setOption('simpleLineBreaks', true)
      var html = converter.makeHtml(descriptions[index])
      this.body = html
    }
  }

}
</script>

<style scoped>
.about-container {
  display: flex;
}
.list {
  width: 350px;
  margin: 0px 60px 60px 120px;
  padding: 0px;
  list-style: none;
  border-radius: 10px;
  border-width: thin;
  border-style: none;
  background-color: rgb(239, 239, 239);
  font-size: 20px;

}
.list-title {
  margin-left: 125px;
  margin-top: 80px;
}
.about-item {
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 20px;
  color: rgb(84, 101, 126);

}
.active {
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 20px;
  color: #0043ff;
}
.about-item:hover {
  color: #0043ff;
  cursor: pointer;
}

.flex-2 {
  display: flex;
  flex-direction: column;
  justify-content: left;
}
.about-text {
  margin-top: 120px;
  line-height: 30px;
}
.explainer {
  width: 500px;
}
.arrow {
  vertical-align: middle;
  width: 15px;
  float: right;
  margin-right: 20px;
}


</style>
