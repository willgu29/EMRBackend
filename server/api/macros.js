import { Router } from 'express'
import mongoose from 'mongoose'

const router = Router()

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var MacroSchema = new Schema({
    name:     String,
    domains:  [String],
    text:     String
});

var Macro = mongoose.model('Macro', MacroSchema)


/* GET macros listing. */
router.get('/macros', function (req, res, next) {
  const cleanedText = req.query.text.toUpperCase()

  var get = Macro.find({domains : {$in : [new RegExp(cleanedText, 'i')] } }).limit(5)
  get.exec(function (err, macros) {
    if (macros) { return res.json(macros) }
    return res.sendStatus(404)
  })
})

/* GET macro by ID. */
router.get('/macros/:id([a-zA-Z0-9]{20,})', function (req, res, next) {
  var id = req.params.id

  Macro.
    findById(id).
    exec(function (err, macro) {
      if (macro) {
        res.json(macro)
      } else {
        res.sendStatus(404)
      }
    })

})

export default router
