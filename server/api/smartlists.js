import { Router } from 'express'
import mongoose from 'mongoose'

const router = Router()

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var SmartListSchema = new Schema({
    name:     String,
    items:    [String]
});

var SmartList = mongoose.model('smartList', SmartListSchema)


/* GET macros listing. */
router.get('/smartlists', function (req, res, next) {
  const cleanedText = req.query.text.toUpperCase()

  var get = Macro.find({domains : {$in : [new RegExp(cleanedText, 'i')] } })
  get.exec(function (err, macros) {
    if (macros) { return res.json(macros) }
    return res.sendStatus(404)
  })
})


/* GET macro by ID. */
router.get('/smartlists/:id([a-zA-Z0-9]{20,})', function (req, res, next) {
  var id = req.params.id

  SmartList.
    findById(id).
    exec(function (err, smartlist) {
      if (smartlist) {
        var html = '<h1>' + smartlist.name + '</h1>'
        for (var i = 0; i < smartlist.items.length; i++) {
          var item = smartlist.items[i]
          var newString = (i + 1) + '.' + ' ' + item
          html = html +  '<p>' + newString + '</p>'
        }

        res.send(html)
      } else {
        res.sendStatus(404)
      }
    })

})

export default router
