const express=require("express")
const cors=require("cors")
const app=express()
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//mongodb
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/addtask_db');
  console.log("data base connected.....")
}

  
const service=require('./routers/service.jsx')
app.use("/api",service)

//server creation
app.listen(9000,()=>{
    console.log("server running http://localhost:9000/")
})