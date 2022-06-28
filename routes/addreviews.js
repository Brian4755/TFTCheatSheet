import { Router } from 'express'
import * as addreviewsCtrl from '../controllers/addreviews.js'

const router = Router()

// GET localhost:3000/addreviews
router.get('/', addreviewsCtrl.index)

// POST localhost:3000/addreviews
router.post('/', addreviewsCtrl.create)

export {
  router
}