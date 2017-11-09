<template>
  <div id="container">
    <my-header/>
    <nuxt id="body" />
    <my-footer id="footer" />
  </div>
</template>

<script>
import 'babel-polyfill'
import MyFooter from '~/components/Footer.vue'
import MyHeader from '~/components/Header.vue'
export default {
  components: {
    MyHeader,
    MyFooter
  }
}
</script>

<style>
#container {
   min-height:100%;
   position:relative;
}
#footer {
   position:absolute;
   bottom:0;
   width:100%;
   height:60px;   /* Height of the footer */
   background-color: #efefef;
   border-top: 1px solid #ddd;
}
#body {
  padding-bottom:60px;
}
.container
{
  margin: 0;
  width: 100%;
  padding: 100px 0;
  text-align: center;
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

</style>
