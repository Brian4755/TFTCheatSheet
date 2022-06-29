import { Router } from 'express'
import * as reviewsCtrl from '../controllers/reviews.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET localhost:3000/reviews
router.get('/', reviewsCtrl.index)

// GET localhost:3000/reviews/new
router.get('/new', isLoggedIn, reviewsCtrl.new)

// POST localhost:3000/reviews
router.post('/', isLoggedIn, reviewsCtrl.create)

// Delete localhost:3000/reviews/:id
router.delete('/:id', isLoggedIn, reviewsCtrl.delete)

// GET localhost:3000/reviews/:id/edit
router.get('/:id/edit', isLoggedIn, reviewsCtrl.edit)

export {
  router
}