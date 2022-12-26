const express=require('express')
const app=express()
const mongoose=require('mongoose')
const PORT=process.env.PORT||5000;
const db=require('./config/db').URL
const initserver=async()=>{
    try {
    await mongoose.connect(db,{useNewUrlParser:true})
    console.log("connected successful to db")        
    } catch (error) {
        console.log("not connected to db ")
    }
}
module.exports={initserver}
