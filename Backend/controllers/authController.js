import errorHandler from "../utility/errorHandler.js";
import jwtToken from "jsonwebtoken"
import bcrypt from "bcrypt";
import db from "../db.js";

export const signIn = async (req, res, next) => {
  const{username,password}=req.body;
  try {
    const q="SELECT * FROM users WHERE username=?"
    db.query(q,[username],(err,data)=>{
      console.log(data);
      if(err){
        next(errorHandler(401,err));
        return;
      }
      if(data.length===0){
        next(errorHandler(401,"Belə bir istifadəçi yoxdur!!"));
        return;
      }
      const isMatchPassword=bcrypt.compareSync(password,data[0].password);
      if(!isMatchPassword){
        return next(errorHandler(401,"Şifrə uyğun deyil!!"));
      }
      const token= jwtToken.sign({id:data[0].id,isAdmin:data[0].isAdmin},process.env.JWT_SECRET);
    const{password:pass,...rest}=data[0];
    res.cookie("access_token",token,{httpOnly:true});

   res.status(200).json(rest);

    })
   
  } catch (error) {
    next(errorHandler(401,error.message));
  }
};

export const signUp = async (req, res, next) => {
  try {
    const q="SELECT * FROM users WHERE username=? OR email=?";
    db.query(q,[req.body.username,req.body.email],(err,data)=>{
      if(err){
         next(errorHandler(400,err));
         return;
      }
      if(data.length){
        next(errorHandler(400,"İstifadəçi artıq mövcuddur!"))
        return;
      }

      const salt=bcrypt.genSaltSync(10)
      const hashPassword=bcrypt.hashSync(req.body.password,salt);

      const q="INSERT INTO users (`username`,`email`,`password`) VALUES (?)";
      const values=[
        req.body.username,
        req.body.email,
        hashPassword
      ]


      db.query(q,[values],(err,data)=>{
          if(err){
            console.log(err);
            next(errorHandler(401),err)
            return;
          }
          if(data){
           res.status(200).json("User created!")
          }
      })    
    })

  } catch (error) {
    next(errorHandler(400,error.message));
  }
};
