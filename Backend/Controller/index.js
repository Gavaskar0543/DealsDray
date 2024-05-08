const Employee = require('../Model/Employee');

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