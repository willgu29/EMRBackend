import { Router } from 'express'
import mongoose from 'mongoose'
import crypto from 'crypto'

const router = Router()

const INST_IRVINE = 'UC Irvine'


var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var UserSchema = new Schema({
    name:           String,
    loginCode:      String,
    timesLoggedIn:  Number,
    favorites:      [{type: ObjectId, ref: 'Emr'}],
    institution:    String,
    verified:       {type: Boolean, default: false}

});

var User = mongoose.model('User', UserSchema)

function createToken(data) {
  const secret = 'iamyoursaltfordays';
  const hash = crypto.createHmac('sha256', secret)
                     .update(data)
                     .digest('hex');
  console.log(hash);
  // Prints:
  //   c0fa1bc00531bd78ef38c628449c5102aeabd49b5dc3a2a516ea6ea959d6658e
  return hash
}




/* GET users listing. */
router.get('/users', function (req, res, next) {
  User.find({}, {loginCode: 0}, function (err, users) {
    res.json(users)
  })
})

/* GET user by ID. */
router.get('/users/:id', function (req, res, next) {
  const id = parseInt(req.params.id)

})

router.post('/users', function (req, res, next) {

})


function requireLogin(req, res, next) {
  if (req.session.loggedIn) {
    next(); // allow the next route to run
  } else {
    // require the user to log in
    res.redirect("/login"); // or render a form, etc.
  }
}

export default router
