const express = require("express");
const router = express.Router();
const attributeControllers = require("../../controllers/categoryManagement/attributeControllers");
const authentication=require("../../middleware/userAuth")

router.post("/createAttribute", authentication,attributeControllers.createAttribute);
router.post("/attributeList",  authentication,attributeControllers.attributeList);
router.patch("/attributeUpdate/:id",  authentication,attributeControllers.attributeUpdate);
router.post("/attributeSearch",  authentication,attributeControllers.attributeSearch);
router.post("/selectCategory", authentication,attributeControllers.selectCategory)
router.post("/selectSubCategory", authentication,attributeControllers.selectSubCategory)
router.post("/selectSubSubCategory", authentication,attributeControllers.selectSubSubCategory)
router.post("/checkValues/:id", authentication,attributeControllers.checkValues)
router.patch("/checkStatus/:id", authentication,attributeControllers.checkStatus)
module.exports = router;
