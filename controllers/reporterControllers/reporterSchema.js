const reporterSchema = require("../../models/reportsSchema/reportsSchema");
const userSchema = require("../../models/adminSchema/userSchema");
const productSchema = require("../../models/categorySchema/productSchema");

const createReporter = async (req, res) => {
  try {
    const reporter = new reporterSchema(req.body);
    const saveData = await reporter.save();
    res.status(200).json({
      error: false,
      error_code: 200,
      message: "Success",
      results: {
        saveData,
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

const reporterList = async (req, res) => {
  try {
    const list = await reporterSchema.find({});
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

const userView = async (req, res) => {
  try {
    const id = req.params.id;
    const details = await userSchema.findById(id);
    res.status(200).json({
      error: false,
      error_code: 200,
      message: "Success",
      results: {
        details,
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

const productView = async (req, res) => {
  try {
    const id = req.params.id;
    const productDetails = await productSchema.findById(id);
    res.status(200).json({
      error: false,
      error_code: 200,
      message: "Success",
      results: {
        productDetails,
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


module.exports = {
  createReporter,
  reporterList,
  userView,
  productView
};
