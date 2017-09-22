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
    timesLoggedIn:  {type: Number, default: 0},
    bundles:      [{type: ObjectId, ref: 'Bundle'}],
    institution:    String,
    verified:       {type: Boolean, default: false},

});

// TODO: verify by ip address? Or how to deal with login concerns / sensitive data?
// Better way to login without passwords?
/*
var result = {
                     username: user.username,
                     scope: user.scope,
                     token: Jwt.sign(tokenData, privateKey)
                 };
                */

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

router.get('/users/login', function (req, res, next) {
  var loginCode = req.query.text.toLowerCase();
  User.findOne({"loginCode" : loginCode}, function (err, user) {
    if (user) { return res.json(user) }
    return res.sendStatus(404)
  });
});

/* GET user by ID. */
router.get('/users/:id([a-zA-Z0-9]{20,})', function (req, res, next) {
  var id = req.params.id
  console.log("User id: " + id)

  User.
    findById(id).
    populate({
      path: 'bundles',
      populate: { path: 'emrs' }
    }).
    exec(function (err, user) {
      if (user) {
        res.json(user)
      } else {
        res.sendStatus(404)
      }
    })

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
