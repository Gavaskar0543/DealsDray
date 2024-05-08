const express = require('express');
require('dotenv').config();
const port = process.env.PORT;
const app =  express();
const db = require('./Config/mongoose')

//middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//router
app.use('/',require('./Router'))
app.listen(port,(err)=>{
    if(err){
        console.log(err.message);
        return;
    }
    console.log(`Server up and running on port ${port}`);
})