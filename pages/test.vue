<template>
  <section class="main-container">
    <div class='grid-container'>
      <div class='grid-2'>
        <h1 class='chat-title'>Find a note template</h1>
        <div class='chat'>
          <p class='text self'>Test</p>
          <p class='text bot'>test</p>
          <form class='chat-input' v-on:submit.stop.prevent="onSubmit">
            <input class='form-field' name="text" type="text" placeholder="Type a message" v-model="message" />
            <input class='submit-button'  type="submit" value="send" />
          </form>
        </div>
      </div>
      <div class='grid-2'>
        <h1 class='quick-start-title'>Quick Start</h1>
        <div class='quick-display'>
          <ul class='list'>
            <li>Psychiatry</li>
            <li>Internal Medicine</li>
            <li>Surgery</li>
          </ul>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  asyncData ({ params, error }) {
    console.log(params)
    return axios.get('/api/users/')
      .then((res) => {
        return { users: res.data }
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'Users not found' })
      })
  },
  head () {
    return {
      title: 'EMR Worx'
    }
  },
  data () {
    return {
      message: ''
    }
  },
  methods: {
    onSubmit: function (event) {

    }
  }
}
</script>

<style scoped>
.list {
  list-style: none;
  text-align: left;
}
h1 {
  font-size: 30px;

}
.chat-title {
  text-align: left;
  margin: 60px 20px 10px 100px;
}
.quick-start-title {
  text-align: left;
  margin: 60px 60px 10px 20px;
}
.quick-display {
  min-width: 200px;
  max-width: 300px;
  border-style: solid;
  border-radius: 5px;
  border-width: 1px;
  margin: 0px 60px 60px 20px;
}
.text {
  margin: 20px;
}
.self {
  text-align: right;
}
.bot {
  text-align: left;
}
.chat {
  min-width: 300px;
  max-width: 500px;
  margin: 0px 20px 10px 100px;
  border-style: solid;
  border-width: 1px;
}
.chat-input {
  margin-left: 5px;
  margin-bottom: 5px;
}
.submit-button {
  width: 25%;
  height: 30px;
  border-style: solid;
  border-radius: 5px;
  border-width: 1px;
  margin-left: 5px;
  background-color: rgb(0, 129, 213);
  color: white;
  font-size: 14px;
}
.submit-button:hover {
  cursor: pointer;
  background-color: #0043ff;
}
.form-field {
  height: 30px;
  width: 70%;
  font-size: 16px;
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
}
.grid-container {
  display: flex;
}
.grid-2 {
  flex: 1;
  flex-direction: column;
  justify-content: left;
}
</style>
