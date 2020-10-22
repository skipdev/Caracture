const path = require('path');
const express = require('express');
const transporter = require('./config');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.json());
app.use(express.static(buildPath));

app.post('/send', (req, res) => {
    try {
        const mailOptions = {
            from: req.body.email, // sender address
            to: process.env.email, // list of receivers
            subject: req.body.subject, // Subject line
            html: `
      <p>You have a new contact request.</p>
      <h3>Contact Details</h3>
      <ul>
        <li>Name: ${req.body.name}</li>
        <li>Surname: ${req.body.surname}</li>
        <li>Email: ${req.body.email}</li>
        <li>Phone: ${req.body.phone}</li>
        <li>Location: ${req.body.location}</li>
        <li>Car Reg: ${req.body.reg}</li>
        <li>Enquiry: ${req.body.enquiry}</li>
      </ul>
      `
        };

        transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
                res.status(500).send({
                    success: false,
                    message: 'Something went wrong. Try again later'
                });
            } else {
                res.send({
                    success: true,
                    message: 'Thank you for contacting us. We will get back to you shortly.'
                });
            }
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'Something went wrong. Try again later'
        });
    }
});

app.listen(3030, () => {
    console.log('server start on port 3030');
});