const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Email config
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'thevoiceofazamgarh@gmail.com',
    pass: 'Info@2024' // Replace with Gmail App Password
  }
});

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await transporter.sendMail({
      from: email,
      to: 'thevoiceofazamgarh@gmail.com',
      subject: 'New Contact Message',
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    });

    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (err) {
    console.error('Email send error:', err);
    res.status(500).json({ message: 'Failed to send email.' });
  }
});

module.exports = router;
