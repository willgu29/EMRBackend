import { Router } from 'express'
import PDFDocument from 'pdfkit'
import fs from 'fs'
var doc = new PDFDocument

const router = Router()


// TODO: Create PDF generator

router.post('/files/pdf', function (req, res, next) {
  res.json('pdf')
})

router.post('/files/txt', function (req, res, next) {
  res.json('txt')
})

/* GET user by ID. */
router.get('/files/pdfs/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
})

export default router
