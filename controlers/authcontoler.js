
const UserSchema= require("../models/userSchema")


// get all user
const getContacts= async(request,response)=>{
    console.log("poiuytrewq");
    const getuser = await UserSchema.find()
    if (!getuser){
        response.status(404)
        throw new Error("id not found")
    }
    response.status(200).json(getuser)
    
}

// post user
const postContact=async(req,res)=>{
    const {full_name,email,password,conform_password,number} = req.body
    if(!full_name || !email || !password || !conform_password  || !number){
        res.status(400)
        throw new Error("some field is missing")
    }
    const createnewuser = await UserSchema.create({
        full_name,email,password,conform_password,number
    })
    
    res.status(201).json({"msg":{createnewuser}})
}
// get id  user
const getContact=async(request,response)=>{
    const getuserById = await UserSchema.findById(request.params.id)
    if (!getuserById){
        response.status(404)
        throw new Error("id not found")
    }
    response.status(200).json({"msg":getuserById})
    
    
}
// put id  user
const putContact=async(request,response)=>{
    const getuserById = await UserSchema.findByIdAndUpdate(request.params.id,request.body,{new:true})
    if (!getuserById){
        response.status(404)
        throw new Error("id not found")
    }
    response.status(200).json({"msg":getuserById})
}
// delete id user
const deleteContact=async(request,response)=>{
    const getuserById = await UserSchema.findByIdAndDelete(request.params.id)
    if (!getuserById){
        response.status(404)
        throw new Error("id not found")
    }
    response.status(200).json({"msg":getuserById})
}

module.exports = {getContacts,postContact,getContact,putContact,deleteContact}
// module.exports = {getContacts,postContact,getContact,putContact,deleteContact}