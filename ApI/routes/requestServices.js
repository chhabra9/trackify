const router=require("express").Router();
const serviceRequest=require("../models/serviceRequest");
const { verifyTokenAndAdmin } = require("./verifyToken");
router.post("/",async(req,res)=>{
    const newServiceRequest=new serviceRequest(req.body);
    try{
        const savedServiceRequest=await newServiceRequest.save();
        res.status(200).json(savedServiceRequest);
    }
    catch(err){
        res.status(500).json(err);
    }
});
router.get("/",verifyTokenAndAdmin,async(req,res)=>{
    
    try{
        const ServiceRequests=await serviceRequest.find();
        res.status(200).json(ServiceRequests);
    }
    catch(err){
        res.status(500).json(err);
    }
});
module.exports=router;