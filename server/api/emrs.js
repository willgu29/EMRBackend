import { Router } from 'express'

const router = Router()

// Mock Emrs
const emrs = [
  { id: "0", name: 'H&P', short: "inpatient internal medicine",
    author: "Drew Park MD", institution: "UC Irvine Medical Center",
    company: "CPRS", type: "Note Template", fileType: 'txt', filePath: "/notes/hp1.txt"},
  { id: "1", name: 'H&P', short: "inpatient psychiatry wards",
    author: "Priscilla Smith MD", institution: "Long Beach VAMC",
    company: "Quest", type: "Note Template", fileType: 'txt', filePath: "/notes/hp2.txt" },
  { id: "2", name: 'H&P', short: "inpatient general surgery",
    author: "Eric Kuo MD", institution: "LAC+USC Medical Center",
    company: "Cerner", type: "Note Template", fileType: 'txt', filePath: "/notes/hp3.txt" },
  { id: "3", name: "CIWA Protocol", short: "inpatient psychiatry wards",
    author: "", institution: "Long Beach VAMC",
    company:"Cerner", type:"Order", fileType: 'txt', filePath: "/orders/ciwa1.txt"},
  { id: "5", name: "Insulin Sliding Scale", short: "",
    author: "Drew Park MD", institution: "",
    company: "CPRS", type: "Order", fileType: 'pdf', filePath: "/orders/iss1.pdf"},
  { id: "6", name: "Home Oxygen Eval", short: "",
    author: "Drew Park MD", institution: "",
    company: "CPRS", type: "Order", fileType: "pdf", filePath: "/orders/hoe1.pdf"},
  { id: "7", name: "PICC Insertion", short: "",
    author: "Drew Park MD", institution: "",
    company: "CPRS", type: "Order", fileType: "pdf", filePath: "/orders/picci1.pdf"},
  { id: "8", name: "PICC Removal", short: "",
    author: "Drew Park MD", institution: "",
    company: "CPRS", type: "Order", fileType: "pdf", filePath: "/orders/piccr1.pdf"},
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
