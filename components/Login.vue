<template>
  <div class='login'>
    <form v-on:submit.stop.prevent="loginEmrWorx">
      <input placeholder="login with id" name="login" v-model="login" type="text" />
      <input type="submit" value="login" />
    </form>
  </div>
</template>

<style>
.login {
  float: right;
  margin-right: 10px;
  margin-top: 10px;
}
</style>

<script>
import axios from '~/plugins/axios'

export default {
  name: 'login',
  data () {
    return {
      login: ''
    }
  },
  methods: {
    loginEmrWorx: function () {
      axios.get('/api/users/login?text=' + this.login)
        .then(function (response) {
          console.log(response)
          window.location.replace('/users/' + response.data._id)
        })
        .catch(function (error) {
          console.log(error)
          alert('No user found')
        })
    }
  }
}
</script>
