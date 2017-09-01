<template>
  <div>
    <my-header />
    <nuxt/>
  </div>
</template>

<script>
import MyHeader from '~/components/Header.vue'

export default {
  components: {
    MyHeader
  }
}
</script>

<style>
h1, h2 {
  font-weight: normal;
}
.search-container
{
  margin: 0;
  width: 100%;
  padding: 20px 0;
  text-align: left;
}

.button, .button:visited
{
  display: inline-block;
  color: black;
  letter-spacing: 1px;
  background-color: #fff;
  border: 2px solid #000;
  text-decoration: none;
  text-transform: uppercase;
  padding: 15px 45px;
}

.button:hover, .button:focus
{
  color: #fff;
  background-color: #000;
}

.title
{
  color: #000;
  font-weight: 300;
  font-size: 2.5em;
  margin: 0;
}
a {
  text-decoration: none;
}
</style>
