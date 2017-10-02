<template>
  <div ref='html' id='html' class='html-container'>
  </div>
</template>

<style>
.patient {
  font-size: 24px;
  margin-top: 20px;
  color: #6093e5;
}
li {
  margin-bottom: 10px;
}
table {
  border: 2px solid #6093e5;;
  border-radius: 3px;
  background-color: #fff;
}

th {
  background-color: #6093e5;;
  color: rgba(255,255,255,0.66);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

td {
  background-color: #f9f9f9;
}

th, td {
  min-width: 100px;
  padding: 10px 20px;
}
</style>

<script>
export default {
  props: ['codePath'],
  name: 'htmlView',
  mounted () {
    console.log(this)
    if (this.codePath) {
      const script = document.createElement('script')
      script.setAttribute('type', 'text/javascript')
      script.setAttribute('src', this.codePath)
      this.$refs.html.appendChild(script)
    }
  }
}
</script>
