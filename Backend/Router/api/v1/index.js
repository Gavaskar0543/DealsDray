const express = require('express');
const router = express.Router();
router.get('/check-server-status',(req,res)=>{
    return res.status(200).json({
        message:"ok"
    })
})
//admin route
router.use('/admin',require('./admin'));
//employee route
router.use('/employee',require('./employee'));

module.exports = router;