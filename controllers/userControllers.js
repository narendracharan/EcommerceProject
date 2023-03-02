const userSchema = require("../models/userSchema");
const User = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { transporter } = require("../service/mailService");

const userSignup = async (req, res) => {
  const user = new userSchema(req.body);
  const { userEmail } = req.body;
  try {
    const exit = await userSchema.findOne({ userEmail: userEmail });
    if (exit) {
      res.status(403).json({
        status: "Failed",
        message: "userEmail already exited",
      });
    }
    const Salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, Salt);

    await user.save();
    res.status(201).json({
      status: "Success",
      message: "User Signup SuccessFully",
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};

const userLogin = async (req, res) => {
  const { userEmail, password } = req.body;
  try {
    if (userEmail && password) {
      const login = await userSchema.findOne({ userEmail: userEmail });
      if (login != null) {
        const match = await bcrypt.compare(password, login.password);
        if (!match) {
          const token = jwt.sign(
            { userID: login._id },
            process.env.SECRET_KEY,
            { expiresIn: "3d" }
          );
          res.status(200).json({
            status: "Success",
            message: "User Login SuccessFully",
            userToken: token,
          });
        } else {
          res.status(403).json({
            status: "Failed",
            message: "password are incorrect",
          });
        }
      } else {
        res.status(403).json({
          status: "Failed",
          message: "userEmail are incorrect",
        });
      }
    } else {
      res.status(403).json({
        status: "Failed",
        message: "userEmail and password are inccorect",
      });
    }
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};

const sendUserResetPassword = async (req, res) => {
  const { userEmail } = req.body;
  try {
    const user = await User.findOne({ userEmail: userEmail });
    if (user) {
      const secret = user._id + process.env.SECRET_KEY;
      const token = jwt.sign({ userID: user._id }, secret, { expiresIn: "3d" });
      const link = `http://127.0.0.1:3000/api/user/reset${user._id}/${token}}`;
      let info = await transporter.sendMail({
        from: "narendracharan25753@gmail.com",
        to: userEmail,
        subject: "Email send for reset password",
        text: `<a href=${link}></a>`,
      });
      console.log(info);
      res.status(200).json({
        status: "success",
        message: "Email Send Successfully",
        userToken: token,
        user_ID: user._id,
      });
    } else {
      res.status(550).json({
        status: "Failed",
        message: "userEmail is required",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};

const resetPassword = async (req, res) => {
  const { password, confirmPassword } = req.body;
  const { id, token } = req.params;
  const user = await User.findById(id);
  const new_secret = user._id + process.env.SECRET_KEY;
  try {
    jwt.verify(token, new_secret);
    if ((password, confirmPassword)) {
      if (password !== confirmPassword) {
        res.status(401).json({
          status: "Failed",
          message: "Password or confirm_Password could not be same",
        });
      } else {
        const salt = await bcrypt.genSalt(10);
        const new_Password = await bcrypt.hash(password, salt);
        await User.findByIdAndUpdate(user.id, {
          $set: { password: new_Password },
        });
        res.status(200).json({
          status: "Success",
          message: "Password Reset Successfully",
        });
      }
    } else {
      res.status(403).json({
        status: "Failed",
        message: "All filed are required",
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
  userSignup,
  userLogin,
  sendUserResetPassword,
  resetPassword,
};
