<template>
  <section class="container">
    <h1>Submit {{this.option}}</h1>
    <div>
      <label for="template">Note Template</label>
      <input class='radio' type="radio" id="template" value="Note Template" v-model="option">
      <label for="order">Order Instructions</label>
      <input class='radio' type="radio" id="order" value="Order Instructions" v-model="option">
    </div>
    <div v-if="this.option == 'Order Instructions'">
      <form v-on:submit.prevent="createPdf">
        <label id="title" v-model="title" autocomplete="off">Title:</label>
        <input type="text" />
        <label>Instructions:</label>
        <textarea id="instructions" v-model="instructions"></textarea>
        <input type='submit' value='submit'/>
      </form>
    </div>
    <div v-else>
      <form v-on:submit.prevent="createTxt">
        <label id="title" v-model="title" autocomplete="off">Title:</label>
        <input type="text" />
        <label>Template:</label>
        <textarea id="template" v-model="template"></textarea>
        <input type='submit' value='submit'/>
      </form>
    </div>

  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  head () {
    return {
      title: 'EMR Worx: Submit'
    }
  },
  data () {
    return {
      title: '',
      instructions: '1. \n2. \n3. ',
      template: '',
      option: 'Order Instructions'
    }
  },
  methods: {
    createPdf: function () {
      axios.post('/api/files/pdf', {
        title: this.title
      }).then((res) => {
        console.log(res.data)
      }).catch((e) => {
        alert(e.response.statusText)
      })
    },
    createTxt: function () {
      axios.post('api/files/txt', {
        title: this.title
      }).then((res) => {
        console.log(res.data)
      }).catch((e) => {
        alert(e.response.statusText)
      })
    }
  }
}
</script>

<style scoped>
h1 {
  margin-bottom: 10px;
}
.radio {
  margin-right: 10px;
  margin-bottom: 30px;
}
textarea {
  width: 400px;
  height: 150px;
  margin-bottom: 10px;
}
.title
{
  margin: 15px 0;
}
.search-bar {
  width: 30%;
  font-size: 20px;
}
form {
  display: inline-grid;
}
</style>
