import { Router } from 'express'
import mongoose from 'mongoose'
import Section from './models/Section.js'
const router = Router()


/* GET users listing. */
router.get('/sections', function (req, res, next) {
  Section.
      find({}).
      populate('diagnosis').
      exec(function (err, sections) {
        if (sections) {
          res.json(sections);
        } else {
          res.sendStatus(404)
        }
      })
})

/* GET user by ID. */
router.get('/sections/:id', function (req, res, next) {
  const id = req.params.id
  Section.
    findById(id).
    populate('diagnosis').
    exec(function (err, section) {
      if (section) {
        res.json(section)
      } else {
        res.sendStatus(404)
      }
    })
})


export default router
