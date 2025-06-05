const Directory = require('../models/directoryModel');
const asyncHandler = require('../utils/asyncHandler');
const ApiError = require('../utils/apiError');

// Create new directory entry
exports.createDirectory = asyncHandler(async (req, res) => {
  const directory = await Directory.create(req.body);
  res.status(201).json({
    success: true,
    data: directory
  });
});

// Get all directory entries with pagination
exports.getDirectories = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 10;
  const category = req.query.category;
  const search = req.query.search;

  const query = {};
  if (category) query.category = category;
  if (search) {
    query.$or = [
      { name: { $regex: search, $options: 'i' } },
      { description: { $regex: search, $options: 'i' } }
    ];
  }

  const options = {
    page,
    limit,
    sort: { createdAt: -1 }
  };

  const directories = await Directory.aggregatePaginate(
    Directory.aggregate([{ $match: query }]),
    options
  );

  res.status(200).json({
    success: true,
    data: directories
  });
});

// Get single directory entry
exports.getDirectory = asyncHandler(async (req, res) => {
  const directory = await Directory.findById(req.params.id);
  if (!directory) {
    throw new ApiError(404, 'Directory entry not found');
  }
  res.status(200).json({
    success: true,
    data: directory
  });
});

// Update directory entry
exports.updateDirectory = asyncHandler(async (req, res) => {
  const directory = await Directory.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true
    }
  );
  if (!directory) {
    throw new ApiError(404, 'Directory entry not found');
  }
  res.status(200).json({
    success: true,
    data: directory
  });
});

// Delete directory entry
exports.deleteDirectory = asyncHandler(async (req, res) => {
  const directory = await Directory.findByIdAndDelete(req.params.id);
  if (!directory) {
    throw new ApiError(404, 'Directory entry not found');
  }
  res.status(200).json({
    success: true,
    data: {}
  });
}); 

// ✅ New controller
exports.getDirectoryBySlug = async (req, res) => {
  try {
    console.log('Slug requested:', req.params.slug);
    const directory = await Directory.findOne({ slug: req.params.slug });
    if (!directory) {
      console.log('No directory found for slug');
      return res.status(404).json({ message: 'Directory not found', data: null });
    }
    res.json({ data: directory });
  } catch (err) {
    console.error('Error fetching directory by slug:', err);
    res.status(500).json({ message: 'Server error', data: null });
  }
};