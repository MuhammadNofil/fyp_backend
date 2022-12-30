const mongoose=require('mongoose')

const UserSessionSchema=new mongoose.Schema({
    refreshToken: {
      type:String
    },
    rememberMe: {
      type: Boolean,
    },
  });

  const UserSession=mongoose.model("UserSession",UserSessionSchema)
  module.exports=UserSession
