const mongoose=require("mongoose")

const schema=new mongoose.Schema({
    sellerName:{
        type:String,
        require:true
    },
    buyerName:{
        type:String,
        require:true
    },
    offerType:{
        type:String,
        require:true
    },
    price:{
        type:String,
        require:true
    }
})
schema.set("timestamps",true)
module.exports=mongoose.model("order",schema)