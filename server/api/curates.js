import { Router } from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

const router = Router()


var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var CurateSchema = new Schema({
    meta: String,
    dateCreated: {type: Date, default: Date.now},
    data: {
      //Schema is whatever data there is captured
      blank: String
    }
}, { strict: false });
var Curate = mongoose.model('Curate', CurateSchema)

var jsonParser = bodyParser.json()

//id = name
router.post('/curates/:id', jsonParser, function (req, res, next) {
  if (!req.body) return res.sendStatus(400)
  const id = req.params.id
  var object = req.body
  var newCurate = new Curate()
  newCurate.meta = id
  newCurate.data = object
  newCurate.save(function (err, object) {
    if (err) {
      return res.sendStatus(400)
    }
    res.json(object)
  });
})




export default router
