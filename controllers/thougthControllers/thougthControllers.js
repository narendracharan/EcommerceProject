const thougthSchema = require("../../models/thougthSchema/thougthSchema");
const { error, success } = require("../response");

const createThougth = async (req, res) => {
  try {
    const thougth = new thougthSchema(req.body);
    const thoughtsData = await thougth.save();
    res.status(201).json(success(res.statusCode, "Success", { thoughtsData }));
  } catch (err) {
    res.status(400).json(error("Failed", res.statusCode));
  }
};

const thougthList = async (req, res) => {
  try {
    const list = await thougthSchema.find({});
    res.status(200).json(success(req.statusCode, "Success", { list }));
  } catch (err) {
    res.status(400).json(error("Failed", res.statusCode));
  }
};

const thougthSearch = async (req, res) => {
  try {
    const title = req.body.title;
    const searchData = await thougthSchema.find({
      title: { $regex: title, $options: "i" },
    });
    if (searchData.length > 0) {
   return res.status(200).json(success(res.statusCode, "Success", { searchData }));
    } else {
      res.status(200).json(error("Data are Not Found", res.statusCode));
    }
  } catch (err) {
    res.status(400).json(error("Failed", res.statusCode));
  }
};
module.exports = {
  createThougth,
  thougthList,
  thougthSearch,
};
