import mongoose from "mongoose";

const newCardWorkersSchema=new mongoose.Schema({
    newCard:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"newCard",
    },
    codeOfWork:{
        type:String
    },
    nameOfWork:{
        type:String
    },
    av:{
        type:Number
    },
    price:{
        type:Number
    },
    discount:{
        type:Number
    },
    oil:{
        type:Number
    },
    workers:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"users"
        }
    ]
},{timestamps:true});

const NewCardWorkers=mongoose.model("newCardWorkers",newCardWorkersSchema);

export default NewCardWorkers;