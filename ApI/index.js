//jshint esversion:8
require("dotenv").config();
const express=require("express");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const app=express();
const userRoute=require("./routes/user");
const authRoute=require("./routes/auth");
const productRoute=require("./routes/product");
const cartRoute=require("./routes/cart");
const orderRoute=require("./routes/order");
const paymentRequest =require("./routes/stripe");
const serviceRequestRoute=require("./routes/requestServices");
const emailReqRoute=require("./routes/email");
const suggestionRoute=require("./routes/suggestion")
app.use(bodyParser.urlencoded({extended:true}));
var cors = require('cors');
// const serviceRequest = require("./models/serviceRequest");
app.use(cors());
 mongoose.connect(process.env.MONGO_URL,{useNewURLParser:true,useUnifiedTopology:true})
 .then(()=>console.log("connection successfull"))
 .catch((err)=>{
     console.log(err);
 });
 app.use(express.json());
app.use("/trackify/auth",authRoute);
app.use("/trackify/users",userRoute);
app.use("/trackify/products",productRoute);
app.use("/trackify/carts",cartRoute);
app.use("/trackify/orders",orderRoute);
app.use("/trackify/checkout",paymentRequest);
app.use("/trackify/serviceRequest",serviceRequestRoute);
app.use("/trackify/email",emailReqRoute);
app.use("/trackify/suggestion",suggestionRoute);
app.listen(5000,()=>{
    console.log("server is running");
});
