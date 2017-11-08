<template>
  <div>
    <ul ref='messages' class="messages">
      <li class="message" v-for="message in messages"><i :title="message.date">{{ message.date.split('T')[1].slice(0, -2) }}</i>: {{ message.text }}</li>
    </ul>
    <form class='chat-input' v-on:submit.stop.prevent="onSubmit">
      <input class='form-field' name="text" type="text" placeholder="Type a message" autocomplete="off" v-model="message" />
      <input class='submit-button'  type="submit" value="send" />
    </form>
  </div>

</template>

<script>
import socket from '~/plugins/socket.io.js'

export default {
  validate ({ params, query }) {
    console.log(query)
    if (query.user === 'will' && query.pw === 'toocool2') {
      return true
    } else {
      return false
    }
  },
  head () {
    return {
      title: 'Admin: EMR Worx Chat'
    }
  },
  data () {
    return {
      messages: [],
      message: ''
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
    }
  }
}
</script>

<style scoped>

</style>
