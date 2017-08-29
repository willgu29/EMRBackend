import { Router } from 'express'

import users from './users'
import emrs from './emrs'
import test from './test'

const router = Router()

// Add USERS Routes
router.use(users)
router.use(emrs)
router.use(test)

export default router
