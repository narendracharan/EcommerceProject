const cateSchema = require("../../models/categorySchema/categorySchema");
const subCategorySchema = require("../../models/categorySchema/subCategorySchema");
const subcategory = require("../../models/categorySchema/subCategorySchema");
const subSubCategorySchema = require("../../models/categorySchema/subSubCategorySchema");
const attributeSchema = require("../../models/categorySchema/attributeSchema");
const valueSchema = require("../../models/categorySchema/valuesSchema");


const createCategory = async (req, res) => {
  try {
    const category = new cateSchema(req.body);
    const filepath = `/public/${req.file.filename}`;
    console.log(req.file);
    category.categoryPic = filepath;
    const saveCategoty = await category.save();
    res.status(201).json({
      error: false,
      error_code: 201,
      message: "Category Create Successfully",
      results: {
        saveCategoty,
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
    const updateSubCategoryStatus = await subCategorySchema.findOneAndUpdate(
      { category_Id: id },
      req.body,
      { new: true }
    );
    const updateSubSubCategoryStatus =
      await subSubCategorySchema.findOneAndUpdate(
        { category_Id: id },
        req.body,
        { new: true }
      );
    const updateAttributeStatus = await attributeSchema.findOneAndUpdate(
      { category_Id: id },
      req.body,
      { new: true }
    );
    const updateValuesStatus = await valueSchema.findOneAndUpdate(
      { category_Id: id },
      req.body,
      { new: true }
    );
    res.status(200).json({
      error: false,
      error_code: 200,
      message: "Success",
      results: {
        updateStatus,
        updateSubCategoryStatus,
        updateSubSubCategoryStatus,
        updateAttributeStatus,
        updateValuesStatus,
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

const checkSubCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const subCategoryData = await subcategory.find({ category_Id: id });
    const subSubCategoryData = await subSubCategorySchema.find({
      category_Id: id,
    });
    res.status(200).json({
      error: false,
      error_code: 200,
      message: "Success",
      results: {
        subCategoryData,
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

const categoryList = async (req, res) => {
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

const categoryUpdate = async (req, res) => {
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

const categorySearch = async (req, res) => {
  try {
    const category = req.body.categoryName;
    const categoryData = await cateSchema.find({
      categoryName: { $regex: category, $options: "i" },
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
  createCategory,
  categoryList,
  categoryUpdate,
  categorySearch,
  checkSubCategory,
  checkStatus,
};
