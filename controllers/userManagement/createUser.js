const userSchema = require("../../models/userSchema");

const createUser = async (req, res) => {
  const User = new userSchema(req.body);
  try {
    const createUser = await User.save();
    res.status(201).json({
      error: false,
      error_code: 201,
      message: "Success",
      results: {
        createUser,
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

const userList = async (req, res) => {
  try {
    const list = await userSchema.find({});
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

const userSearch = async (req, res) => {
  const created = req.body.userName;
  try {
    const createdData = await userSchema.find({
      userName: { $regex: created, $options: "i" },
    });
    if (createdData.length > 0) {
      res.status(200).json({
        error: false,
        error_code: 200,
        message: "Success",
        results: {
          createdData,
        },
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

const userDetails = async (req, res) => {
  const id = req.params.id;
  try {
    const list = await userSchema.findById(id, {
      _id: 0,
      userName: 1,
      mobileNumber: 1,
      dateOfBirth: 1,
      createdAt: 1,
    });
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

module.exports = {
  createUser,
  userList,
  userSearch,
  userDetails,
};
