import { Router } from 'express'

import users from './users'
import emrs from './emrs'
import proxies from './proxies'
import files from './files'
import curates from './curates'
import bundles from './bundles'

const router = Router()

// Add Routes
router.use(users)
router.use(emrs)
router.use(proxies)
router.use(files)
router.use(curates)
router.use(bundles)

export default router
