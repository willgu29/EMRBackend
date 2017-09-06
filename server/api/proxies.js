import { Router } from 'express'
import mongoose from 'mongoose'
import removeStopwordsFrom from '../helpers/stopwords.js'
const router = Router()

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var ProxySchema = new Schema({

    emr:         {type: ObjectId, ref: 'Emr'},
    proxy:       [{type: String, uppercase: true}]
});
var Proxy = mongoose.model('Proxy', ProxySchema)

/* GET emrs listing. */
router.get('/proxies', function (req, res, next) {
  var searchText = req.query.text.toLowerCase();
  var cleanedText = removeStopwordsFrom(searchText).toUpperCase();
  console.log("Cleaned Search: " + cleanedText)
  // Contains the searchText in name field in any array of ProxySchema
  Proxy.
      find({proxy : {$in : [new RegExp(cleanedText, 'i')] } }).
      populate('emr').
      exec(function (err, proxies) {
        if (proxies) {
          var emrs = []
          for (var index in proxies) {
            var emr = proxies[index].emr
            emrs.push(emr);
          }
          res.json(emrs);
        } else {
          res.sendStatus(404)
        }
      });
})

/* GET emr by ID. */
router.get('/proxies/:id', function (req, res, next) {
  const id = req.params.id
  console.log(id)
  Proxy.findById(id, function (err, proxy) {
    if (emr) {
      res.json(proxy);
    } else {
      res.sendStatus(404)
    }
  });
})

export default router
