import { Router } from 'express'
import * as reviewsCtrl from '../controllers/reviews.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET localhost:3000/reviews
router.get('/', reviewsCtrl.index)

// POST localhost:3000/reviews
router.post('/', isLoggedIn, reviewsCtrl.create)

export {
  router
}