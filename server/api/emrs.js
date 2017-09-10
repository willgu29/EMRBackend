import { Router } from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import isValidEmr from '../helpers/validateEmr.js'

const router = Router()

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var EmrSchema = new Schema({
    name:        String,
    description: {
      short:       String,
      category:    String,
      domain:      String,
    },
    author: {
      name:         String,
      institution:  String,
      degree:       String,
    },
    program: {
      name:         String,
      version:      String,
    },
    type:        String,
    fileType:    String,
    filePath:    String
});
var Emr = mongoose.model('Emr', EmrSchema)

/* GET emrs listing. */
router.get('/emrs', function (req, res, next) {

  var searchText = req.query.text;
  // Contains the searchText in name field
  Emr.find({"name" : {"$regex": searchText, "$options": "i"}}, function(err, emrs) {
    res.json(emrs);
  });
})


/* GET emr by ID. */
router.get('/emrs/:id', function (req, res, next) {
  const id = req.params.id
  if (id == 'validate') {
    return next()
  }
  console.log(id)
  Emr.findById(id, function (err, emr) {
    if (emr) {
      res.json(emr);
    } else {
      res.sendStatus(404)
    }
  });
})


router.get('/emrs/validate', function (req, res, next) {
  Emr.find({}, function (err, emrs) {
    if (err) return res.sendStatus(400)

    var list = []
    for (var emr of emrs) {
      if (isValidEmr(emr)) {
        var validate = emr.id + " VALID"
        list.push(validate)
      } else {
        var validate = emr.id + " INVALID"
        list.push(validate)
      }
    }
    res.json(list)
  });
});
var jsonParser = bodyParser.json()


router.post('/emrs', jsonParser, function (req, res, next) {
  if (!req.body) return res.sendStatus(400)
  var emr = req.body
  var newEmr = new Emr()
  newEmr.name = emr.name.trim()
  newEmr.description.short = emr.description.short.trim()
  newEmr.description.category = emr.description.category.trim()
  newEmr.description.domain = emr.description.domain.trim()
  newEmr.author.name = emr.author.name.trim()
  newEmr.author.institution = emr.author.institution.trim()
  newEmr.author.degree = emr.author.degree.trim()
  newEmr.program.name = emr.program.name.trim()
  newEmr.program.version = emr.program.version.trim()
  newEmr.type = emr.type.trim()
  newEmr.fileType = emr.fileType.trim()
  newEmr.filePath = emr.filePath.trim()

  newEmr.save(function (err, object) {
    if (err) return res.sendStatus(400)
    res.json(object)
  });

});



export default router
