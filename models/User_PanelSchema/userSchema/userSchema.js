const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const schema = new mongoose.Schema({
  userName: {
    type: String,
    require: true,
  },
  userEmail: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  profile_Pic: {
    type: String,
    require: true,
  },
  gender: {
    type: String,
    require: true,
  },
  birthDay: {
    type: Date,
    require: true,
  },
  mobileNumber: {
    type: Number,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  addressTwo: {
    type: String,
    require: true,
  },
  country: {
    type: String,
    require: true,
  },
  city: {
    type: String,
    require: true,
  },
  pinCode: {
    type: String,
    require: true,
  },
});
schema.set("timestamps", true);
schema.methods.generateUserAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, "ultra-security", {
    expiresIn: "30d",
  });
  return token;
};
module.exports = mongoose.model("userPanel", schema);
