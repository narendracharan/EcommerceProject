const categorySchema = require("../../../models/Admin_PanelSchema/categorySchema/categorySchema");
const subCategorySchema = require("../../../models/Admin_PanelSchema/categorySchema/subCategorySchema");
const { error, success } = require("../../response");

exports.categoryList = async (req, res) => {
  try {
    const list = await categorySchema.find().sort({ _id: -1 });
    res.status(200).json(success(res.statusCode, "Success", { list }));
  } catch (err) {
    res.status(400).json(error("Failed", res.statusCode));
  }
};

exports.subCatagoryList = async (req, res) => {
  try {
    const id = req.params.id;
    const listData = await subCategorySchema
      .find({ category_Id: id })
      .sort({ _id: -1 });
    res.status(200).json(success(res.statusCode, "Success", { listData }));
  } catch (err) {
    res.status(400).json(error("Failed", res.statusCode));
  }
};
