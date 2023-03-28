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
    const otp = `${Math.floor(1000 + Math.random() * 9000)}`;
    var mailOptions = {
      from: "narendracharan25753@gmail.com",
      to: userEmail,
      subject: "Your Signup Successfully",
      text: `this ${otp} otp verify to Email`,
    };
    transporter.sendMail(mailOptions);
    const newOtpVerify = await new userSchema({
      otp: otp,
      expiresAt: Date.now() + 300
    });
    await newOtpVerify.save();
    await transporter.sendMail(mailOptions);
    const createUser = await user.save();
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

const OtpVerify = async (req, res) => {
  try {
    var { userEmail, otp } = req.body;
   if(!userEmail || !otp){
     throw Error("Empty otp details are not allowed")
   }else{
    const userOtpVerify= await userSchema.find({userEmail})
     if(userOtpVerify.length<=0){
      throw Error
     }else{
      const {expiresAt}=userOtpVerify[0]
      if(expiresAt < Date.now()){
        throw Error("otp has expired. please request again")
      }else{
        res.status(200).json({
          error:false,
          error_code:200,
          message:"Otp Verify successFully"
        })
      }
     }
  }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: true,
      error_code: 400,
      message: Error,
    });
  }
};

const editProfile = async (req, res) => {
  try {
    const filepath = `/uploads/${req.file.filepath}`;
    const data = {
      userName: req.body.userName,
      userEmail: req.body.userEmail,
      profile_Pic: filepath,
    };
    await userSchema.findByIdAndUpdate(req.params.id, data, { new: true });
    res.status(200).json({
      error: false,
      error_code: 200,
      message: "Profile Updated",
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
  const userName = req.body.userName;
  try {
  
    var { page, pagesize } = req.body;
    var skip;
    if (page <= 1) {
      skip = 0;
    } else {
      skip = (page - 1) * pagesize;
    }
    const count = await userSchema.count();
    const totalpage = Math.ceil(count / pagesize);
    const createData = await userSchema.find({
      userName: { $regex: userName, option: "i" },
    }).skip(skip).limit(pagesize)
    res.status(200).json({
      error: false,
      error_code: 200,
      message: "Success",
      results: {
        createData,
        totalpage,
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

const userLogin = async (req, res) => {
  const { userEmail, password } = req.body;
  try {
    if (userEmail && password) {
      const login = await userSchema.findOne({ userEmail: userEmail });
      if (login != null) {
        const match = await bcrypt.compare(password, login.password);
        if (match) {
          const token = jwt.sign(
            { userID: login._id },
            process.env.SECRET_KEY,
            { expiresIn: "3d" }
          );
          res.status(200).json({
            error: false,
            error_code: 200,
            message: "Success",
            results: {
              token,
            },
          });
        } else {
          res.status(403).json({
            error: true,
            error_code: 403,
            message: Error,
          });
        }
      } else {
        res.status(403).json({
          error: true,
          error_code: 403,
          message: Error,
        });
      }
    } else {
      res.status(403).json({
        error: true,
        error_code: 403,
        message: Error,
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
      res.status(200).json({
        error: false,
        error_code: 200,
        message: "Success",
        results: {
          useriD: user._id,
          token,
        },
      });
    } else {
      res.status(400).json({
        error: true,
        error_code: 400,
        message: Error,
      });
    }
  } catch (err) {
    res.status(500).json({
      error: true,
      error_code: 500,
      message: Error,
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
        const createPassword = await User.findByIdAndUpdate(user.id, {
          $set: { password: new_Password },
        });
        res.status(200).json({
          error: false,
          error_code: 200,
          message: "Success",
          results: {
            createPassword,
          },
        });
      }
    } else {
      res.status(403).json({
        error: true,
        error_code: 403,
        message: Error,
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

module.exports = {
  userSignup,
  userLogin,
  sendUserResetPassword,
  resetPassword,
  userList,
  createUser,
  userDetails,
  OtpVerify,
  editProfile,
};
