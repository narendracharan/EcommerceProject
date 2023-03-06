const userSchema = require("../../models/userManSchema");

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

const userFollower = async (req, res) => {
  const { id, follower } = req.params;
  try {
    const userFollower = await userSchema.findById(id).select("follower");
    if (follower == "true") {
      let follower = userFollower.follower;
      follower++;
      const updateFollower = await userSchema.findOneAndUpdate(
        userFollower.id,
        { $set: { follower: follower } },
        { new: true }
      );
      res.status(200).json({
        status: "Success",
        message: "Follower update Successfully",
      });
    } else {
      let follower = userFollower.follower;
      follower--;
      const updateFollower = await userSchema.findByIdAndUpdate(
        userFollower.id,
        { $set: { follower: follower } },
        { new: true }
      );
      res.status(200).json({
        status: "Success",
        message: "userUnfollow SuccessFully",
      });
    }
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};

const userFollowing = async (req, res) => {
  const { id, following } = req.params;
  try {
    const userFollowing = await userSchema.findById(id).select("following");
    if (following == "true") {
      let following = userFollowing.following;
      following++;
      const updateFollowing = await userSchema.findOneAndUpdate(
        userFollowing.id,
        { $set: { following: following } },
        { new: true }
      );
      res.status(200).json({
        status: "Success",
        message: "Following update Successfully",
      });
    } else {
      let following = userFollower.following;
      following--;
      const updateFollowing = await userSchema.findByIdAndUpdate(
        userFollowing.id,
        { $set: { following: following } },
        { new: true }
      );
      res.status(200).json({
        status: "Success",
        message: "userUnfollowing SuccessFully",
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
      mobiileNumber: 1,
      dateOfBirth: 1,
      createdAt: 1,
      follower: 1,
      following: 1,
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
  userFollower,
  userFollowing,
  userDetails,
};
