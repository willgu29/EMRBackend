import { Router } from 'express'
import mongoose from 'mongoose'

const router = Router()



var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var BundleSchema = new Schema({
    name:      String,
    group:     String,
    keywords:  [String],
    emrs:      [{type: ObjectId, ref: 'Emr'}]

});

var Bundle = mongoose.model('Bundle', BundleSchema)

/* GET users listing. */
router.get('/bundles', function (req, res, next) {
  Bundle.
      find({}).
      populate('emrs').
      exec(function (err, bundles) {
        if (bundles) {
          res.json(bundles);
        } else {
          res.sendStatus(404)
        }
      })
})

/* GET user by ID. */
router.get('/bundles/:id', function (req, res, next) {
  const id = req.params.id
  Bundle.
    findById(id).
    populate('emrs').
    exec(function (err, bundle) {
      if (bundles) {
        res.json(bundle)
      } else {
        res.sendStatus(404)
      }
    })
})


export default router
