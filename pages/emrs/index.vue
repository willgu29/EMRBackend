<template>
  <section class="container">
    <h1>Submit Note Templates and How to's for Orders</h1>
    <div class='checkboxes'>

      <label for="cprs">Note Template</label>
      <input v-on:click="onCheck" class='checkbox' type="checkbox" id="template" value="Note Template" v-model="checkedPrograms">
      <label for="quest">Order</label>
      <input v-on:click="onCheck" class='checkbox' type="checkbox" id="order" value="Order" v-model="checkedPrograms">

    </div>

    <form v-on:submit.prevent="onSubmit">
      <label id="title" v-model="title" autocomplete="off">Title:</label>
      <input type="text" />
      <label>Instructions:</label>
      <textarea id="instructions" v-model="instructions"></textarea>
      <input type='submit' value='submit'/>
    </form>
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
      instructions: '1. \n2. \n3. '
    }
  },
  methods: {
    onSubmit: function () {
      axios.post('/api/pdfs/', {
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
