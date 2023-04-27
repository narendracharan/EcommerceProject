const contentSchema = require("../../models/contentSchema/contentSchema");
const { success } = require("../response");
const { error } = require("../response");

const createContent = async (req, res) => {
  try {
    const content = new contentSchema(req.body);
    const ContentData = await content.save();
    res.status(201).json(success(res.statusCode, "Success", { ContentData }));
  } catch (err) {
    res.status(400).json(error("Failed", res.statusCode));
  }
};

const updateContent = async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = await contentSchema.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res
      .status(200)
      .json(success(res.statusCode, "Update Successfull", { updateData }));
  } catch (err) {
    res.status(400).json(error("Failed", res.statusCode));
  }
};

const contentList = async (req, res) => {
  try {
    const list = await contentSchema.find({});
    res.status(200).json(success("Success", res.statusCode, { list }));
  } catch (err) {
    res.status(400).json(error("Failed", statusCode));
  }
};

module.exports = { createContent, updateContent, contentList };
