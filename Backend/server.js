import express from 'express';



const app=express();

app.use(express.urlencoded);
app.use(express.json);


const port=process.env.PORT||9001;




app.listen(port,()=>{
    console.log(`Server is runing on ${port}`)
})