<template>
  <section class="container">
    <h1 class="title">
      About
    </h1>
    <p id="about">
      At their conception, EMRs were heralded as the way future healthcare
      providers would improve workflows, catch near-misses, and analyze patient
      and billing data. EMRs are already well under way in achieving many of these goals,
      but their development is sporadic and uncoordinated across and even within healthcare
      organizations. EMR Worx was created to allow individual providers to search, share,
      and rank customizations that their colleagues have built for the benefit of themselves,
      their respective organizations, and, most importantly, patient care. The EMR Worx team
      invites you to share your templates,  macros, best practice advisories and more,
      so that others may apply them.
    </p>

  </section>
</template>

<script>
export default {
  head () {
    return {
      title: 'About EMR Worx',
      meta: [
        {
          hid: `keywords`,
          name: 'keywords',
          keywords: 'about, emr, worx'
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
</style>
