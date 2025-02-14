const nodeMailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

const transporter = nodeMailer.createTransport({
    secure: true,
    host: "smtp.gmail.com",
    port: 465,
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    }
});

module.exports = transporter;
