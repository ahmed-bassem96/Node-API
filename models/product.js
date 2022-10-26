const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: {type: String,required: true},
    price: {type: Number,required: true},
    quantity: {type: Number,required: true},
    imageUrl: {type: String,required: true},
    categoryId: {type: String,required: true},
});
module.exports=new mongoose.model('Product',productSchema);