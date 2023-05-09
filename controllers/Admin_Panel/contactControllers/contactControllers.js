const contactSchema = require("../../../models/Admin_PanelSchema/contactSchema/contact");
const { error, success } = require("../../response");

exports.createContact = async (req, res) => {
  try {
    const contact = new contactSchema(req.body);
    const contactData = await contact.save();
    res.status(201).json(success(res.statusCode, "Success", { contactData }));
  } catch (err) {
    res.status(400).json(error("Failed", res.statusCode));
  }
};

exports.contactlist = async (req, res) => {
  try {
    const list = await contactSchema.find({});
    res.status(200).json(success(res.statusCode, "Success", { list }));
  } catch (err) {
    res.status(400).json(error("Failed", res.statusCode));
  }
};

exports.contactDelete = async (req, res) => {
  try {
    const id = req.params.id;

    const deletData = await contactSchema.findByIdAndDelete(id);
       res
      .status(200)
      .json(success(res.statusCode, "Success DeletedData", { deletData }));
  } catch (err) {
    res.status(400).json(error("Failed", res.statusCode));
  }
};

exports.contactView = async (req, res) => {
  try {
    const id=req.params.id
    const contactData=await contactSchema.findById(id,{"_id":0,"userName":0,"subject":0,"status":0,"Email":0})
    res.status(200).json(success("Success",res.statusCode,{contactData}))
  } catch (err) {
    res.status(400).json(error("Failed", res.statusCode));
  }
};
