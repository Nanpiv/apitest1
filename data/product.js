const express=require('express');
const app =express();

const product=[
    {
        id: 1,
        name:'povpov'
    }
]


app.get('/product',(req,res)=>{
   res.json(product);
})