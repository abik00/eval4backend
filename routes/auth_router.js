const {Router}=require("express")
const {Authmodel}=require("../models/auth_model")
const jwt=require("jsonwebtoken")
const bcrypt = require('bcrypt');

const user=Router()

user.post("/register",async(req,res)=>{
    const {name,email,password,gender}=req.body

    try{
        bcrypt.hash(password,6,async(err,hash)=>{
            const user=new Authmodel({name,email,password:hash,gender})
            await user.save()
            res.send("registerd")
        })
    }catch(err){
        res.send("error in resgister")

    }

})

user.post("/login",async(req,res)=>{
    const {email,password}=req.body
    try{
        const user=await Authmodel.find({email})
        if(user.length>0){
            const hash_password=user[0].password;
            bcrypt.compare(password, hash_password, function(err, result) {
                if(result){
                    const token=jwt.sign({"userID":user[0]._id},"hush");
                    res.send({"msg":"login successfull","token":token})
                }else{
                    res.send("login failed")
                }
                // result == true
            });

        }
    }catch(err){

    }
    
})

module.exports={
    user
}