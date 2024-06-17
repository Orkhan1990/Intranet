import express from "express";
import { addDiscount, createClient, getClient, getClients, updateClient } from "../controllers/clientController.js";
import verifyToken from "../utility/verifyToken.js";


const router=express.Router();


router.post("/clientCreate",verifyToken,createClient);
router.get("/getClients",getClients);
router.post("/discountClient/:id",addDiscount);
router.get("/getClient/:id",getClient);
router.post("/updateClient/:id",updateClient);

export default router;