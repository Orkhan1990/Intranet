import express from 'express';
import dotenv from "dotenv";
import cors from "cors";
import mongoose from 'mongoose';
import authRouter from "./routes/authRouter.js"

dotenv.config();


const port=process.env.PORT||9001;


const app=express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/api/v1/auth",authRouter);

app.use((error,req,res,next)=>{
     const statusCode=error.statusCode||500;
     const message=error.message || "Internal server error";
     res.status(statusCode).json({
        success:false,
        message,
        statusCode
     })
})




mongoose.connect(process.env.MONGODB).then(()=>{
    console.log("MongoDb connected!!!");
})

app.listen(port,()=>{
    console.log(`Server is runing on ${port}`)
})

