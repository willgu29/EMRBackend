import { Router } from 'express'

import users from './users'
import emrs from './emrs'
import proxies from './proxies'
import curates from './curates'
import bundles from './bundles'
import macros from './macros'
import drewpark from './drewpark'
import smartlists from './smartlists'
const router = Router()

// Add Routes
router.use(users)
router.use(emrs)
router.use(proxies)
router.use(curates)
router.use(bundles)
router.use(macros)
router.use(drewpark)
router.use(smartlists)

export default router
