const nodeMailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

const transporter = nodeMailer.createTransport({
    secure: true,
    host: "smtp.gmail.com",
    port: 465,
    service: "gmail",
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
    }
});

module.exports = transporter;
