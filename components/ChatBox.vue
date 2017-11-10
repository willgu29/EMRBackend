<template>
  <div class='chat' ref="chat">
    <ul v-show="messages.length" ref='messages' class="messages">
      <li class="message" v-for="message in messages"><i :title="message.date">{{ message.date.split('T')[1].slice(0, -2) }}</i>: {{ message.text }}</li>
    </ul>
    <p v-show="! messages.length" class='text explainer'>Tell us what you're looking for</p>

    <form class='chat-input' v-on:submit.stop.prevent="onSubmit">
      <input class='form-field' name="text" type="text" placeholder="Type a message" autocomplete="off" v-model="message" />
      <input class='submit-button'  type="submit" value="send" />
    </form>
  </div>
</template>

<script>
import socket from '~/plugins/socket.io.js'
export default {
  props: ['name'],
  head () {
    return {
      title: 'EMR Worx Test'
    }
  },
  data () {
    return {
      messages: [],
      message: '',
      username: this.name || this.makeName()
    }
  },
  beforeMount () {
    socket.on('new-message', (message) => {
      this.messages.push(message)
    })
  },
  mounted () {
    this.scrollToBottom()
  },
  methods: {
    sendMessage () {
      if (!this.message.trim()) return
      let message = {
        date: new Date().toJSON(),
        text: this.message.trim()
      }
      this.messages.push(message)
      this.message = ''
      socket.emit('send-message', message)
    },
    onSubmit: function () {
      this.sendMessage()
    },
    scrollToBottom () {
      this.$nextTick(() => {
        this.$refs.messages.scrollTop = this.$refs.messages.scrollHeight
      })
    },
    makeId: function () {
      var text = ''
      var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

      for (var i = 0; i < 5; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
      }
      return text
    },
    makeName: function () {
      var names = ['Silly Frog', 'Doctor 1', 'Doctor 2', 'Doctor 3']
      return names[Math.floor(Math.random() * names.length)]
    }
  }
}
</script>

<style>
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
  overflow: auto;
  max-height: 500px;
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
</style>
