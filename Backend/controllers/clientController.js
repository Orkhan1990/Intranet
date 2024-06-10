import Client from "../models/clientModel.js"
import errorHandler from "../utility/errorHandler.js"

export const createClient=async(req,res,next)=>{
    try {
        const newClient=await Client({...req.body,userId:req.user.id});
        newClient.save();
        res.status(201).json(newClient);
        
    } catch (error) {
        next(errorHandler(401,error.message))
    }
}


export const getClients=async(req,res,next)=>{
    try {
        const clients=await Client.find();
        if(!clients){
            return next(errorHandler(401,"Users not exist"));
        }
        res.status(200).json(clients)
    } catch (error) {
        next(errorHandler(401,error.message));
    }
}