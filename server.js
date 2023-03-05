const express = require('express');
const app=express();
const port=3001;
// import product from './data/product.js';


app.get('/',(req,res)=>{
    res.json([
        {
            message:'povpov'
        }
    ])
})

const products=[
    {
        id: 1,
        name:'povpov'
    }
]


app.get('/product',(req,res)=>{
   res.json(products);
})
app.listen(port,(req,res)=>{
    console.log('server is running'+port)
})