const cateSchema = require("../../models/categorySchema/subCategorySchema");
const category = require("../../models/categorySchema/categorySchema");
const subSubCategory = require("../../models/categorySchema/subSubCategorySchema");
const subSubCategorySchema = require("../../models/categorySchema/subSubCategorySchema");
const attributeSchema=require("../../models/categorySchema/attributeSchema")
const valuesSchema=require("../../models/categorySchema/valuesSchema")

const subCategory = async (req, res) => {
  try {
    const subCategory = new cateSchema(req.body);
    const createSubCategory = await subCategory.save();
      res.status(200).json({
        error: false,
        error_code: 200,
        message: "Success",
        results: {
          createSubCategory,
        },
      });
  } catch (err) {
    res.status(400).json({
      error: true,
      error_code: 400,
      message: Error,
    });
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
    res.status(200).json({
      error:false,
      error_code:200,
      message: "Success",
      results:{
      updateStatus,
      subSubCategoryStatus,
      attributeStatus,
      valuesStatus
      }
    });
  } catch (err) {
    res.status(400).json({
      error: true,
      error_code: 400,
      message: err.message,
    });
  }
};

const checkSubSubcategory = async (req, res) => {
  try {
    const id = req.params.id;
    const checkData = await subSubCategory.find({ subCategory_Id: id });
    res.status(200).json({
      error: false,
      error_code: 200,
      message: "Success",
      results: {
        checkData,
      },
    });
  } catch (err) {
    res.status(400).json({
      error: true,
      error_code: 400,
      message: Error,
    });
  }
};

const selectCategory = async (req, res) => {
  try {
    const categoryData = await category.find();
    res.status(200).json({
      error: false,
      error_code: 200,
      message: "Success",
      results: {
        categoryData,
      },
    });
  } catch (err) {
    res.status(400).json({
      error: true,
      error_code: 400,
      message: Error,
    });
  }
};

const subCategoryList = async (req, res) => {
  try {
    const list = await cateSchema.find({});
    res.status(200).json({
      error: false,
      error_code: 200,
      message: "Success",
      results: {
        list,
      },
    });
  } catch (err) {
    res.status(400).json({
      error: true,
      error_code: 400,
      message: Error,
    });
  }
};

const subCategoryUpdate = async (req, res) => {
  try {
    const id = req.params.id;
    const updated = await cateSchema.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({
      error: false,
      error_code: 200,
      message: "Success",
      results: {
        updated,
      },
    });
  } catch (err) {
    res.status(400).json({
      error: true,
      error_code: 400,
      message: Error,
    });
  }
};

const subCategorySearch = async (req, res) => {
  try {
    const category = req.body.subCategoryName;
    const categoryData = await cateSchema.find({
      subCategoryName: { $regex: category, $options: "i" },
    });
    if (categoryData.length > 0) {
      res.status(200).json({
        error: false,
        error_code: 200,
        message: "Success",
        results: {
          categoryData,
        },
      });
    } else {
      res.status(200).json({
        error: true,
        error_code: 200,
        message: Error,
      });
    }
  } catch (err) {
    res.status(400).json({
      error: true,
      error_code: 400,
      message: Error,
    });
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
