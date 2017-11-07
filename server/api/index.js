import { Router } from 'express'

import users from './users'
import emrs from './emrs'
import proxies from './proxies'
import bundles from './bundles'
import smartlists from './smartlists'
import welcomes from './welcomes'
import visits from './visits'
const router = Router()

// Add Routes
router.use(users)
router.use(emrs)
router.use(proxies)
router.use(bundles)
router.use(smartlists)
router.use(welcomes)
router.use(visits)

export default router
