import { Router } from 'express'

import users from './users'
import emrs from './emrs'
import proxies from './proxies'
import bundles from './bundles'
import smartlists from './smartlists'
import welcomes from './welcomes'
import visits from './visits'
import chats from './chats'

const router = Router()

// Add Routes
router.use(users)
router.use(emrs)
router.use(proxies)
router.use(bundles)
router.use(smartlists)
router.use(welcomes)
router.use(visits)
router.use(chats)

export default router
