import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import authRouter from "./routes/authRouter.js";
import clientRouter from "./routes/clientRouter.js";
import orderRouter from "./routes/orderRouter.js";
import userRouter from "./routes/userRouter.js";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";


dotenv.config();

const port = process.env.PORT || 9001;

const app = express();



app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );
  app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const corsOptions = {
  origin: true, //included origin as true
  credentials: true, //included credentials as true
};

app.use(cors(corsOptions));
app.use(cookieParser());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/client", clientRouter);
app.use("/api/v1/user",userRouter);
app.use("/api/v1/order",orderRouter);

app.use((error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || "Internal server error";
  res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});

// mongoose.connect(process.env.MONGODB).then(() => {
//   console.log("MongoDb connected!!!");
// });

app.listen(port, () => {
  console.log(`Server is runing on ${port}`);
});
