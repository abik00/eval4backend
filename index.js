const express=require("express")
const {connection}=require("./config/db")
const app=express()
const {user}=require("./routes/auth_router")
const { post } = require("./routes/post_router")
const cors=require("cors")


app.get("/",(req,res)=>{
    res.send("welcome")
})

// app.use("/users",user)
app.use("/posts",post)
app.use(express.json())

app.listen(4500,async()=>{
    try{
        await connection
    }catch(err){
        console.log(err)
    }
    console.log("server is running")
})