const router=require("express").Router();
const EmailReq=require("../models/emailReq");
const {verifyTokenAndAdmin}=require("./verifyToken");
router.post('/',async (req,res)=>{
    console.log(req.body);
    const newEmailReq=new EmailReq(req.body);
    try{
        const savedEmailReq=await newEmailReq.save();
        res.status(200).json(savedEmailReq);
    }
    catch(err){
        res.status(500).json(err);
    }
});
router.get("/",verifyTokenAndAdmin,async(req,res)=>{

    try{
        const emailRequests=await EmailReq.find();
        res.status(200).json(emailRequests);
    }
    catch(err){
        res.status(500).json(err);
    }
});
module.exports=router;