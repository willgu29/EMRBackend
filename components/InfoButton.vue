<template>
    <img class="info-button" src="~/assets/img/infoButton.png" v-on:click="expand" />
</template>

<style>
  .info-button {
    height: 20px;
    width: 20px;
    margin-left: 5px;
    vertical-align: middle;
  }
</style>

<script>
var infoFilePath = '/other/howToTemplate.pdf'
export default {
  name: 'infoButton',
  props: ['filePath'],
  data () {
    return {
      path: this.filePath || infoFilePath
    }
  },
  methods: {
    expand: function () {
      window.open(this.path, '_blank')
    }
  }
}
</script>
