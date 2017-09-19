import { Router } from 'express'
import removeStopwordsFrom from '../helpers/stopwords.js'
import isValidEmr from '../helpers/validateEmr.js'
import bodyParser from 'body-parser'
import Proxy from './models/Proxy.js'

const router = Router()



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
            if (isValidEmr(emr)) {
              emrs.push(emr)
            }
          }
          res.json(emrs);
        } else {
          res.sendStatus(404)
        }
      })
})

/* GET emr by ID. */
router.get('/proxies/:id', function (req, res, next) {
  const id = req.params.id
  if (id == 'emr') {
    return next()
  }
  console.log(id)
  Proxy.findById(id, function (err, proxy) {
    if (proxy) {
      res.json(proxy);
    } else {
      res.sendStatus(404)
    }
  });
})

router.get('/proxies/emr/:id', function (req, res, next) {
  const id = req.params.id
  Proxy.findOne({emr : id}).populate('emr').exec(function (err, proxy) {
    if (err) { return res.sendStatus(404) }
    res.json(proxy)
  })
});

var jsonParser = bodyParser.json()

router.post('/proxies', jsonParser, function (req, res, next) {
  if (!req.body) return res.sendStatus(400)
  var proxy = req.body
  var newProxy = new Proxy()
  newProxy.emr = proxy.id.trim()
  newProxy.proxy = proxy.proxy

  newProxy.save(function (err, object) {
    if (err) return res.sendStatus(400)
    res.json(object)
  });
});


export default router
