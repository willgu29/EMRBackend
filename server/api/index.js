import { Router } from 'express'

import users from './users'
import emrs from './emrs'
import proxies from './proxies'
import pdfs from './pdfs'


const router = Router()

// Add Routes
router.use(users)
router.use(emrs)
router.use(proxies)
router.use(pdfs)

export default router
