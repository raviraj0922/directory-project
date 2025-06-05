const multer = require('multer');
const path = require('path');

// Custom filename with timestamp
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/upload');
  },
  filename: function (req, file, cb) {
    const timestamp = new Date().toISOString().replace(/[-:.TZ]/g, '');
    const ext = path.extname(file.originalname);
    const prefix = file.fieldname; // 'image' or 'video'
    cb(null, `${prefix}_${timestamp}${ext}`);
  },
});

const upload = multer({ storage });

module.exports = upload;
