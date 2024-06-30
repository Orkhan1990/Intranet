import User from "../models/userModel.js"
import errorHandler from "../utility/errorHandler.js"

export const getWorkers=async(req,res,next)=>{
    try {
        const workers=await User.find({isWorker:true});
        if(!workers){
            next(errorHandler(401,"Workers not exist!"))
          return;
        }


        res.status(200).json(workers);
        
    } catch (error) {
        next(errorHandler(401,error.message))
    }
}