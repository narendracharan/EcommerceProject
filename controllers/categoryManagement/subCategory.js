const cateSchema = require("../../models/categorySchema/subCategorySchema");
const category = require("../../models/categorySchema/categorySchema");
const subSubCategory = require("../../models/categorySchema/subSubCategorySchema");
const subSubCategorySchema = require("../../models/categorySchema/subSubCategorySchema");
const attributeSchema=require("../../models/categorySchema/attributeSchema")
const valuesSchema=require("../../models/categorySchema/valuesSchema");
const { success, error } = require("../response");

const subCategory = async (req, res) => {
  try {
    const subCategory = new cateSchema(req.body);
    const createSubCategory = await subCategory.save();
      res.status(200).json(success(res.statusCode,"Success",{createSubCategory}));
  } catch (err) {
    res.status(400).json(error("Failed",res.statusCode));
  }
};


const checkStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const updateStatus = await cateSchema.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    const subSubCategoryStatus=await subSubCategorySchema.findOneAndUpdate({subCategory_Id:id},req.body,{new:true})
    const attributeStatus=await attributeSchema.findOneAndUpdate({subCategory_Id:id},req.body,{new:true})
    const valuesStatus=await valuesSchema.findOneAndUpdate({subCategory_Id:id},req.body,{new:true})
    res.status(200).json(success(res.statusCode,"Success",{ updateStatus,
      subSubCategoryStatus,
      attributeStatus,
      valuesStatus
    }));
  } catch (err) {
    res.status(400).json(error("Failed",res.statusCode));
  }
};

const checkSubSubcategory = async (req, res) => {
  try {
    const id = req.params.id;
    const checkData = await subSubCategory.find({ subCategory_Id: id });
    res.status(200).json(success(res.statusCode,"Success",{checkData}));
  } catch (err) {
    res.status(400).json(error("Failed",res.statusCode));
  }
};

const selectCategory = async (req, res) => {
  try {
    const categoryData = await category.find();
    res.status(200).json(success(res.statusCode,"Success",{categoryData}));
  } catch (err) {
    res.status(400).json(error("Failed",res.statusCode));
  }
};

const subCategoryList = async (req, res) => {
  try {
    const list = await cateSchema.find({});
    res.status(200).json(success(res.statusCode,"Success",{list}));
  } catch (err) {
    res.status(400).json(error("Failed",res.statusCode));
  }
};

const subCategoryUpdate = async (req, res) => {
  try {
    const id = req.params.id;
    const updated = await cateSchema.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(success(res.statusCode,"Success",{updated}));
  } catch (err) {
    res.status(400).json(error("Failed",res.statusCode));
  }
};

const subCategorySearch = async (req, res) => {
  try {
    const category = req.body.subCategoryName;
    const categoryData = await cateSchema.find({
      subCategoryName: { $regex: category, $options: "i" },
    });
    if (categoryData.length > 0) {
      res.status(200).json(success(res.statusCode,"Success",{categoryData}));
    } else {
      res.status(200).json(error("Data are Not Found",res.statusCode));
    }
  } catch (err) {
    res.status(400).json(error("Failed",res.statusCode));
  }
};

module.exports = {
  subCategory,
  subCategoryList,
  subCategoryUpdate,
  subCategorySearch,
  selectCategory,
  checkSubSubcategory,
  checkStatus
};
