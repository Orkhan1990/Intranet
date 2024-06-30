import mongoose from "mongoose";


const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    firstName:{
    type:String,
    default:""
    },
    lastName:{
     type:String,
     default:""
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    isWorker:{
        type:Boolean,
        default:true
    }
},{timestamps:true});

const User=mongoose.model("users",userSchema);

export default User;