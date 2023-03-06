const cateSchema = require("../../models/categorySchema");

const createAttribute = async (req, res) => {
  const attribute = new cateSchema(req.body);
  try {
    await attribute.save();
    res.status(201).json({
      status: "Success",
      message: "Attribute Created",
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};

const attributeList = async (req, res) => {
  try {
    const list = await cateSchema.find({});
    res.status(200).json({
      status: "Successs",
      message: "All Attribute List",
      list,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
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
      status: "Success",
      message: "Attribute updated",
      update,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
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
        status: "Success",
        attributeDetails: categoryData,
      });
    } else {
      res.status(200).json({
        status: "Failed",
        message: "Attributes Not Found",
      });
    }
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};
module.exports = {
  createAttribute,
  attributeList,
  attributeUpdate,
  attributeSearch,
};
