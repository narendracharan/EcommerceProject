const mongoose=require("mongoose")

const schema=new mongoose.Schema({
    products:[
        {
        product_Id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"product",
            require:true,
            Price:Number
        },
        quantity:{
            type:Number,
            default:1
        },
        user_Id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user",
            require:true
        }
        
    }
    ],
    coupanCode:Number,
    cartsTotal:Number,
    orderStatus:{
        type:String,
        default:"pending",
    },
    
})
schema.set("timestamps",true)
module.exports=mongoose.model("userOrder",schema)