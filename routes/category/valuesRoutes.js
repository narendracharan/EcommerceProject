const express=require("express")
const router=express.Router()
const valuesControllers=require("../../controllers/category/valuesControllers")

router.post("/createValues",valuesControllers.createValues)
router.get("/valuesList",valuesControllers.valuesList)
router.patch("/valuesUpdate/:id",valuesControllers.valuesUpdate)
router.get("/valuesSearch",valuesControllers.valuesSearch)
module.exports=router