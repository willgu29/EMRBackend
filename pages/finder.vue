<template>
  <section class="finder-container">
    <h2>EMR Worx Demo</h2>
    <div class='conversation-box'>
      <p class='bot-text'>{{conversation[0]}}</p> <br />
      <p class='input-text'>{{text}}</p>
    </div>
  </section>
</template>

<script>
export default {
  head () {
    return {
      title: 'EMR Worx Demo'
    }
  },
  data () {
    return {
      conversation: [
        'Hello Dr. uh...',
        'Right! Dr. <name>, welcome to EMR Worx. What speciality are you in? (Internal Medicine, Psychiatry, Family Practice, etc.)',
        'Okay, let me pull up a few note templates.'
      ],
      text: 'Doctor\'s input...'
    }
  }
}
</script>

<style scoped>
.finder-container {
  text-align: center;
}
.conversation-box {
  margin: 120px;
}
.bot-text {
  float: left;
}
.input-text {
  float: right;
}
</style>
