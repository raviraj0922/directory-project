const mongoose = require('mongoose');

const searchSchema = new mongoose.Schema({
  query: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    trim: true
  },
  location: {
    type: String,
    trim: true
  },
  results: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Directory'
  }],
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const Search = mongoose.model('Search', searchSchema);

module.exports = Search; 