const mongoose=require("mongoose")

const schema=new mongoose.Schema({
    userName:{
    type:String,
    require:true
    },
    userEmail:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    mobileNumber:{
        type:Number,
        require:true
    },
    dateOfBirth:{
        type:Date,
        require:true
    },
    status:{
        type:Boolean,
        default:true
    }
})
schema.set("timestamps",true)
module.exports=mongoose.model("user",schema)