const mongoose=require("mongoose")

const schema=new mongoose.Schema({
    quantity:{
        type:Number,
        default:1
    },
    product_Id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product",
        require:true
    },
    user_Id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        require:true
    }
})

schema.set("timestamps",true)
module.exports=mongoose.model("cart",schema)