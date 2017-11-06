<template>
  <section class="welcome-container">
    <div class='welcome-header'>
      <h1>Welcome to <img class='logo-welcome' width="150" src="~/assets/img/logo-roboto.svg"/></h1>
      <p>We're currently in beta-testing. <span class='cta' v-on:click="scrollToBottom">Subscribe</span> to get early-access to over 300 note templates across multiple specialities. </p>
      <img class="preview" width="800px" src="~/assets/img/preview-2.png" />
    </div>
    <div class='grid-container'>
      <div class='grid-3'>
        <p>Billing Verified</p>
        <img src="~/assets/img/clipboard.svg" />
        <p class='icon-text'>Rest easy knowing you'll be reimbursed properly. Our notes are verified by a certified AAPC coder/biller for accuracy and throughness.</p>
      </div>
      <div class='grid-3'>
        <p>Finish Faster</p>
        <img width="30px" src="~/assets/img/coffee.svg" />
        <p class='icon-text'>Spend less time writing your notes. Focus on patient care and fill in only the remainder.</p>

      </div>

    </div>
    <div name="subscribe" class='sign-up'>
      <form v-on:submit.stop.prevent="onSubmit">
        <input class='form-field' name="email" type="text" placeholder="email" v-model="email" />
        <input class='form-field' name="speciality" type="text" placeholder="specialty" v-model="specialty" />
        <input class='subscribe'  type="submit" value="subscribe" />
      </form>
    </div>
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  layout: 'landing',
  head () {
    return {
      title: 'EMR Worx'
    }
  },
  data () {
    return {
      email: '',
      specialty: ''
    }
  },
  methods: {
    scrollToBottom: function () {
      window.scrollTo(0, document.body.scrollHeight)
    },
    onSubmit: function (event) {
      if (this.email === '' || this.specialty === '') {
        alert('Please enter an email and specialty then click subscribe.')
        return
      }
      axios.post('/api/welcomes/', {
        email: this.email,
        specialty: this.specialty
      })
        .then((res) => {
          window.location.replace('/subscribe-success')
        })
        .catch((e) => {
          alert(e.response.statusText)
        })
    }
  }
}
</script>

<style scoped>
.cta {
  color: rgb(0, 129, 213);
}
.cta:hover {
  cursor: pointer;
  color:  #0043ff;
}
.icon-text {
    font-size: 14px;
    text-align: left;
    justify-content: center;
    margin: 20px 60px 60px 60px;
}
.sign-up {
  background-color: grey;
}
.form-field {
  height: 30px;
  width: 220px;
  font-size: 16px;
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  margin: 20px;
  padding-left: 10px;
}
.welcome-container {
  text-align: center;
}
.welcome-header {
  margin: 40px;
}
.logo-welcome {
  vertical-align: middle;
  margin-left: 5px;
  margin-bottom: 5px;
}
.welcome-text {
  margin: 0px 60px 60px 120px;
  max-width: 600px;
}
.grid-container {
  display: flex;
}
.grid-3 {
  flex: 1;
  flex-direction: column;
  justify-content: left;
}
.preview {
  border-style: solid;
  border-width: thin;
  text-align: center;
}
.reasons {
  list-style: none;
}
.list-header {
  margin-left: 40px;
}
.subscribe {
  border-style: solid;
  border-radius: 5px;
  border-width: 1px;
  padding: 10px 40px 10px 40px;
  background-color: rgb(0, 129, 213);
  color: white;
  font-size: 16px;
}
.subscribe:hover {
  cursor: pointer;
  background-color: #0043ff;
}
</style>
