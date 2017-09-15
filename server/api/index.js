import { Router } from 'express'

import users from './users'
import emrs from './emrs'
import proxies from './proxies'
import files from './files'


const router = Router()

// Add Routes
router.use(users)
router.use(emrs)
router.use(proxies)
router.use(files)

export default router
