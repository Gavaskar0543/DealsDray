const express = require('express');
const router = express.Router();
const passport = require('passport');
const employeeController = require('../../../../Controller/index');

router.post('/new',passport.authenticate('jwt',{session:false}),employeeController.newEmployee);

module.exports = router;