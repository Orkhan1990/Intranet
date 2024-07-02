import mongoose from "mongoose";




const newCardPartsSchema=new mongoose.Schema({
    partsCode:{
        type:String
    },
    partsName:{
        type:String
    },
    quantity:{
        type:Number
    },
    price:{
        type:Number
    },
    discount:{
        type:Number
    },
    newCard:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"newCards"
    }
},{timestamps:true});

const NewCardParts=mongoose.model("newCardParts",newCardPartsSchema);

export default NewCardParts;