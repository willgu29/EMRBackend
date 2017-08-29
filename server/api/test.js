import { Router } from 'express'
import mongoose from 'mongoose'
const router = Router()


var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var TestSchema = new Schema({
    test      : String
});
var Test = mongoose.model('Test', TestSchema)


/* GET users listing. */
router.get('/test', function (req, res, next) {

  var newTest = new Test()
  newTest.test = "Test"
  newTest.save()
  console.log(newTest)
  res.json(newTest)
})

/* GET user by ID. */
router.get('/test/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
  if (id >= 0 && id < users.length) {
    res.json(users[id])
  } else {
    res.sendStatus(404)
  }
})

export default router
