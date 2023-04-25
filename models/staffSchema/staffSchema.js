const mongoose=require("mongoose")

const schema=new mongoose.Schema({
    StaffName:{
        type:String,
        require:true
    },
    Email:{
        type:String,
        require:true
    },
    modules:{
        type:Array,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    confirmPassword:{
        type:String,
        require:true
    },
    status:{
        type:Boolean,
        default:true
    }
})
schema.set("timestamps",true)
module.exports=mongoose.model("staff",schema)