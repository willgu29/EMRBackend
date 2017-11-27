import { Router } from 'express'
import removeStopwordsFrom from '../helpers/stopwords.js'
import isValidEmr from '../helpers/validateEmr.js'
import bodyParser from 'body-parser'
import Find from './models/Find.js'

const router = Router()

/* GET proxies listing. */
router.get('/finds', function (req, res, next) {

  var searchText = req.query.text.toLowerCase();
  var cleanedText = removeStopwordsFrom(searchText).toUpperCase();
  console.log("Cleaned Search: " + cleanedText)
  // Contains the searchText in name field in any array of ProxySchema
  Find.
      find({proxy : {$in : [new RegExp(cleanedText, 'i')] } }).
      populate({
        path: 'template',
        populate: { path: 'diagnosis' },
        populate: { path: 'sections'}
      }).
      exec(function (err, proxies) {
        if (proxies) {
          var templates = []
          for (var index in proxies) {
            var template = proxies[index].template
              templates.push(template)
            }
          }
          res.json(templates);
        } else {
          res.sendStatus(404)
        }
      })
})

/* GET emr by ID. */
router.get('/find/:id([a-zA-Z0-9]{20,})', function (req, res, next) {
  const id = req.params.id

  console.log(id)
  Find.findById(id, function (err, proxy) {
    if (proxy) {
      res.json(proxy);
    } else {
      res.sendStatus(404)
    }
  });
})

router.get('/find/all', function (req, res, next) {
  Find.
    find({}).
    populate({
      path: 'template',
      populate: { path: 'diagnosis' },
      populate: { path: 'sections'}
    }).
    exec(function (err, proxies) {
      if (proxies) {
        res.json(proxies)
      } else {
        res.sendStatus(404)
      }
    })

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
