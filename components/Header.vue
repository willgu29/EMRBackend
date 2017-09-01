<template>
  <header>
    <img class="header-logo" width="100" src="~/assets/img/logo.png" v-on:click="home" />
   </header>
</template>

<style>
  .header-logo {
    margin-left: 20px;
    margin-top: 5px;
  }
  header {
    margin-top: 10px;
  }
  a {
    margin-left: 20px;
    margin-right: 10px;
  }
</style>

<script>
export default {
  methods: {
    home: function () {
      this.$router.replace('/')
    }
  },
  head () {
    return {
      title: 'EMR Worx'
    }
  }
}
</script>
