const express=require("express")
const router=express.Router()
const helpControllers=require("../../controllers/helpControllers/helpControllers")
const tokenAuthorisationUser = require("../../middleware/userAuth")

router.post("/createHelp",tokenAuthorisationUser,helpControllers.createhelp)
router.post("/list",tokenAuthorisationUser,helpControllers.helpList)
router.post("/helpSearch",tokenAuthorisationUser,helpControllers.helpSearch)
router.post("/createQuestion",tokenAuthorisationUser,helpControllers.createQuestion)
router.post("/questionList",tokenAuthorisationUser,helpControllers.questionList)
router.patch("/updateQuestion/:id",tokenAuthorisationUser,helpControllers.updateQuestion)
module.exports=router