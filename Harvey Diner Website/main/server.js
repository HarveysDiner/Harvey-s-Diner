require('dotenv').config();

// Access the environment variables like this:
const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;

console.log(emailUser); // Will print your email to the console (or use in your app)


require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

app.use(bodyParser.json());

// Route to handle email sending
app.post('/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    let transporter = nodemailer.createTransport({
      service: 'gmail', // You can use other services (e.g., Outlook)
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    let mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // Your receiving email
      subject: `New Contact Form Message: ${subject}`,
      text: `From: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to send email." });
  }
});

// Start the server
app.listen(3000, () => console.log('Server running on port 3000'));


node server.js
