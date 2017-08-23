import { Router } from 'express'

const router = Router()

// Mock Emrs
const emrs = [
  { name: 'H&P', description: "description text"},
  { name: 'H&P', description: "description text" },
  { name: 'H&P', description: "description text" },
]

/* GET users listing. */
router.get('/emrs', function (req, res, next) {
  res.json(emrs)
})

/* GET user by ID. */
router.get('/emrs/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
  if (id >= 0 && id < emrs.length) {
    res.json(emrs[id])
  } else {
    res.sendStatus(404)
  }
})

export default router
