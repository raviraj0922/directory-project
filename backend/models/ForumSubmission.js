const mongoose = require('mongoose');

const forumSubmissionSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  city: String,
  block: String,
  subject: String,
  image: String,
  video: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('ForumSubmission', forumSubmissionSchema);
