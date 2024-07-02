import mongoose from "mongoose";



const clientSchema=new mongoose.Schema({
    companyName:{
        type:String,
        required:true,
        unique:true
    },
    companyRepresentative:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    requisite:{
        type:String,
        required:true
    },
    voen:{
        type:String,
        required:true
    },
    contractNumber:{
        type:String,
        required:true
    },
    contractDate:{
        type:String,
        required:true
    },
    approver:{
        type:String,
        required:true
    },
    oneCCode:{
        type:String
    },
    type:{
        type:String,
        required:true
    },
    typeOfStatus:{
        type:String,
        required:true
    },
    av:{
        type:Number,
        default:0
    },
    partsDiscount:{
        type:Number,
        default:0
    },
    userId:{
        type:String,
        required:true
    }
},{timestamps:true})


const Client=mongoose.model("clients",clientSchema);

export default Client;