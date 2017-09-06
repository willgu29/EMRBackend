<template>
  <section class="container">
    <h1 class="title">
      Submissions
    </h1>
    <h2 id="upload">
      Let's build the next-generation EMR Database.
    </h2>
    <p>Email submissions here: <b><a href="mailto:hello@emrworx.com">hello@emrworx.com</a></b></p>

  </section>
</template>

<script>
export default {
  head () {
    return {
      title: 'Upload to EMR Worx',
      meta: [
        {
          hid: `keywords`,
          name: 'keywords',
          keywords: 'upload, emr, worx'
        }
      ]
    }
  }
}
</script>

<style scoped>
.title
{
  margin: 15px 0;
}
#about {
  margin-left: 100px;
  margin-right: 100px;
  text-align: left;
}

a {
  font-size: 22px;
  margin-left: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  text-decoration: none;
  color: purple;
}
</style>
