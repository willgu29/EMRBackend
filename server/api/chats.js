import { Router } from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import axios from 'axios'

const router = Router()

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var ChatSchema = new Schema({
  name:         String,
  message:      String
}, { timestamps: { createdAt: 'createdAt' } });

var Chat = mongoose.model('Chat', ChatSchema)


/* GET emrs listing. */
router.get('/chats/', function (req, res, next) {
  var io = require('../helpers/io').io();


  io.of('/').clients((error, clients) => {
    if (error) throw error;
    console.log(clients);
  });
  // var users = io.of('/')
  // users.on('connection', function(socket){
  //     socket.on ...
  // })

  res.json('ffff')
});

var jsonParser = bodyParser.json()


router.post('/chats/', jsonParser, function (req, res, next) {
  if (!req.body) return res.sendStatus(400)
  var chat = req.body
  var newChat = new Chat()
  newChat.name = chat.name.trim()
  newChat.message = chat.text.trim()

  newChat.save(function (err, object) {
    if (err) return res.sendStatus(400)
    res.json(object)
  });
})




export default router
