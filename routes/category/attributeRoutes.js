const express = require("express");
const router = express.Router();
const attributeControllers = require("../../controllers/category/attributeControllers");

router.post("/createAttribute", attributeControllers.createAttribute);
router.get("/attributeList", attributeControllers.attributeList);
router.patch("/attributeUpdate/:id", attributeControllers.attributeUpdate);
router.get("/attributeSearch", attributeControllers.attributeSearch);
module.exports = router;
