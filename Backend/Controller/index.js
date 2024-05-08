const Admin = require('../Model/Admin');
const Employee = require('../Model/Employee');
const jwt = require('jsonwebtoken');
//create new employee
module.exports.newEmployee = async (req,res)=>{
    try{
      //check employee exit 
      let employee = await Employee.findOne({email:req.body.email});
      if(!employee){
    await Employee.create(req.body);
    return res.status(201).json({
        success:true,
        message:"Employee created successfully"
    })
      }
      else{
        return res.status(409).json({
            success:false,
            message:"Employee already Exist"
        })
      }
    }
    catch(error){
        return res.status(500).json({
            message:error.message
        })
    }
}

//create new admin
module.exports.newAdmin = async (req,res)=>{
  try{
     let adminExist = await Admin.findOne({email:req.body.email});
     if(!adminExist){
      await Admin.create(req.body);
      return res.status(201).json({
        success:true,
        message:"admin create successfull"
      });
     }
     else{
      return res.status(409).json({
        success:false,
        message:"admin already exist"
      })
     }
  }
  catch(error){
    return res.status(500).json({
      success:false,
      message:error.message
    })
  }
}

module.exports.verifyAdmin = async (req ,res)=>{
  try{
  //get admin from db
  let admin = await Admin.findOne({email:req.body.email});
  if(admin){
    if(admin.password !== req.body.password ){
      return res.status(403).json({
        success:false,
        message:"Admin Credintials Mismatch!"
      })
    }
    else{
      return res.status(200).json({
        success:true,
        message:"login successfull!",
        data:{
        token:  jwt.sign(admin.toJSON(), process.env.JWT_SECRET_KEY, { expiresIn: '100000' })
        }
      })
    }
  }

  //no match found return 404
  }
  catch(error){
    return res.status(500).json({
      success:false,
      message:error.message
    })
  }
}