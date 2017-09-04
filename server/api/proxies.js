import { Router } from 'express'
import mongoose from 'mongoose'
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
  console.log(req.query.text)
  var searchText = req.query.text.toUpperCase();
  // Contains the searchText in name field
  Proxy.
      find({proxy : {$in : [new RegExp(searchText, 'i')] } }).
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
