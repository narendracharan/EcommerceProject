const mongoose=require("mongoose")

const schema=new mongoose.Schema({
    subSubCategoryName:{
        type:String,
        require:true
    },
    shipmentService:{
        type:Boolean,
        default:true
    },
    status:{
        type:Boolean,
        default:true
    }
})
schema.set("timestamps",true)
module.exports=mongoose.model("subSubCategory",schema)