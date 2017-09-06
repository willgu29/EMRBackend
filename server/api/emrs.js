import { Router } from 'express'
import mongoose from 'mongoose'
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
  console.log(req.query.text)
  var searchText = req.query.text;

  // Contains the searchText in name field
  Emr.find({"name" : {"$regex": searchText, "$options": "i"}}, function(err, emrs) {
    res.json(emrs);
  });
})

/* GET emr by ID. */
router.get('/emrs/:id', function (req, res, next) {
  const id = req.params.id
  console.log(id)
  Emr.findById(id, function (err, emr) {
    if (emr) {
      res.json(emr);
    } else {
      res.sendStatus(404)
    }
  });
})

export default router
