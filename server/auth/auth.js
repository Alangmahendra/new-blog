const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports={
    isLogin : function(req,res,next){
        jwt.verify(req.headers.authorization,process.env.SECRET_KEY,function(err,decoded){
            if (!err){
                 req.user = decoded
                 next()
            } else {
                res.status(500).json({message:err})
            }
        })
    },

    isAdmin : function(req,res,next){
        let role = req.user.role
        if(role === 'user'){
            res.status(500).json({message:'you need permission from admin'})
        } else{
            res.status(200)
            next()
        }
    },

    isAuthor : function (req, res, next) {
        let author = req.user._id
        if(author == req.body.author){
            next()
        } else {
            res.status(500).json({
                message : 'get out!!!'
            })
        }
    }
}