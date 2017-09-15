import { Router } from 'express'
import PDFDocument from 'pdfkit'
import fs from 'fs'
var doc = new PDFDocument

const router = Router()



/* GET users listing. */
router.get('/files/pdf', function (req, res, next) {
  doc.pipe(fs.createWriteStream('/other/output.pdf'))
  doc.text('Some text with an embedded font!', 100, 100)

  doc.end()
  res.json('test')
})

router.get('/files/txt', function (req, res, next) {

  res.json('txt')
})

/* GET user by ID. */
router.get('/files/pdfs/:id', function (req, res, next) {
  const id = parseInt(req.params.id)

})

export default router