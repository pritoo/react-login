import express from "express"
import cors from "cors"
import mongoose from "mongoose";


const app=express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/myLoginDB',{
useNewUrlParser:true,
useUnifiedTopology:true,
},() => {
    console.log("db connected")
}
)

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})
const user = new mongoose.model("user", userSchema)

//routes
app.post("/Signup",(req,res)=>{
    const {username,email,password}=req.body
    user.findOne({email:email}, (err,user) => {
        if(user){
            res.send({message:"user alredy signup"})
        }else{
            const user = new user({
                username,
                email,
                password
            })
            user.save( err =>{
                if(err){
                    res.send(err)
                }else{
                    res.send ({massage:"successfull"})
                }
            })
        }
    })
  

    //res.send("my api signup")
    //console.log(req.body)

})

app.post("/Login",(req,res)=>{
    res.send("my api login")
})

app.listen(9002,()=>{
    console.log("be started at this port 9002")
})