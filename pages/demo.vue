<template>
  <section class="container">
    <h1>EMR Worx Demo</h1>
    <video id="demo-video" src="/other/EMRWorx_Demo.mp4" controls controlsList="nodownload" ></video>
    <br />
    <nuxt-link class='btn' :to="{ name: 'index'}">
      Start Searching
    </nuxt-link>
  </section>
</template>

<script>
export default {
  layout: 'landing',
  head () {
    return {
      title: 'EMR Worx Demo'
    }
  }
}
</script>

<style scoped>
#demo-video {
  width: 720px;
  margin-bottom: 20px;
}
.btn {
  font-family: 'Lato', 'Helvetica', 'Arial', 'sans-serif';
  letter-spacing: 2px;
  text-transform: uppercase;
  background-color: #6093e5;
  color: white;
  border: 15px solid #6093e5;
  border-radius: 25px;
  text-align: center;
}
.btn:hover {
  background-color: #0a65ff;
  border: 15px solid #0a65ff;

}
</style>
