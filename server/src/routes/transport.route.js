import { Router } from 'express'
import { getData, } from '../controllers/transport.controller.js'

export const transportRouter = Router()

transportRouter.get('/', getData)
