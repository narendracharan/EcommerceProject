const announcementSchema = require("../../models/announcementSchema/announcementSchema");
const { success, error } = require("../response");

const createAnnouncement = async (req, res) => {
  try {
    const create = new announcementSchema(req.body);
    const filepath = `/uploads/${req.file.filename}`;
    create.pic = filepath;
    const saveData = await create.save();
    res.status(200).json(success(res.statusCode,"Success",{saveData}));
  } catch (err) {
    res.status(400).json(error("Failed",res.statusCode));
  }
};

const searchAnnouncement = async (req, res) => {
  try {
    const heading = req.body.heading;
    const searchData = await announcementSchema.find({
      heading: { $regex: heading, $options: "i" },
    });
    if (searchData.length > 0) {
    return  res.status(200).json(success(res.statusCode,"Success",{searchData}));
    } else {
      res.status(200).json(error("Data are Not Found",res.statusCode));
    }
  } catch (err) {
    res.status(400).json(error("Failed",res.statusCode));
  }
};

const announcementList = async (req, res) => {
  try {
    const list = await announcementSchema.find({});
    res.status(200).json(success(res.statusCode,"Success",{list}));
  } catch (err) {
    res.status(400).json(error("Failed",res.statusCode));
  }
};

module.exports = {
  createAnnouncement,
  searchAnnouncement,
  announcementList
};
