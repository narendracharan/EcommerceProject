const express = require("express");
const router = express.Router();
const attributeControllers = require("../../controllers/categoryManagement/attributeControllers");
const tokenAuthorisationUser = require("../../middleware/userAuth");

router.post("/createAttribute", tokenAuthorisationUser,attributeControllers.createAttribute);
router.post("/attributeList",  tokenAuthorisationUser,attributeControllers.attributeList);
router.patch("/attributeUpdate/:id",  tokenAuthorisationUser,attributeControllers.attributeUpdate);
router.post("/attributeSearch",  tokenAuthorisationUser,attributeControllers.attributeSearch);
router.post("/selectCategory", tokenAuthorisationUser,attributeControllers.selectCategory)
router.post("/selectSubCategory", tokenAuthorisationUser,attributeControllers.selectSubCategory)
router.post("/selectSubSubCategory", tokenAuthorisationUser,attributeControllers.selectSubSubCategory)
router.post("/checkValues/:id", tokenAuthorisationUser,attributeControllers.checkValues)
router.patch("/checkStatus/:id", tokenAuthorisationUser,attributeControllers.checkStatus)
module.exports = router;
