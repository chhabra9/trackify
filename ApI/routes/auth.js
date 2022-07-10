//jshint esversion:10
const router=require("express").Router();
const User=require("../models/User");
const jwt=require("jsonwebtoken");
//REGISTER User
router.post("/register",async(req,res)=>{
    console.log(req.body.username,req.body.email,req.body.password);
        const newUser=new User({
                username:req.body.username,
                email:req.body.email,
                password:req.body.password,  
        });
        try{
        const savedUser=await newUser.save();
        res.status(201).json(savedUser);
        console.log(savedUser);
    }catch(err){
            res.status(500).json(err);
            console.log(err);
    }
});
//LOGIN User
router.post("/login",async(req,res)=>{
    try{
        const user=await User.findOne({username:req.body.username});
        if(!user)
            res.status(401).json("wrong credential");
        else if(user.password!==req.body.password)
        res.status(401).json("wrong password");
        else{
            const accessToken=jwt.sign({
                id:user._id,
                isAdmin:user.isAdmin
            },process.env.JWT_SECRET
            );
            const{password,...others}=user._doc;
            res.status(200).json({...others,accessToken});
            console.log(others);
        }

    }catch(err){
        res.status(500).json(err);
    }
});
module.exports=router;