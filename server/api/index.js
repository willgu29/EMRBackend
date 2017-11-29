import { Router } from 'express'

import diagnoses from './diagnoses'
import finds from './finds'
import templates from './templates'
import sections from './sections'

const router = Router()

// Add Routes
router.use(diagnoses)
router.use(finds)
router.use(templates)
router.use(sections)

export default router
