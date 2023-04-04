const express = require("express");
const router = express.Router();
const categoryRoutes = require("../userRoutes/categoryRoutes");
const subCategoryRoutes = require("../userRoutes/subCategoryRoutes");
const subSubCategoryRoutes = require("../userRoutes/subSubCategoryRoutes");
const attributeRoutes = require("../userRoutes/attributeRoutes");
const valuesRoutes=require("../userRoutes/valuesRoutes")

router.use("/category", categoryRoutes);
router.use("/subCategory", subCategoryRoutes);
router.use("/subSubCategory", subSubCategoryRoutes);
router.use("/attribute", attributeRoutes);
router.use("/values",valuesRoutes)
module.exports = router;
