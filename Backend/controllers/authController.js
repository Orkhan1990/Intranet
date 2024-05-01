import User from "../models/userModel.js";
import errorHandler from "../utility/errorHandler.js";
import bcrypt from "bcrypt";

export const signIn = async (req, res, next) => {
  const{username,password}=req.body;
  try {
    

  } catch (error) {
    next(errorHandler(401,error.message));
  }
};

export const signUp = async (req, res, next) => {
   console.log(req.body);
  try {
    const userName=await User.findOne({username:req.body.username});
    const userEmail=await User.findOne({email:req.body.email});
    if(userName||userEmail){
         next(errorHandler(401,"User already exist!"));
         return;
    }
    const hashPassword=bcrypt.hashSync(req.body.password,10);
    const newUser=await User({
        ...req.body,
        password:hashPassword
    });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    next(errorHandler(400,error.message));
  }
};
