const express = require('express');
require('dotenv').config();
const port = process.env.PORT;
const app =  express();




app.listen(port,(err)=>{
    if(err){
        console.log(err.message);
        return;
    }
    console.log(`Server up and running on port ${port}`);
})