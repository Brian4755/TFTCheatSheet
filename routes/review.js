import { Router } from 'express'
import * as reviewCtrl from '../controllers/review.js'

const router = Router()

router.get('/', reviewCtrl.index)


export {
  router
}