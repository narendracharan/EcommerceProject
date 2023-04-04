const valueSchema = require("../../models/userSchema/valuesSchema");
const category = require("../../models/userSchema/categorySchema");
const subCategory = require("../../models/userSchema/subCategorySchema");
const subSubCategory = require("../../models/userSchema/subSubCategorySchema");
const attribute = require("../../models/userSchema/attributeSchema");

const createValues = async (req, res) => {
  const values = new valueSchema(req.body);
  try {
    const createValues = await values.save();
    res.status(200).json({
      error: false,
      error_code: 200,
      message: "Success",
      results: {
        createValues,
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

const selectSubCategory = async (req, res) => {
  try {
    const subCategoryData = await subCategory.find();
    res.status(200).json({
      error: false,
      error_code: 200,
      message: "Success",
      results: {
        subCategoryData,
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

const selectSubSubCategory = async (req, res) => {
  try {
    const subSubCategoryData = await subSubCategory.find();
    res.status(200).json({
      error: false,
      error_code: 200,
      message: "Success",
      results: {
        subSubCategoryData,
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

const selectAttribute = async (req, res) => {
  try {
    const attributeCategoryData = await attribute.find();
    res.status(200).json({
      error: false,
      error_code: 200,
      message: "Success",
      results: {
        attributeCategoryData,
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

const valuesList = async (req, res) => {
  try {
    const list = await valueSchema.find({});
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

const valuesUpdate = async (req, res) => {
  const id = req.params.id;
  try {
    const updateValues = await valueSchema.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({
      error: false,
      error_code: 200,
      message: "Success",
      results: {
        updateValues,
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

const valuesSearch = async (req, res) => {
  const values = req.body.valuesName;
  try {
    const valuesData = await valueSchema.find({
      valuesName: { $regex: values, $options: "i" },
    });
    if (valuesData.length > 0) {
      res.status(200).json({
        error:false,
        error_code:200,
        message:"Success",
        results:{
          valuesData
        }
      });
    } else {
      res.status(200).json({
        error: true,
        error_code: 200,
        message:Error
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
  createValues,
  valuesList,
  valuesUpdate,
  valuesSearch,
  selectCategory,
  selectSubCategory,
  selectSubSubCategory,
  selectAttribute,
};
