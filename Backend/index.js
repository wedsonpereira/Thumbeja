const express = require("express");
const nodemailer = require("nodemailer");
const fs = require('fs');
require("dotenv").config();
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors({
    origin: process.env.APP_URL,
    methods: ["POST", "GET"],
    credentials: true
}));
app.use(express.json());

// Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.GMAIL_USERNAME,
        pass: process.env.GMAIL_PASSWORD
    }
});

// POST route
app.post("/contactform", async (req, res) => {
    const { name, email } = req.body;
    console.log(name, email);
    const htmlPath = path.join(__dirname, 'email.html');
    let htmlContent = fs.readFileSync(htmlPath, 'utf8');
    htmlContent = htmlContent.replace("{{name}}", name);

    try {
        await transporter.sendMail({
            from: process.env.GMAIL_USERNAME,
            to: email,
            subject: `Contact submission form ${process.env.COMPANY}`,
            html: htmlContent
        });

        const timestamp = new Date().toLocaleTimeString();
        res.status(200).json({
            status: "success",
            message: "The message has been sent",
            time: timestamp
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
        console.log(err);
    }
});

app.listen(port, () => {
    console.log("Server is running on port:", port);
});
