import { Router } from 'express'
import mongoose from 'mongoose'
import Diagnosis from './models/Diagnosis'
const router = Router()

/* GET users listing. */
router.get('/diagnoses', function (req, res, next) {
  Diagnosis.
      find({}).
      exec(function (err, diagnoses) {
        if (diagnoses) {
          res.json(diagnoses);
        } else {
          res.sendStatus(404)
        }
      })
})

/* GET user by ID. */
router.get('/diagnoses/:id', function (req, res, next) {
  const id = req.params.id
  Diagnosis.
    findById(id).
    exec(function (err, diagnosis) {
      if (bundles) {
        res.json(diagnosis)
      } else {
        res.sendStatus(404)
      }
    })
})

export default router
