const notificationSchema = require("../../models/notificationSchema/notificationSchema");

const reportNotification = async (req, res) => {
  try {
    const report = new notificationSchema(req.body);
    const reportData = await report.save();
    res.status(200).json({
      error: false,
      error_code: 200,
      message: "Success",
      results: {
        reportData,
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

const customNotification = async (req, res) => {
  try {
    const custom = new notificationSchema(req.body);
    const customData = await custom.save();
    res.status(200).json({
      error: false,
      error_code: 200,
      message: "Success",
      results: {
        customData,
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

const notificationList = async (req, res) => {
  try {
    const listData = await notificationSchema.find({});
    res.status(200).json({
      error: false,
      error_code: 200,
      message: "Success",
      results: {
        listData,
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
  reportNotification,
  customNotification,
  notificationList,
};
