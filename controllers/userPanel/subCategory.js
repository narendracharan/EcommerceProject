const cateSchema = require("../../models/userSchema/subCategorySchema");
const category = require("../../models/userSchema/categorySchema");
const subSubCategory = require("../../models/userSchema/subSubCategorySchema");

const subCategory = async (req, res) => {
  try {
    const id=req.params.id
    const subCategory = new cateSchema(req.body);
    const cate=await  cateSchema.findOne({category_Id:id})
    const createSubCategory = await subCategory.save();
    if (cate.status == true) {
      res.status(200).json({
        error: false,
        error_code: 200,
        message: "Success",
        results: {
          createSubCategory,
        },
      });
    } else if(cate.status == false) {
      res.status(400).json({
        error: true,
        error_code: 400,
        message: "Permission Not Allowed",
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

const Status = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await cateSchema.findOne({category_Id:id})
    console.log(data);
    if (data.status == true) {
      res.status(200).json({
        error: false,
        error_code: 200,
        message: "all Data",
        results:{
          data
        }
      });
    } else {
      res.status(400).json({
        error: true,
        error_code: 400,
        message: "Permission not allowed",
      });
    }
  } catch (err) {
    res.status(400).json({
      error: true,
      error_code: false,
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
    res.status(200).json({
      status: "Success",
      updateStatus,
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
    const subCategory = req.body.subCategory;
    const categoryData = await cateSchema.find({
      subCategory: { $regex: subCategory, $options: "i" },
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
  checkStatus,
  Status,
};
