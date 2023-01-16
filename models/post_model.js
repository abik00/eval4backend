const mongoose=require("mongoose")
const postschema=new mongoose.Schema({
   
    title:String,
    body:String,
    device:String,
 
})
const Postmodel=mongoose.model("post",postschema)

module.exports={
   Postmodel
}