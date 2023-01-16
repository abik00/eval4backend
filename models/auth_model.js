const mongoose=require("mongoose")
const authschema=new mongoose.Schema({
    // name:{type:"string",require:true},
    // email:{type:"string",require:true},
    // gender:{type:"string",require:true},
    // password:{type:"string",require:true},
    name:String,
    email:String,
    gender:String,
    password:String
})
const Authmodel=mongoose.model("auth",authschema)

module.exports={
    Authmodel
}