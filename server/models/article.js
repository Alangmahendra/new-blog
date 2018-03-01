const mongoose = require('mongoose');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
 
var articleSchema = new Schema({
    author : {
        type : Schema.Types.ObjectId,
        ref : 'User'
    },
    title    : {
        type : String,
},
    description    :  {
        type : String,
},
    image : {
        type : String,
},

    content : {
        type : String,
}
},{timestamps:{}});

let ArticleModel = mongoose.model('Article', articleSchema);
module.exports = ArticleModel;