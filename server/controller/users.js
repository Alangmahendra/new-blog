const Model = require('../models/users')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
require('dotenv').config()

class User {

    static signup(req,res){
        bcrypt.genSalt(10, function(err,salt){
            bcrypt.hash(req.body.password,salt, function(err,hash){
                let obj ={
                    username    : req.body.username,
                    password : hash,
                    role     : req.body.role || 'user'
                }
                Model.create(obj,(err,user)=>{
                    if(err){
                        res.status(500).json({message : err})
                    } else {
                        res.status(200).json({message : 'data hs been created', data : user})
                    }
                })
            })
        })
    }


    static signin(req,res){
        Model.findOne({username : req.body.username},(err,user)=>{
            if(err){
                res.status(500).json({message : err})
            } else {
                bcrypt.compare(req.body.password,user.password,(err,rows)=>{
                    if(!err){
                        let payload ={
                            _id : user._id,
                            email : user.username,
                            role : user.role
                        }
                        jwt.sign(payload,process.env.SECRET_KEY,(err,token)=>{
                            if(err){
                                res.status(500).json({message:err.message})
                            } else {
                                res.status(200).json({message:'masuk',token : token})
                            }
                        })
                    }
                })
            }
        })
    }

}
module.exports = User;