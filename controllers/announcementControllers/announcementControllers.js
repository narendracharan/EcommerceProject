const announcementSchema = require("../../models/announcementSchema/announcementSchema");

const createAnnouncement = async (req, res) => {
  try {
    const create = new announcementSchema(req.body);
    const filepath = `/uploads/${req.file.filename}`;
    create.pic = filepath;
    const saveData = await create.save();
    res.status(200).json({
      error: false,
      error_code: 200,
      message: "Success",
      results: {
        saveData,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      error: true,
      error_code: 400,
      message: Error,
    });
  }
};

const searchAnnouncement = async (req, res) => {
  try {
    const heading = req.body.heading;
    const searchData = await announcementSchema.find({
      heading: { $regex: heading, $options: "i" },
    });
    if (searchData.length > 0) {
      res.status(200).json({
        error: false,
        error_code: 200,
        message: "Success",
        results: {
          searchData,
        },
      });
    } else {
      res.status(200).json({
        error: true,
        error_code: 200,
        message: "Data are Not Found",
      });
    }
  } catch (err) {
    res.status(400).json({
      error: true,
      error_code: false,
      message: Error,
    });
  }
};

const announcementList = async (req, res) => {
  try {
    const list = await announcementSchema.find({});
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
  createAnnouncement,
  searchAnnouncement,
  announcementList
};
