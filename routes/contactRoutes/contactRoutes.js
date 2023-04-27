const express=require("express")
const router=express.Router()
const contactControllers=require("../../controllers/contactControllers/contactControllers")
const tokenAuthorisationUser = require("../../middleware/userAuth")

router.post("/createContact",tokenAuthorisationUser,contactControllers.createContact)
router.post("/contactList",tokenAuthorisationUser,contactControllers.contactlist)
router.delete("/contactDelete/:id",tokenAuthorisationUser,contactControllers.contactDelete)
router.post("/contactView/:id",tokenAuthorisationUser,contactControllers.contactView)
module.exports=router