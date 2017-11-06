import { Router } from 'express'
import mongoose from 'mongoose'
import axios from 'axios'
import bodyParser from 'body-parser'
const router = Router()

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var WelcomeSchema = new Schema({
    email:      String,
    specialty:  String
}, { timestamps: { createdAt: 'createdAt' } });

var Welcome = mongoose.model('welcome', WelcomeSchema)


/* GET object listing. */
router.get('/welcomes', function (req, res, next) {
  Welcome.find({},{}, { sort: { 'createdAt' : -1 } }, function (err, objects) {
    if (err) {return res.sendStatus(404)}
    res.json(objects)
  })
})

var jsonParser = bodyParser.json()

router.post('/welcomes/', jsonParser, function (req, res, next) {
  if (!req.body) return res.sendStatus(400)
  var welcome = req.body
  var newWelcome = new Welcome()
  newWelcome.email = welcome.email.trim()
  newWelcome.specialty = welcome.specialty.trim()

  newWelcome.save(function (err, object) {
    if (err) return res.sendStatus(400)
    res.json(object)
  });
})

export default router
