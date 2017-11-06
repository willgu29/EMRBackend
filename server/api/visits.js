import { Router } from 'express'
import mongoose from 'mongoose'
import axios from 'axios'
import bodyParser from 'body-parser'
const router = Router()

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var VisitSchema = new Schema({
    url:      String
}, { timestamps: { createdAt: 'createdAt' } });

var Visit = mongoose.model('visit', VisitSchema)


/* GET object listing. */
router.get('/visits', function (req, res, next) {
  Visit.find({},{}, { sort: { 'createdAt' : -1 } }, function (err, objects) {
    if (err) {return res.sendStatus(404)}
    res.json(objects)
  })
})

var jsonParser = bodyParser.json()

router.post('/visits/', jsonParser, function (req, res, next) {
  if (!req.body) return res.sendStatus(400)
  var visit = req.body
  var newVisit = new Visit()
  newVisit.url = visit.url.trim()

  newVisit.save(function (err, object) {
    if (err) return res.sendStatus(400)
    res.json(object)
  });
})

export default router
