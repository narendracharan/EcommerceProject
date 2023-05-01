const userSchema = require("../../models/userSchema/userSchema");
const User = require("../../models/userSchema/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { transporter } = require("../../service/mailService");
const { success, error } = require("../response");
const { validationResult } = require("express-validator");


const userSignup = async (req, res) => {
  const user = new userSchema(req.body);
  const { userEmail } = req.body;
  try {
    const error =  validationResult(req);
    if (!error.isEmpty()) {
      return res.status(422).json( { errors: error.array() });
    }
    const exit = await userSchema.findOne({ userEmail: userEmail });
    if (exit) {
    return  res.status(403).json({
        status: "Failed",
        message: "userEmail Already Exited",
      });
    }
    const Salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, Salt);
    const otp = `${Math.floor(1000 + Math.random() * 9000)}`;
    var mailOptions = {
      from: "narendracharan25753@gmail.com",
      to: userEmail,
      subject: "Your Signup Successfully",
      text: `This ${otp} Otp Verify To Email`,
    };
    transporter.sendMail(mailOptions);
    const newOtpVerify = await new userSchema({
      otp: otp,
      expiresAt: Date.now() + 300,
    });
    await newOtpVerify.save();
    await transporter.sendMail(mailOptions);
    const createUser = await user.save();
    res.status(201).json(success(res.statusCode,"Signup Successfully",{createUser}));
  } catch (err) {
    res.status(400).json(error("Failed",res.statusCode));
  }
};

const checkStatus = async (req, res) => {
 
  try {
    const { id } = req.params;
    const updateStatus = await userSchema.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(success(res.statusCode,"Success",{updateStatus}));
  } catch (err) {
    res.status(400).json(error("Failed",res.statusCode));
  }
};

const OtpVerify = async (req, res) => {
  try {
    var { userEmail, otp } = req.body;
    if (!userEmail || !otp) {
      throw Error("Empty Otp Details Are Not Allowed");
    } else {
      const userOtpVerify = await userSchema.find({ userEmail });
      if (userOtpVerify.length <= 0) {
        throw Error;
      } else {
        const { expiresAt } = userOtpVerify[0];
        if (expiresAt < Date.now()) {
          throw Error("Otp Has Expired. Please Request Again");
        } else {
          res.status(200).json(success(res.statusCode,"Verify Otp Successfully"));
        }
      }
    }
  } catch (error) {
    res.status(400).json(error("Failed",res.statusCode));
  }
};

const editProfile = async (req, res) => {
  try {
    const filepath = `/${req.file.filepath}`;
    const data = {
      userName: req.body.userName,
      userEmail: req.body.userEmail,
      profile_Pic: filepath,
    };
   const profileData= await userSchema.findByIdAndUpdate(req.params.id, data, { new: true });
    res.status(200).json(success(res.statusCode,"Profile Updated",{ profileData}));
  } catch (err) {
    res.status(400).json(error("Failed",res.statusCode));
  }
};

const userList = async (req, res) => {
  const userName = req.body.userName;
  try {
    var { page, pagesize } = req.body;
    var skip;
    if (page <= 1) {
    return  skip = 0;
    } else {
      skip = (page - 1) * pagesize;
    }
    const count = await userSchema.count();
    const totalpage = Math.ceil(count / pagesize);
    const createData = await userSchema
      .find({
        userName: { $regex: userName, $options: "i" },
      })
      .skip(skip)
      .limit(pagesize);
    res.status(200).json(success(res.statusCode,"Success",{createData,totalpage}));
  } catch (err) {
    res.status(400).json(error("Failed",res.statusCode));
  }
};

const userLogin = async (req, res) => {
  try {
    const { userEmail, password, status } = req.body;
    if (userEmail && password) {
      const login = await userSchema.findOne({ userEmail: userEmail });
      if (login != null) {
        const match = await bcrypt.compare(password, login.password);
        if (match) {
          const token = await login.generateUserAuthToken();
         return res
            .header("x-auth-token-user", token)
            .header("access-control-expose-headers", "x-auth-token-admin")
            .status(201)
            .json(success(res.statusCode, "Successs", { login, token }));
        } else {
          res.status(403).json(error("User Password Are Incorrect",res.statusCode));
        }
      } else {
        res.status(403).json(error("User Email Are Incorrect",res.statusCode));
      }
    } else {
      res.status(403).json(error("User Email and Password Are Not Valid",res.statusCode));
    }
  } catch (err) {
    res.status(400).json(error("Failed",res.statusCode));
  }
};

const createUser = async (req, res) => {
  try {
    const User = new userSchema(req.body);
    const createUser = await User.save();
    res.status(201).json(success(res.statusCode,"Success",{createUser}));
  } catch (err) {
    res.status(400).json(error("Failed",res.statusCode));
  }
};

const userDetails = async (req, res) => {
  try {
    const id = req.params.id;
    const list = await userSchema.findById(id, {
      _id: 0,
      userName: 1,
      mobileNumber: 1,
      dateOfBirth: 1,
      createdAt: 1,
    });
    res.status(200).json(success(res.statusCode,"Success",{list}));
  } catch (err) {
    res.status(400).json(error("Failed",res.statusCode));
  }
};

const sendUserResetPassword = async (req, res) => {
  try {
    const { userEmail } = req.body;
    const user = await User.findOne({ userEmail: userEmail });
    if (user) {
      const secret = user._id + process.env.SECRET_KEY;
      const token = jwt.sign({ userID: user._id }, secret, { expiresIn: "3d" });
      const link = `http://127.0.0.1:3000/api/user/reset${user._id}/${token}}`;
      let info = await transporter.sendMail({
        from: "narendracharan25753@gmail.com",
        to: userEmail,
        subject: "Email Send For Reset Password",
        text: `<a href=${link}></a>`,
      });
   return res.status(200).json(success(res.statusCode,"Success",{ useriD: user._id,
        token,}));
    } else {
      res.status(400).json(error("Failed",res.statusCode));
    }
  } catch (err) {
    res.status(500).json(error("Failed",res.statusCode));
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
      return  res.status(401).json(error("Password Or Confirm_Password Could Not Be Same",res.statusCode));
      } else {
        const salt = await bcrypt.genSalt(10);
        const new_Password = await bcrypt.hash(password, salt);
        const createPassword = await User.findByIdAndUpdate(user.id, {
          $set: { password: new_Password },
        });
        res.status(200).json(success(res.statusCode,"Success",{createPassword}));
      }
    } else {
      res.status(403).json(error("Failed",res.statusCode));
    }
  } catch (err) {
    res.status(400).json(error("Failed",res.statusCode));
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
  checkStatus,
};
