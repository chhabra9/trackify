const router=require("express").Router();
const suggestionRequest=require("../models/Suggestion");
const { verifyTokenAndAdmin } = require("./verifyToken");
router.post("/",async(req,res)=>{
    console.log(req.body);
    const newSuggestionRequest=new suggestionRequest(req.body);
    try{
        const savedSuggestionRequest=await newSuggestionRequest.save();
        res.status(200).json(savedSuggestionRequest);
    }
    catch(err){
        res.status(500).json(err);
    }
});
router.get("/",verifyTokenAndAdmin,async(req,res)=>{
    
    try{
        const SuggestionRequests=await suggestionRequest.find();
        res.status(200).json(SuggestionRequests);
    }
    catch(err){
        res.status(500).json(err);
    }
});
module.exports=router;