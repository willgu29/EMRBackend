import { Router } from 'express'

import users from './users'
import emrs from './emrs'

const router = Router()

// Add USERS Routes
router.use(users)
router.use(emrs)

export default router
