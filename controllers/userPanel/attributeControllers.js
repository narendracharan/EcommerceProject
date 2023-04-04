const cateSchema = require("../../models/userSchema/attributeSchema");
const category = require("../../models/userSchema/categorySchema");
const subCategory = require("../../models/userSchema/subCategorySchema");
const subSubCategory = require("../../models/userSchema/subSubCategorySchema");
const values = require("../../models/userSchema/valuesSchema");

const createAttribute = async (req, res) => {
  const attribute = new cateSchema(req.body);
  const status=req.params.status
  try {
    const createAttribute = await attribute.save();
    if(status=="true"){
    res.status(200).json({
      error: false,
      error_code: 200,
      message: "Success",
      results: {
        createAttribute,
      },
    });
  }else{
    res.status(400).json({
      error:false,
      error_code:400,
      message:"Permission not allowed"
    })
  }
  } catch (err) {
    res.status(400).json({
      error: true,
      error_code: 400,
      message: Error,
    });
  }
};

const checkValues = async (req, res) => {
  const id = req.params.id;
  try {
    const checkData = await values.find({ attribute_Id: id });
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

const attributeList = async (req, res) => {
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

const attributeUpdate = async (req, res) => {
  const id = req.params.id;
  try {
    const update = await cateSchema.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({
      error: false,
      error_code: 200,
      message: "Success",
      results: {
        update,
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

const attributeSearch = async (req, res) => {
  const attribute = req.body.attributes;
  try {
    const categoryData = await cateSchema.find({
      attributes: { $regex: attribute, $options: "i" },
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
  createAttribute,
  attributeList,
  attributeUpdate,
  attributeSearch,
  selectCategory,
  selectSubCategory,
  selectSubSubCategory,
  checkValues,
};
