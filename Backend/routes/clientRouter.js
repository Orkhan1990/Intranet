import express from "express";
import { createClient } from "../controllers/clientController.js";


const router=express.Router();


router.post("/clientCreate",createClient)

export default router;