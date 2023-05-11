const express=require("express")
const { createReview } = require("../../../controllers/User_PanelControllers/reviewControllers/reviewControllers")
const router=express.Router()

router.post("/add-review",createReview)

module.exports=router