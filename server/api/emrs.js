import { Router } from 'express'

const router = Router()

// Mock Emrs
const emrs = [
  { id: "0", name: 'H&P', short: "short", description: "description text", author: "Drew Park MD"},
  { id: "1", name: 'H&P', short: "short", description: "description text", author: "Priscilla Smith MD" },
  { id: "2", name: 'H&P', short: "short", description: "description text", author: "Eric Kuo MD" },
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
