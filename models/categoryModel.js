const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});
// const productSchema = new mongoose.Schema({
//     name: {type: String,required: true},
//     price: {type: Number,required: true},
//     quantity: {type: Number,required: true},
//     imageUrl: {type: String,required: true},
//     categoryId: {type: String,required: true},
// });
module.exports=new mongoose.model('Category',categorySchema);