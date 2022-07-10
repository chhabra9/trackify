const mongoose=require("mongoose");
const ServiceRequestSchema=new mongoose.Schema(
    {
        ownerName:{type:String,required:true},
        mobileNo:{type:String,required:true},
        vechileComp:{type:String},
        model:{type:String},
        location:{type:String,required:true},
        serviceType:{type:String,required:true},
        problems:{type:Array}
    },
    {timestamps:true}
);
module.exports=mongoose.model("ServiceRequest",ServiceRequestSchema);