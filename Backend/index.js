const express = require('express');
require('dotenv').config();
const port = process.env.PORT;
const app =  express();
const cors = require('cors')
const passport = require('passport');
const db = require('./Config/mongoose')
const jwtStrategy = require('./Config/passport_jwt');


//middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(passport.initialize());
app.use(cors());

//router
app.use('/',require('./Router'))
app.listen(port,(err)=>{
    if(err){
        console.log(err.message);
        return;
    }
    console.log(`Server up and running on port ${port}`);
})