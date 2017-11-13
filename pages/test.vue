<template>
  <section class="main-container">
    <div class='grid-container'>
      <div class='grid-2'>
        <h1 class='chat-title'>Find a note template</h1>
        <chat-box />
      </div>
      <div class='grid-small'>
        <h1 class='quick-start-title'>Quick Links</h1>
        <note-selector />
      </div>
    </div>
    <!-- Mobile Version Not Supported Alert -->
    <div class='width-too-small-alert'>
      <p>EMR Worx is intended for use on a desktop. Please widen your browser window.</p>
    </div>

  </section>
</template>

<script>
import axios from '~/plugins/axios'
import NoteSelector from '~/components/NoteSelector'
import ChatBox from '~/components/ChatBox'
import FieldTip from '~/components/FieldTip'

export default {
  components: {
    NoteSelector,
    ChatBox,
    FieldTip
  },
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
      message: '',
      conversation: []
    }
  },
  methods: {
    onSubmit: function (event) {

    }
  }
}
</script>

<style scoped>
.grid-container {
  margin: 60px;
  box-shadow: 0px 0px 10px #888888;
}
h3 {

}
li {
  line-height: 30px;
}
.list {
  list-style: none;
  text-align: left;
}
.speciality {

}
.quick-start-title {
  text-align: left;
  margin-left: 10px;
}
.quick-display {
  min-width: 200px;
  max-width: 300px;
}
.chat-title {
  text-align: left;
  margin-left: 20px;
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
}
.chat-input {
  padding-left: 20px;
  position: absolute;
  height: 30px;
  bottom: 0;
  right: 0;
  left: 0;
  box-shadow: 0px 0px 1px #888888;
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
  border-width: 0px;
}
.grid-container {
  display: flex;
  justify-content: space-between;
}
.grid-2 {
  position: relative;
  width: 65%;
}
.grid-small {
  width: 35%;
  background-color: RGB(0, 129, 213);
}

.width-too-small-alert {
  display: none;
}
@media (max-width: 710px) {
  .grid-container {
    display: none;
  }
  .width-too-small-alert {
    display: inline;
    text-align: center;
  }
}


</style>
