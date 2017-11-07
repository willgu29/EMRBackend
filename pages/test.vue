<template>
  <section class="main-container">
    <div class='grid-container'>
      <div class='grid-2'>
        <h1 class='chat-title'>Find a note template</h1>
        <div class='chat'>
          <p class='text explainer'>Tell us what you're looking for</p>
          <form class='chat-input' v-on:submit.stop.prevent="onSubmit">
            <input class='form-field' name="text" type="text" placeholder="Type a message" v-model="message" />
            <input class='submit-button'  type="submit" value="send" />
          </form>
        </div>
      </div>
      <div class='grid-small'>
        <h1 class='quick-start-title'>Quick Start</h1>
        <div class='quick-display'>
          <ul class='list'>
            <h3>Note Templates</h3>
            <ul>
              <li>Psychiatry</li>
              <li>Internal Medicine</li>
              <li>Surgery</li>
            </ul>
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
      title: 'EMR Worx',
      meta: [
        {
          hid: `keywords`,
          name: 'keywords',
          keywords: 'emr, worx, emrworx, note templates'
        }
      ]
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
h3 {
  margin-bottom: 5px;
}
.list {
  list-style: none;
  text-align: left;
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
  margin: 0px 40px 60px 20px;
}



.chat-title {
  text-align: left;
  margin: 60px 0px 10px 0px;
}
.text {
  margin: 20px;
}
.explainer {
  text-align: center;
  color: #b2b2b2;
}
.self {
  text-align: right;
}
.bot {
  text-align: left;
}
.chat {
  min-height: 250px;
  min-width: 300px;
  /*max-width: 500px;*/
  border-style: solid;
  border-width: 1px;
}
.chat-input {
  margin-left: 5px;
  margin-bottom: 5px;
  position: absolute;
  height: 30px;
  bottom: 0;
  right: 0;
  left: 0;
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
  justify-content: space-between;
}
.grid-2 {
  margin-left: 60px;
  position: relative;
  width: 60%;
}
.grid-small {
  width: 40%;
}
</style>
