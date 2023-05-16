const mongoose=require("mongoose")

const schema=new mongoose.Schema({
    product_Id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product",
        require:true
    },
    orderStatus:{
        type:String,
        default:"pending",
        enum:[
            "Not Processed",
            "cash on delivery",
            "Processing",
            "Dispatched",
            'Cancelled',
            "Delivered"
        ]
    },
    orderby:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        require:true
    }
})
schema.set("timestamps",true)
module.exports=mongoose.model("order",schema)