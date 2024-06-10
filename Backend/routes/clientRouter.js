import express from "express";
import { createClient, getClients } from "../controllers/clientController.js";
import verifyToken from "../utility/verifyToken.js";


const router=express.Router();


router.post("/clientCreate",verifyToken,createClient);
router.get("/getClients",getClients);

export default router;