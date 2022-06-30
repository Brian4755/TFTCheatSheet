import { Router } from 'express'
import * as championsCtrl from '../controllers/champions.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET localhost:3000/champions/new
router.get('/new', isLoggedIn, championsCtrl.new)

// POST localhost:3000/champions
router.post('/', isLoggedIn, championsCtrl.create)

// DELETE localhost:3000/champions/:id
router.delete('/:id', championsCtrl.delete)

// GET localhost:3000/champions/index
router.get('/', championsCtrl.index)

export {
  router
}