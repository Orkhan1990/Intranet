import Client from "../models/clientModel.js"
import errorHandler from "../utility/errorHandler.js"

export const createClient=async(req,res,next)=>{
    try {
        const newClient=await Client(req.body);
        newClient.save();
        res.status(201).json("Client successfuly created!!")
        
    } catch (error) {
        next(errorHandler(401,error.message))
    }
}