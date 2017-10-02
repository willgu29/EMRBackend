import { Router } from 'express'
import mongoose from 'mongoose'
import axios from 'axios'
const router = Router()

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var DrewParkSchema = new Schema({
    process:      String,
    displayType:  String,
    codePath:     String //url to GCS txt file with html code (not div wrapped)
}, { timestamps: { createdAt: 'createdAt' } });

var DrewPark = mongoose.model('drewpark', DrewParkSchema)


/* GET object listing. */
router.get('/drewpark', function (req, res, next) {
  DrewPark.find({},{}, { sort: { 'createdAt' : -1 } }, function (err, objects) {
    if (err) {return res.sendStatus(404)}
    res.json(objects)
  })
})

router.get('/drewpark/today', function (req, res, next) {

  DrewPark.findOne({}, {}, { sort: { 'createdAt' : -1 } }, function(err, object) {
    if (err) {return res.sendStatus(404)}
    res.json(object)
  });
})

router.get('/drewpark/test', function (req, res, next) {
  var newObject = new DrewPark()
  newObject.process = 'none'
  newObject.displayType = 'none'
  newObject.codePath = ''
  newObject.save(function (err, object) {
    if (err) {return res.sendStatus(500)}
      res.json(object)
  })

})

/* GET object by ID. */
router.get('/drewpark/:id([a-zA-Z0-9]{20,})', function (req, res, next) {
  var id = req.params.id

  DrewPark.
    findById(id).
    exec(function (err, object) {
      if (object) {
        res.json(object)
      } else {
        res.sendStatus(404)
      }
    })

})


router.get('/drewpark/file/:id', function (req, res, next) {
  const id = req.params.id
  DrewPark.findById(id, function (err, object) {
    if (object) {
      axios.get(object.htmlPath).then(function (response) {
        res.json({'text' : response.data})
      }).catch(function (err) {
        res.sendStatus(404)
      })
    } else {
      res.sendStatus(404)
    }
  });
});

router.post('/drewpark/', function (req, res, next) {

})

export default router
