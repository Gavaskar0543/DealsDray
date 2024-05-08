const express = require('express');
const router = express.Router();
const employeeController = require('../../../../Controller/index');
router.get('/check-server-status',(req,res)=>{
    return res.status(200).json({
        message:"ok"
    })
})
router.post('/new',employeeController.newEmployee);

module.exports = router;