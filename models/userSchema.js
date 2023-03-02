const mongoose=require("mongoose")

const schema=new mongoose.Schema({
    userEmail:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})
schema.set("timestamps",true)
module.exports=mongoose.model("user",schema)