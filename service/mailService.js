const nodemailer=require("nodemailer")

const transporter=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"narendracharan25753@gmail.com",
        pass:"wlrvoxredempejek"
    }
})

module.exports={
    transporter
}