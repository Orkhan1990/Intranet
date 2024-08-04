import errorHandler from "../utility/errorHandler.js"



export const createOrder=async(req,res,next)=>{
    try {
        
    } catch (error) {
        next(errorHandler(401,error.message))
    }
}