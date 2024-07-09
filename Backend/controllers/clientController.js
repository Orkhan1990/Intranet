import Client from "../models/clientModel.js"
import errorHandler from "../utility/errorHandler.js"

export const createClient=async(req,res,next)=>{
    console.log(req.body);
    console.log(req.user);

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


export const addDiscount=async(req,res,next)=>{
    const {id}=req.params;
    console.log(id,req.body);
    try {
        const client=await Client.findById(id);
        if(!client){
            return next(errorHandler(401,"Client not exist!"))
        }
        const updateClient=await Client.findByIdAndUpdate(id,{$set:req.body},{new:true})
        res.status(201).json(updateClient);
        
    } catch (error) {
        next(errorHandler(401,error.message));
    }
}

export const getClient=async(req,res,next)=>{
    const {id}=req.params;
    console.log(id);
    try {

        const client=await Client.findById(id);
        if(!client){
            return next(errorHandler(401,"Client not exist!"))
        }
        res.status(200).json(client);
        
    } catch (error) {
        next(errorHandler(401,error.message))
    }
}

export const updateClient=async(req,res,next)=>{
    const {id}=req.params;
    try {
        const updateClientData=await Client.findByIdAndUpdate(id,{$set:req.body},{new:true});
        res.status(201).json(updateClientData)
    } catch (error) {
        next(errorHandler(401,error.message));
    }
}