const multer=require("multer")
const path =require('path')

const imageConfig=multer.diskStorage({
    destination:(req,res,callback)=>{
        callback(null,path.join(__dirname,"..","/uploads"))
    },
    filename:(req,file,callback)=>{
         const exe=file.originalname.substring(file.originalname.indexOf("."))
         callback(null,`image_${Date.now()}.${file.originalname}`)
    }
})
const multerFilter=(req,file,callback)=>{
    if(file.mimetype.startsWith("image")){
        callback(null,true)
    }else{
        callback(new Error("Only Image Allowd",false))
    }
}

const uploads=multer({
    storage:imageConfig,
    fileFilter:multerFilter
})

module.exports={
    uploads
}