const helpSchema = require("../../models/helpSchema/helpSchema");
const { error, success } = require("../response");

const createhelp = async (req, res) => {
  try {
    const help = new helpSchema(req.body);
    const helpData = await help.save();
    res.status(201).json(success(res.statusCode, "Success", { helpData }));
  } catch (err) {
    res.status(400).json(error("Failed", res.statusCode));
  }
};

const helpList = async (req, res) => {
  try {
    const list = await helpSchema.find({});
    res.status(200).json(success(res.statusCode, "Success", { list }));
  } catch (err) {
    res.status(400).json(error("Failed", res.statusCode));
  }
};

const helpSearch = async (req, res) => {
  try {
    const categoryName = req.body.categoryName;
    const searchData = await helpSchema.find({
      categoryName: { $regex: categoryName, $options: "i" },
    });
    if (searchData.length > 0) {
      res.status(200).json(success(res.statusCode, "Success", { searchData }));
    } else {
      res.status(200).json(error("Data are Not Found", res.statusCode));
    }
  } catch (err) {
    res.status(400).json(error("Failed", res.statusCode));
  }
};

const createQuestion = async (req, res) => {
  try {
    const question = new helpSchema(req.body);
    const questionData = await question.save();
    res.status(201).json(success(res.statusCode, "Success", { questionData }));
  } catch (err) {
    res.status(400).json(error("Failed", res.statusCode));
  }
};

const questionList = async (req, res) => {
  try {
    const listData = await helpSchema.find();
    res.status(200).json(success(res.statusCode, "Success", { listData }));
  } catch (err) {
    res.status(400).json(error("Failed", res.statusCode));
  }
};

const updateQuestion = async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = await helpSchema.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(success(res.statusCode, "Success", { updateData }));
  } catch (err) {
    res.status(400).json(error("Failed", res.statusCode));
  }
};
module.exports = {
  createhelp,
  helpList,
  helpSearch,
  createQuestion,
  questionList,
  updateQuestion,
};
