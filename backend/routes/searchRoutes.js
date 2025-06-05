const express = require('express');
const router = express.Router();
const {
  search,
  getSearchHistory
} = require('../controllers/searchController');

router.get('/', search);
router.get('/history', getSearchHistory);

module.exports = router; 