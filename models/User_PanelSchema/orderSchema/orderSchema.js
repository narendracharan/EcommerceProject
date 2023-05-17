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
        
    }
    ],
    paymentIntent:{},
    orderStatus:{
        type:String,
        default:"pending",
        enum:[
            "Not proccess",
            "Cash On delivery",
            "Dispatched",
            "Cancelled",
            "Delivered"
        ]
    },
    user_Id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        require:true
    },
    address_Id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"address",
        require:true
    }
})
schema.set("timestamps",true)
module.exports=mongoose.model("userOrder",schema)