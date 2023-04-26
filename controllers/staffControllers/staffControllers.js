const staffSchema = require("../../models/adminSchema/userSchema");
const bcrypt=require("bcrypt")

const createStaff = async (req, res) => {
  try {
    const staff = new staffSchema(req.body);
    const salt=await bcrypt.genSalt(10)
    staff.password=await bcrypt.hash(staff.password,salt)
    const saveData = await staff.save();
    res.status(200).json({
      error: false,
      error_code: 200,
      message: "Success",
      results: {
        saveData,
      },
    });
  } catch {
    res.status(400).json({
      error: true,
      error_code: 400,
      message: Error,
    });
  }
};

const staffList = async (req, res) => {
  try {
    const list = await staffSchema.find({});
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

const staffSearch = async (req, res) => {
  try {
    const staff = req.body.staffName;
    const staffData = await staffSchema.find({
      StaffName: { $regex: staff, $options: "i" },
    });
    if (staffData.length > 0) {
      res.status(200).json({
        error: false,
        error_code: 200,
        message: "Success",
        results: {
          staffData,
        },
      });
    } else {
      res.status(200).json({
        error: true,
        error_code: 200,
        message: "Data Not Found",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({
      error: true,
      error_code: 400,
      message: Error,
    });
  }
};

const updateStaff = async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = await staffSchema.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({
      error: false,
      error_code: 200,
      message: "Success",
      results: {
        updateData,
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

module.exports = { createStaff, staffList, staffSearch, updateStaff };
