const express = require('express');
const mongoose = require('mongoose');
const podyParser=require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const url = 'mongodb+srv://admin:admin@cluster0.3mmentt.mongodb.net/main?retryWrites=true&w=majority';
const categoryData=require('./models/categoryModel');
const productData=require('./models/product');
app.use(podyParser.urlencoded({extended:true}));
app.use(podyParser.json());
mongoose.connect(url).then(() => {
    console.log('connected to database');
}).catch(() => {
    console.log('error');
});
/////handle cors
app.use( (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // This means to serve the request no matter where it is coming from
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, X-Auth-Token, Content-Type, Accept, Authorization');  // This means that the request may these headers in it, and it is okay and will still be allowed
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
    next();
  });
//////////////
app.get('/products',(req,res)=>{
    const {query}=req;
    productData.find(query).then((found)=>{
        res.json(found);
    }).catch((error=>{
        console.log(error);
    }))

});
app.post('/products',(req,res)=>{
    const newProduct=new data(req.body);
    res.json(newProduct);
    newProduct.save().then(success=>{
        console.log('products added successfully')
    }).catch(error=>{
        console.log(error);
    })
})
.get('/categories', (req, res) => {
    categoryData.find({}).then((found)=>{
    res.json(found);
   }).catch((error)=>{
    res.send(error);
   })
}).get('/products',(req,res)=>{
    productData.find({}).then((found)=>{
        res.json(found);
       }).catch((error)=>{
        res.send(error);
       })
});

app.get('/products/:productsId',(req,res)=>{
    productData.findById(req.params.productsId).then((found)=>{
        res.json(found);
       }).catch((error)=>{
        res.send(error);
       })
}).put('/products/:productId',(req,res)=>{
    productData.findById(req.params.productId).then((found)=>{
        found.name = req.body.name;
        found.price = req.body.price;
        found.quantity = req.body.quantity;
        found.imageUrl = req.body.imageUrl;
        found.categoryId=req.body.categoryId;
        res.json(found);
        found.save();
    }).catch((error)=>{
        console.log(error);
    })
});
app. listen(port, () => {
    console.log('app running at port:' + port);
})