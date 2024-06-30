import express from "express";
import { getWorkers } from "../controllers/userController.js";



const router=express.Router();


router.get("/getworkers",getWorkers)



export default router;