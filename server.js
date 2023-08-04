const express = require("express");
const app = express();
const server = require("http").Server(app);
app.use(express.json())

server.listen(process.env.PORT || 3030);

var nodemailer = require('nodemailer');

const transporter = nodemailer.createTransporter({
    port: 465,
    houst: "smtp.gmail.com",
    auth: {
        user: '',
        pass: '',
    },
    secure: true,
})