const express=require("express")
const nodemon=require("nodemon")

const {Postmodel}=require("../models/post_model")
const post =express.Router()
post.get("/",async(req,res)=>{
    const posts=await Postmodel.find()
    res.send("posts")
})
post.post("/create",async(req,res)=>{
    const posts=req.body
    try{
        const new_post=new Postmodel(posts)
        await new_post.save()
        res.send({"msg":"post created success"})
    }catch(err){
        console.log(err)
        res.send({"err":"something is worng"})
        
    }
})
post.patch("/update/:postID",async(req,res)=>{
    const postID=req.params.postID
    const userID=req.body.userID
    const post=await Postmodel.findOne({_id:postID})
    if(postID!==post.userID){
        res.send("not authorise")
    }
    else{
        await Postmodel.findByIdAndUpdate({_id:postID})
        res.send("post update successfully")
    }
})

post.delete("delete/:postID",async(req,res)=>{
    const postID=req.params.postID
    const userID=req.body.postID
    const post=await Postmodel.findOne({_id:postID})
    if(postID!==post.userID){
        res.send("not authorise")
    }
    else{
        await Postmodel.findByIdAndUpdate({_id:postID})
        res.send("post update successfully")
    }
})
module.exports={
    post
}