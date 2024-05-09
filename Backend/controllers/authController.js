import User from "../models/userModel.js";
import errorHandler from "../utility/errorHandler.js";
import jwtToken from "jsonwebtoken"
import bcrypt from "bcrypt";

export const signIn = async (req, res, next) => {
  const{username,password}=req.body;
  try {
    const user=await User.findOne({username});
    if(!user){
        return next(errorHandler(401,"Belə bir istifadəçi yoxdur!!"));
    }

    const isMatchPassword=bcrypt.compareSync(password,user.password);
    if(!isMatchPassword){
      return next(errorHandler(401,"Şifrə uyğun deyil!!"));
    }
     
    const token= jwtToken.sign({id:user.id,isAdmin:user.isAdmin},process.env.JWT_SECRET);
    const{password:pass,...rest}=user._doc;
    res.cookie("access_token",token,{httpOnly:true});

   res.status(200).json(rest);

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
         next(errorHandler(401,"İstifadəçi artıq mövcuddur!"));
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
