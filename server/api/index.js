import { Router } from 'express'

import users from './users'
import emrs from './emrs'
import proxies from './proxies'

const router = Router()

// Add Routes
router.use(users)
router.use(emrs)
router.use(proxies)

export default router
