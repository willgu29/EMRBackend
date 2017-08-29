import { Router } from 'express'

const router = Router()

// Mock Emrs
const emrs = [
  { id: "0", name: 'H&P', short: "inpatient internal medicine",
    type: "CPRS: Note Template", institution: "UC Irvine Medical Center",
    author: "Drew Park MD"},
  { id: "1", name: 'H&P', short: "inpatient psychiatry wards",
    type: "Quest: Note Template", institution: "Long Beach VAMC",
    author: "Priscilla Smith MD" },
  { id: "2", name: 'H&P', short: "inpatient general surgery",
    type: "Cerner: Note Template", institution: "LAC+USC Medical Center",
    author: "Eric Kuo MD" },
  { id: "3", name: "CIWA Protocol", short: "inpatient psychiatry wards",
    type: "Cerner: Order Set", institution: "Long Beach VAMC",
    author: ""}
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
