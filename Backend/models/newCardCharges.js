import mongoose from  "mongoose";





const newCardChargesSchema=new mongoose.Schema({
    description:{
        type:String
    },
    price:{
        type:Number
    },
    newCard:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"newCards"
    }
},{timestamps:true});



const NewCardCharges=mongoose.model("newCardCharges",newCardChargesSchema);

export default NewCardCharges;