const userSchema = require("../../models/userSchema");

const createUser = async (req, res) => {
  const User = new userSchema(req.body);
  try {
    await User.save();
    res.status(201).json({
      status: "Success",
      message: "User Created",
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};

const userList = async (req, res) => {
  try {
    const list = await userSchema.find({});
    res.status(200).json({
      status: "Success",
      message: "All User List",
      list,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
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
        status: "Success",
        message: "All User List",
        createdData,
      });
    }
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
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
      status: "Success",
      message: "User Details",
      list,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};

module.exports = {
  createUser,
  userList,
  userSearch,
  userDetails,
};
