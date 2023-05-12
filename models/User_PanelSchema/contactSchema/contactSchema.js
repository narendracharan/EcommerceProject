const mongoose=require("mongoose")

const schema=new mongoose.Schema({
    firstName:{
        type:String,
        require:true
    },
    lastName:{
        type:String,
        require:true
    },
    Email:{
        type:String,
        require:true
    },
    mobileNumber:{
        type:Number,
        require:true
    },
    message:{
        type:String,
        require:true
    }

})
schema.set("timestamps",true)
module.exports=mongoose.model("contact",schema)