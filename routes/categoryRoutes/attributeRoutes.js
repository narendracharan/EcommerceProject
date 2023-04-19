const express = require("express");
const router = express.Router();
const attributeControllers = require("../../controllers/categoryManagement/attributeControllers");
const authentication=require("../../middleware/userAuth")

router.post("/createAttribute", authentication.userAuth,attributeControllers.createAttribute);
router.post("/attributeList",  authentication.userAuth,attributeControllers.attributeList);
router.patch("/attributeUpdate/:id",  authentication.userAuth,attributeControllers.attributeUpdate);
router.post("/attributeSearch",  authentication.userAuth,attributeControllers.attributeSearch);
router.post("/selectCategory", authentication.userAuth,attributeControllers.selectCategory)
router.post("/selectSubCategory", authentication.userAuth,attributeControllers.selectSubCategory)
router.post("/selectSubSubCategory", authentication.userAuth,attributeControllers.selectSubSubCategory)
router.post("/checkValues/:id", authentication.userAuth,attributeControllers.checkValues)
router.patch("/checkStatus/:id", authentication.userAuth,attributeControllers.checkStatus)
module.exports = router;
