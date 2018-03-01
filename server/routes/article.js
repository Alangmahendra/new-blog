const express = require('express');
const router = express.Router();
const Article = require('../controller/article')
const auth = require('../auth/auth')
const midle = require('../helper/image')

    router.get('/',Article.findAll)
    router.post('/',auth.isLogin,midle.multer.single('image'),midle.sendUploadToGCS,Article.add)
    router.get('/mine',auth.isLogin,Article.findMyOwn)
    router.delete('/:id',auth.isLogin,Article.remove)
    router.put('/:id',auth.isLogin,midle.multer.single('image'),midle.sendUploadToGCS,Article.update)
    router.get('/:id',Article.findOne)
module.exports=router;