const Model = require('../models/article')

class Article {

    static findAll(req,res){
        Model.find({}).populate('author').exec((err,rows) => {
            if(err){
                res.status(500).json({message : err})
            } else {
                res.status(200).json({message : 'this is article list',data : rows})
            }
        })
    }

    static add(req,res){
        if(!req.cloudStoragePublicUrl){
            return res.status(403).json({message:'harus adaa gambar pak'})
        }
        let obj = {
            author : req.user._id,
            title : req.body.title,
            description :req.body.description,
            image : req.cloudStoragePublicUrl,
            content : req.body.content
        }
        Model.create(obj,(err,rows)=>{
            if(err){
                res.status(500).json({message:err})
            } else {
                res.status(200).json({message : 'data has been created',data : rows})
            }
        })
    }

    static remove(req,res){
        Model.findByIdAndRemove(req.params.id,(err,rows)=>{
            if(err){
                res.status(500).json({message:err})
            } else {
                res.status(200).json({message : 'data has been deleted',data : rows})
            }
        })
    }

    static update(req,res){

        let obj = {
            title : req.body.title,
            description :req.body.description,
            content : req.body.content
        }
        if(req.file){
            obj.image = req.cloudStoragePublicUrl
        }
        Model.findByIdAndUpdate(req.params.id,obj,{new:true},(err,rows)=>{
            if(err){
                res.status(500).json({message : err})
            } else {
                res.status(200).json({message : 'data has been updated',data : rows})
            }
        })
    }

    static findOne(req,res){
        Model.findById(req.params.id).populate('author').exec((err,rows)=>{
            if(err){
                res.status(500).json({message : err})
            } else {
                res.status(200).json({message : 'data has finded',data : rows})
            }
        })
    }

    static findMyOwn(req, res){
        Model.find({author : req.user._id}).populate('author')
        .then(data =>{
            res.status(200).json({message: 'all articles by this user',data:data})
        })
        .catch(err => console.error(err))
    }
}

module.exports=Article;