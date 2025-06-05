const express = require('express');
const router = express.Router();
const {
  createDirectory,
  getDirectories,
  getDirectory,
  getDirectoryBySlug, // ✅ new
  updateDirectory,
  deleteDirectory
} = require('../controllers/directoryController');

router.route('/')
  .post(createDirectory)
  .get(getDirectories);

router.route('/slug/:slug') // ✅ Add this BEFORE the `/:id` route
  .get(getDirectoryBySlug);

router.route('/:id')
  .get(getDirectory)
  .put(updateDirectory)
  .delete(deleteDirectory);

module.exports = router;
