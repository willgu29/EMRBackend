<template>
  <header>
    <img class="header-logo" width="150" src="~/assets/img/logo-roboto.png" v-on:click="home" />
    <nuxt-link class='header-link' to="/about" exact>ABOUT</nuxt-link>
    <nuxt-link class='header-link' to="/contact" exact>CONTACT</nuxt-link>
    <nuxt-link class='header-link' to="/contributors" exact>CONTRIBUTORS</nuxt-link>
    <nuxt-link class='header-link' to="/data-security" exact>DATA SECURITY</nuxt-link>
  </header>
</template>

<style>
  header {
    display: inline-block;
    margin: 20px 20px 20px 40px;
    min-width: 800px;
  }
  .header-logo {
    vertical-align: middle;
    margin-right: 40px;
  }
  .header-link {
    margin: 20px;
    color: #b2b2b2;
    text-decoration: none;
  }
  .header-link:visited {
    color: #b2b2b2;
  }
  .header-link:hover {
    color: #0043ff;
  }
  a.header-link.nuxt-link-exact-active.nuxt-link-active {
    color: #0043ff;
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
