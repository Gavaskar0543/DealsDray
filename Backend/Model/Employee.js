const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const AVATAR_PATH = path.join('/Upload/temp');

const EmployeeSchema = new mongoose.Schema({
    employeeId:{
      type:Number,
      required:true,
      unique:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    }
    ,
    gender:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        unique:true,
        required:true
    },
    cource:{
        type:String,
        
    },
    designation:{
        type:String
    }
    ,
    avatar:{
        type:String
    }
},{
    timestamps:true
});
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '..', AVATAR_PATH));
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  EmployeeSchema.static.uploadedAvatar  = multer({ storage: storage }).single('avatar');
  EmployeeSchema.statics.avatarPath = AVATAR_PATH;
const Employee = mongoose.model('Employee',EmployeeSchema);

module.exports = Employee;