const express = require('express');
const router = express.Router();
const multer = require('multer');
const nodemailer = require('nodemailer');
const path = require('path');
const fs = require('fs');

// Storage setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = path.join(__dirname, '../public/upload');
    if (!fs.existsSync(uploadPath)) fs.mkdirSync(uploadPath, { recursive: true });
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `${file.fieldname}-${timestamp}${ext}`;
    cb(null, filename);
  }
});

const upload = multer({ storage }).fields([
  { name: 'image', maxCount: 1 },
  { name: 'video', maxCount: 1 }
]);

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'thevoiceofazamgarh@gmail.com',
    pass: 'Info@2024'
  }
});

router.post('/', (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      console.error('Upload Error:', err);
      return res.status(500).json({ message: 'File upload failed.' });
    }

    const { name, email, mobile, city, block, subject } = req.body;
    const imageFile = req.files?.image?.[0];
    const videoFile = req.files?.video?.[0];

    const attachments = [];
    if (imageFile) attachments.push({ filename: imageFile.filename, path: imageFile.path });
    if (videoFile) attachments.push({ filename: videoFile.filename, path: videoFile.path });

    try {
      await transporter.sendMail({
        from: email || 'no-reply@voiceofazamgarh.com',
        to: 'thevoiceofazamgarh@gmail.com',
        subject: 'New Community Forum Submission',
        html: `
          <h2>New Submission Received</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mobile:</strong> ${mobile}</p>
          <p><strong>City:</strong> ${city}</p>
          <p><strong>Block:</strong> ${block}</p>
          <p><strong>Subject:</strong> ${subject}</p>
        `,
        attachments
      });

      res.status(200).json({ message: 'Form submitted and email sent successfully.' });
    } catch (error) {
      console.error('Email error:', error);
      res.status(500).json({ message: 'Email sending failed.' });
    }
  });
});

module.exports = router;
