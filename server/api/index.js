import { Router } from 'express'

import diagnoses from './diagnoses'

const router = Router()

// Add Routes
router.use(diagnoses)

export default router
