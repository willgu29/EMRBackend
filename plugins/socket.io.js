import io from 'socket.io-client'

var socket

if (process.env.NODE_ENV !== 'production') {
  socket = io('https://www.emrworx.com')
} else {
  socket = io('http://localhost:3000')
}

export default socket
