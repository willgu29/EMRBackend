<template>
    <img class="info-button" src="~/assets/img/infoButton.png" v-on:click="expand" />
</template>

<style>
  .info-button {
    height: 20px;
    width: 20px;
    margin-left: 5px;
  }
</style>

<script>
export default {
  name: 'infoButton',
  data () {
    return {
      steps: ['1. Test', '2. Test', '3. Test']
    }
  },
  methods: {
    expand: function () {
      var instructionSet = ''
      console.log(this.steps)
      for (const index in this.steps) {
        const step = this.steps[index]
        instructionSet = instructionSet + step + '\n'
      }
      alert(instructionSet)
    }
  }
}
</script>
