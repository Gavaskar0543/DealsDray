const express = require('express');
const router = express.Router();
const employeeController = require('../../../../Controller/index');
router.post('/new',employeeController.newAdmin);
router.post('/verifyadmin',employeeController.verifyAdmin)
module.exports = router;