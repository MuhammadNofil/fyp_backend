const responses = require("../constants/responses");
const User=require('../models/user')
const Hashing=require('../middleware/middleware')

const Register = async (userInfo) => {
  const { name,email,password, } = userInfo;
  const hashedPwd = await Hashing.hashPassword(password);
  try {
    const alreadyExists = await User.findOne({
        email: email,
    });
    if (alreadyExists) {
      return responses.EMAIL_ALREADY_EXISTS;
    }
    const user = await User.create({
      name,
      email,
      password:hashedPwd
    });
    if (!user) {
      return false;
    }
    return user;
  } catch (error) {
    console.log("error")
  }
};
const Get = async () => {
  try {
    const user = await User.find({
    });
    if (!user) {
      return false;
    }
    return user;
  } catch (error) {
    console.error(error);
  }
};
const GetById = async (id) => {
  try {
    const user = await User.findOne({
      _id:id
    });
    if (!user) {
      return false;
    }
    return user;
  } catch (error) {
    console.error(error);
  }
};
const Update = async (userInfo,id) => {
  const {name} = userInfo;
  try {
    const user = await User.findByIdAndUpdate({_id:id,name});
    if (!user) {
      return false;
    }
    return user;
  } catch (error) {
    console.log("error")
  }
};
const UpdatePassword = async (userInfo,id) => {
  const {password,newpassword} = userInfo;
    try {
      const user = await User.findOne({_id:id});
      const hashedPwd = await Hashing.comparePassword(password,user.password);
      console.log(hashedPwd,"line 32323")
      if (hashedPwd===true) {
        await User.updateOne({
          password:newpassword
        })
      }
      return user;
    } catch (error) {
      console.log("error")
    }
   }
   const getUserByEmail = async (email)=> {
    try {
      const user = await User.findOne({email: email });
      if (!user) {
        return false;
      }
      return user;
    } catch (error) {
      console.error(error);
    }
  };
module.exports = {
  Register,
  Get,
  GetById,
  Update,
  UpdatePassword,
  getUserByEmail,
};