const mongoose=require("mongoose")

const schema=new mongoose.Schema({
    yourName:{
        type:String,
        require:true
    },
    Email:{
        type:String,
        require:true
    },
    website:{
        type:String,
        require:true
    },
    reviewTitle:{
        type:String,
        require:true
    },
    comment:{
        type:String,
        require:true
    },
    product_Id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product_Id",
        require:true
    }
})
schema.set("timestamps",true)
module.exports=mongoose.model("review",schema)