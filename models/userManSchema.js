const mongoose=require("mongoose")

const schema=new mongoose.Schema({
    userName:{
        type:String,
        require:true
    },
    mobiileNumber:{
        type:String,
        require:true
    },
    totalOffers:{
        type:String,
        require:true
    },
    status:{
        type:Boolean,
        default:true
    },
    follower:{
        type:Number,
        require:0
    },
    following:{
        type:Number,
        require:0
    },
    dateOfBirth:{
        type:Date,
        require:true
    }
})
schema.set("timestamps",true)
module.exports=mongoose.model("userManagement",schema)