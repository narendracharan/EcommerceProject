const mongoose=require("mongoose")

const cateSchema=new mongoose.Schema({
    categoryName:{
        type:String,
        require:true
    },
    categoryPic:{
        type:String,
        require:true
    },
    subCategory:{
        type:String,
        require:true
    },
    subSubCategory:{
        type:String,
        require:true
    },
    attributes:{
        type:String,
        require:true
    },values:{
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
    },
    user_ID:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:"user"
    }

})
cateSchema.set("timestamps",true)
module.exports=mongoose.model("category",cateSchema)