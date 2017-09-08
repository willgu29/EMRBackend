import { Router } from 'express'

const router = Router()


/* GET users listing. */
router.get('/upload', function (req, res, next) {
  res.json()
})

/* GET user by ID. */
router.get('/upload/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
  if (id >= 0 && id < users.length) {
    res.json(users[id])
  } else {
    res.sendStatus(404)
  }
})

router.post('/upload', function (req, res, next) {

});

export default router
