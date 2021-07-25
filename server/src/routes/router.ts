import register_contollers from '../controllers/L&R.controller'
import user_contollers from '../controllers/user.private'
import { Express } from 'express'
import authorization from '../middleware/shield.middleware'

// import multer from 'multer'
// const upload = multer()

import upload from '../utils/uploader'


// base routes
export default function (router: Express) {
    router.post('/api/login', register_contollers.login)
    router.post('/api/register', register_contollers.register)
    router.get('/api/logout', register_contollers.logout)


    // private routes
    router.post('/api/user/:userID', authorization, user_contollers.imageUpload)
}