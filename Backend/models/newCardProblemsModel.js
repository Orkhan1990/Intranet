import mongoose from "mongoose";




const newCardProblemsSchema=new mongoose.Schema({
    newCardId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"newCard"
    },
    problem:{
        type:String,
    },
    workers:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"client"
    }]
},{timestamps:true});


const NewCardProblems= new mongoose.model("newCardProblems",newCardProblemsSchema);

export default NewCardProblems;