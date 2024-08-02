import db from "../db.js";
import Client from "../models/clientModel.js";
import errorHandler from "../utility/errorHandler.js";

export const createClient = async (req, res, next) => {

  try {
    const q =
      "INSERT INTO clients(`companyName`,`companyRepresentative`,`phoneNumber`,`email`,`address`,`requisite`,`voen`,`contractNumber`,`contractDate`,`approver`,`oneCCode`,`userId`) VALUES (?)";
    const values = [
      req.body.companyName,
      req.body.companyRepresentative,
      req.body.phoneNumber,
      req.body.email,
      req.body.address,
      req.body.requisite,
      req.body.voen,
      req.body.contractNumber,
      req.body.contractDate,
      req.body.approver,
      req.body.oneCCode,
      req.user.id,
    ];
    db.query(q, [values], (err, data) => {
      if (err) {
        next(errorHandler(401, err));
        return;
      }
      console.log(data);
      if (data) {
        res.status(201).json(data);
        return;
      }
    });
   
  } catch (error) {
    next(errorHandler(401, error.message));
  }
};

export const getClients = async (req, res, next) => {
  try {


    const q="SELECT * FROM clients";
    db.query(q,(err,data)=>{
      if(err){
        next(errorHandler(401,err));
        return;
      }
      if(data.length===0){
       next(errorHandler(401, "Clients not exist"));
       return ;
      }
      console.log(data);
          res.status(200).json(data);
    })
   
  } catch (error) {
    next(errorHandler(401, error.message));
  }
};

export const addDiscount = async (req, res, next) => {
  const { id } = req.params;
  console.log(id, req.body);
  try {


    const q="UPDATE  clients SET av=?,partsDiscount=? WHERE id=?"

    db.query(q,[req.body.av,req.body.partsDiscount,id],(err,data)=>{
      if(err){
        next(errorHandler(401,err));
        return;
      }
      console.log(data);
      res.status(201).json(data)
    })
   
  } catch (error) {
    next(errorHandler(401, error.message));
  }
};

export const getClient = async (req, res, next) => {
  const { id } = req.params;
  
  try {
    const q="SELECT * FROM clients WHERE id=?";
    
    db.query(q,[id],(err,data)=>{
      if(err){
        next(401,errorHandler(401,err));
        return;
      }
      console.log(data);
      if(data.length===0){
        next(401,errorHandler(401,"Client not exist"));
        return;
      }
      res.status(201).json(data[0]);
    })
  
  } catch (error) {
    next(errorHandler(401, error.message));
  }
};

export const updateClient = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updateClientData = await Client.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(201).json(updateClientData);
  } catch (error) {
    next(errorHandler(401, error.message));
  }
};
